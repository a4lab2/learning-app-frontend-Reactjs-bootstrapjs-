import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios'
import Swal from 'sweetalert2'
const baseUrl = 'http://127.0.0.1:8000/api'

const EditChapter = () => {
    const [chapterData, setchapterData] = useState({
        course: '',
        title: '',
        description: '',
        previousVideo: '',
        video: '',
        remarks: '',

    });
    const handleChange = (e) => {
        setchapterData({ ...chapterData, [e.target.name]: e.target.value })
    }

    const handleFileChange = (e) => {
        setchapterData({ ...chapterData, [e.target.name]: e.target.files[0] })
    }
    const formSubmit = () => {
        const _formData = new FormData();
        _formData.append('course', chapterData.course)
        _formData.append('title', chapterData.title)
        _formData.append('description', chapterData.description)
        if (chapterData.video !== '') {
            _formData.append('video', chapterData.video, chapterData.video.name)
        }
        // _formData.append('video', chapterData.video, chapterData.video.name)
        _formData.append('remarks', chapterData.remarks)
        try {
            axios.put(baseUrl + '/chapter/' + chapter_id, _formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }).then((r) => {
                if (r.status == 200) {

                    Swal.fire({
                        title: 'Data has beem updated!',
                        icon: 'success',
                        toast: true,
                        timer: 3000,
                        position: 'top-right',
                        timerProgressBar: true,

                        showConfirmButton: false,
                    })
                }
            }
            )
        } catch (error) {
            console.log(error)
        }
    }

    const { chapter_id } = useParams()
    useEffect(() => {
        try {
            axios.get(baseUrl + '/chapter/' + chapter_id).then((r) => {
                console.log(r)
                // settotalResult(r.data.length)
                setchapterData({
                    course: r.data.course,
                    title: r.data.title,
                    description: r.data.description,
                    previousVideo: r.data.video,
                    video: '',
                    remarks: r.data.remarks,
                })
            })
        } catch (error) {
            console.log(error)
        }
    }, [])
    console.log(chapterData)
    return (
        <div className="container mt-4">
            <div className="row">

                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9' >
                    <div className="card">
                        <h5 className='card-header'>Update Chapter</h5>
                        <div className="card-body">



                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label">Title</label>
                                <div className="col-sm-8">
                                    <input type="text" onChange={handleChange} value={chapterData.title} name='title' className="form-control" id="staticEmail" />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label">Description</label>
                                <div className="col-sm-8">
                                    <textarea className='form-control' onChange={handleChange} value={chapterData.description} name="description" ></textarea>                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label">Video</label>
                                <div className="col-sm-8">
                                    <input type="file" onChange={handleFileChange} name='video' className="form-control" id="staticEmail" />
                                    {chapterData.previousVideo &&
                                        <video width="320" height="240" controls>
                                            <source src={chapterData.previousVideo} type="video/mp4" />
                                        </video>
                                    }
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label">Remarks</label>
                                <div className="col-sm-8">
                                    <textarea onChange={handleChange} value={chapterData.remarks} className='form-control' name="remarks" ></textarea>                                </div>
                            </div>
                            <hr />
                            <button onClick={formSubmit} className='btn btn-primary'>Submit</button>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default EditChapter