import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios'
// axios
// Sidebaruse

const baseUrl = 'http://127.0.0.1:8000/api/'
const TeacherMyCourses = () => {
    const [courseData, setcourseData] = useState([]);
    const teacherId = localStorage.getItem('teacherId')
    // const { course_id } = useParams()

    useEffect(() => {
        try {
            axios.get(baseUrl + 'teacher-courses/' + teacherId).then((r) => {
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
                                            <td> <Link to={"/all-chapters/" + course.id}>{course.title}</Link></td>
                                            <td> <img src={course.featured_img} alt={course.title} width="80" className='rounded' /></td>
                                            <td>123</td>
                                            <td>
                                                <Link className='btn btn-info btn-sm ' to={'/edit-course/' + course.id}> Edit</Link>
                                                <Link className='btn btn-primary btn-sm' to={'/add-chapter/' + course.id}> Add Chapter</Link>
                                                <Link to="/"> <button className='btn btn-danger btn-sm'>Delete</button></Link>

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