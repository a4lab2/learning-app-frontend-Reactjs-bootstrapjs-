import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios'
// axios
// Sidebar

const baseUrl = 'http://127.0.0.1:8000/api/'
const TeacherMyCourses = () => {
    const [courseData, setcourseData] = useState([]);
    const teacherId = localStorage.getItem('teacherId')
    useEffect(() => {
        try {
            axios.get(baseUrl + 'teacher-course/' + teacherId).then((r) => {
                console.log(r)
                setcourseData(r.data)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9' >
                    <div className="card">
                        <h5 className='card-header'>My Courses</h5>
                        <div className="card-body">
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th scope="col">Course Name</th>
                                        <th scope="col">Featured Image</th>
                                        <th scope="col">Enrolled</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courseData.map((course, index) =>
                                        < tr key={index}>
                                            <td> {course.title}</td>
                                            <td> <img src={course.featured_img} alt={course.title} width="80" className='rounded' /></td>
                                            <td>123</td>
                                            <td>
                                                <Link to="/"> <button className='btn btn-danger btn-sm'>Delete</button></Link>
                                                <Link className='btn btn-primary btn-sm' to={'/add-chapter/' + course.id}> Add Chapter</Link>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </section>
            </div >
        </div >
    )
}

export default TeacherMyCourses