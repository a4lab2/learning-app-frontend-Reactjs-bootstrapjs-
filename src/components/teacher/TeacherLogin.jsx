import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const baseUrl = 'http://127.0.0.1:8000/api'
const TeacherLogin = () => {
    const [TeacherLoginData, setTeacherLoginData] = useState({
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        setTeacherLoginData({ ...TeacherLoginData, [e.target.name]: e.target.value })
    }
    const submitForm = (e) => {
        const teacherLoginFormData = new FormData;
        teacherLoginFormData.append("email", TeacherLoginData.email)
        teacherLoginFormData.append("password", TeacherLoginData.password)

        try {
            axios.post(baseUrl + '/teacher-login', teacherLoginFormData).then((r) => {
                if (r.data.bool == true) {
                    localStorage.setItem('teacherLoginStatus', true)
                    localStorage.setItem('teacherId', r.data.teacher_id)
                    window.location.href = '/teacher-dashboard'
                }
            })
        } catch (error) {
            setTeacherLoginData({ 'status': 'failure' })
        }
    }
    const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
    if (teacherLoginStatus == 'true') {
        window.location.href = '/teacher-dashboard'
    }
    return (
        <div className="container mt-5">
            <div className="text-start row">
                <div className="col-8 offset-2">
                    <div className="card">
                        <h3 className='card-header'>Teacher login</h3>
                        <div className="card-body">
                            {/* <form> */}
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" name="email" value={TeacherLoginData.email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name="password" value={TeacherLoginData.password} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" onClick={submitForm} className="btn btn-primary">Login</button>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherLogin