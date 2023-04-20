import React, { useEffect, useState } from 'react'
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const baseUrl = 'http://127.0.0.1:8000/api'
const AddChapter = () => {
    // const teacherId = localStorage.getItem('teacherId')
    const { course_id } = useParams()
    const [cats, setcats] = useState([]);
    const [chapterData, setchapterData] = useState({

        title: '',
        description: '',
        video: '',
        remarks: '',

    });


    const handleChange = (e) => {
        setchapterData({ ...chapterData, [e.target.name]: e.target.value })
    }

    const handleFileChange = (e) => {
        setchapterData({ ...chapterData, [e.target.name]: e.target.files[0] })
    }
    // console.log(course_id)

    const formSubmit = () => {
        const _formData = new FormData();

        _formData.append('course', course_id)
        _formData.append('title', chapterData.title)
        _formData.append('description', chapterData.description)
        _formData.append('video', chapterData.video, chapterData.video.name)
        _formData.append('remarks', chapterData.remarks)
        try {
            axios.post(baseUrl + '/chapter/', _formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }).then((r) => {
                window.location.href = '/add-chapter/1'
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="container mt-4">
            <div className="row">

                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9' >
                    <div className="card">
                        <h5 className='card-header'>My Dashboard</h5>
                        <div className="card-body">



                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label">Title</label>
                                <div className="col-sm-8">
                                    <input type="text" name='title' onChange={handleChange} className="form-control" id="staticEmail" />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label">Description</label>
                                <div className="col-sm-8">
                                    <textarea className='form-control' onChange={handleChange} name="description" ></textarea>                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label">Video</label>
                                <div className="col-sm-8">
                                    <input type="file" name='video' onChange={handleFileChange} className="form-control" id="staticEmail" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label">Remarks</label>
                                <div className="col-sm-8">
                                    <textarea onChange={handleChange} className='form-control' name="remarks" ></textarea>                                </div>
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

export default AddChapter