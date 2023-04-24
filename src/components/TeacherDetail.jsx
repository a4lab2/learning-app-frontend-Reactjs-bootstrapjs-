import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const baseUrl = 'http://127.0.0.1:8000/api/'

const TeacherDetail = () => {
    const { teacher_id } = useParams()
    const [courseData, setcourseData] = useState([]);
    const [teacherData, setTeacherData] = useState([]);
    useEffect(() => {
        try {
            axios.get(baseUrl + 'teacher/' + teacher_id).then((r) => {
                console.log(r)
                setTeacherData(r.data)
                setcourseData(r.data.teacher_courses)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])
    console.log(courseData)

    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-4">
                    <img src="/logo192.png" className='img-thumbnail' alt="teacher-image" />
                </div>
                <div className="col-8 text-start">
                    <h3>{teacherData.full_name}</h3>
                    <p>{teacherData.detail}</p>
                    <small>

                        <p className='fw-bold'>Skills: <Link to="/category/golang">Golang</Link>, <Link to="/category/php">PHP</Link>,
                            <Link to="/category/python">Python</Link></p>
                        <p className='fw-bold'>Recent Courses: <Link to="/category/golang">Golang</Link></p>

                        <p className='fw-bold'>Rating: 4/5</p>
                    </small>

                </div>
            </div>
            <div className="card mt-4 text-start" >
                <div className="card-header">
                    Course List
                </div>
                <div className="list-group list-group-flush">
                    {
                        courseData.map((course, index) =>
                            <Link to={`/detail/${course.id}`} className='list-group-item list-group-item-action'>{course.title}</Link>

                        )

                    }



                </div>
            </div>



        </div>
    )
}

export default TeacherDetail