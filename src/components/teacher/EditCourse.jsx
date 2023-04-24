import React, { useEffect, useState } from 'react'
import TeacherSidebar from './TeacherSidebar'
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api'
const EditCourse = () => {
    const teacherId = localStorage.getItem('teacherId')

    const [cats, setcats] = useState([]);
    const [courseData, setcourseData] = useState({
        category: '',
        title: '',
        description: '',
        previous_img: '',
        f_img: '',
        techs: '',

    });
    const { course_id } = useParams()

    useEffect(() => {
        try {
            axios.get(baseUrl + '/category').then((r) => {
                console.log(r)
                setcats(r.data)
            })
        } catch (error) {
            console.log(error)
        }

        // fetch specific data 

        try {
            axios.get(baseUrl + '/teacher-course-detail/' + course_id).then((r) => {
                console.log(r)
                // settotalResult(r.data.length)
                setcourseData({
                    category: r.data.category,
                    title: r.data.title,
                    description: r.data.description,
                    previous_img: r.data.featured_img,
                    f_img: "",
                    techs: r.data.techs,
                })
            })
        } catch (error) {
            console.log(error)
        }
    }, []);

    const handleChange = (e) => {
        setcourseData({ ...courseData, [e.target.name]: e.target.value })
    }

    const handleFileChange = (e) => {
        setcourseData({ ...courseData, [e.target.name]: e.target.files[0] })
    }


    const formSubmit = () => {
        const _formData = new FormData();
        _formData.append('category', courseData.category)
        _formData.append('teacher', teacherId)
        _formData.append('title', courseData.title)

        _formData.append('description', courseData.description)
        if (courseData.f_img !== '') {
            _formData.append('featured_img', courseData.f_img, courseData.f_img.name)
        }
        // _formData.append('featured_img', courseData.f_img, courseData.f_img.name)
        _formData.append('techs', courseData.techs)
        try {
            axios.put(baseUrl + '/teacher-course-detail/' + course_id, _formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }).then((r) => {
                // window.location.href = '/add-course'
                Swal.fire({
                    title: 'Data has beem updated!',
                    icon: 'success',
                    toast: true,
                    timer: 3000,
                    position: 'top-right',
                    timerProgressBar: true,
                    showConfirmButton: false,
                })

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
                        <h5 className='card-header'>All Chapters </h5>
                        <div className="card-body">

                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label">Category</label>
                                <div className="col-sm-8">
                                    <select name="category" value={courseData.category} onChange={handleChange} className='form-control' id="">
                                        {cats.map((category, index) => {
                                            return <option key={index} value={category.id}>{category.title}</option>
                                        })}

                                    </select>
                                </div>
                            </div>


                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label">Title</label>
                                <div className="col-sm-8">
                                    <input type="text" value={courseData.title} name='title' onChange={handleChange} className="form-control" id="staticEmail" />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label">Description</label>
                                <div className="col-sm-8">
                                    <textarea className='form-control' value={courseData.description} onChange={handleChange} name="description" ></textarea>                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label">Featured Image</label>
                                <div className="col-sm-8">
                                    <input type="file" name='f_img' onChange={handleFileChange} className="form-control" id="staticEmail" />

                                    {courseData.previous_img &&

                                        <p className='mt-3'>
                                            <img src={courseData.previous_img} width={300} />

                                        </p>
                                    }

                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label">Technologies</label>
                                <div className="col-sm-8">
                                    <textarea onChange={handleChange} value={courseData.techs} className='form-control' name="techs" ></textarea>                                </div>
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

export default EditCourse