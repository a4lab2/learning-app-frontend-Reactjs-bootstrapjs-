
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const baseUrl = 'http://127.0.0.1:8000/api/teacher/'
const TeacherRegister = () => {
    useEffect(() => { document.title = 'Teacher Register' })

    const [teacherData, setTeacherData] = useState({
        'full_name': '',
        'email': '',
        'password': '',
        'qualification': '',
        'mobile_no': '',
        'skills': '',
        'status': '',
    });
    const handleChange = (e) => {
        setTeacherData({ ...teacherData, [e.target.name]: e.target.value })

    }

    const submitForm = (e) => {
        const teacherFormData = new FormData();
        teacherFormData.append("full_name", teacherData.full_name)
        teacherFormData.append("email", teacherData.email)
        teacherFormData.append("password", teacherData.password)
        teacherFormData.append("qualification", teacherData.qualification)
        teacherFormData.append("mobile_no", teacherData.mobile_no)
        teacherFormData.append("skills", teacherData.skills)

        try {
            axios.post(baseUrl, teacherFormData).then((r) => {
                setTeacherData({
                    'full_name': '',
                    'email': '',
                    'password': '',
                    'qualification': '',
                    'mobile_no': '',
                    'skills': '',
                    'status': 'success',
                })
            })
        } catch (error) {
            setTeacherData({ 'status': 'failure' })
        }
    }

    const teacherloginStatus = localStorage.getItem('teacherloginStatus')
    if (teacherloginStatus == 'true') {
        window.location.href = '/teacher-dashboard'
    }
    return (
        <div className="container mt-5">
            <div className="text-start row">
                <div className="col-8 offset-2">
                    {teacherData.status == "success" && <p className='text-success'>Thanks for your registration</p>}
                    {teacherData.status == "failure" && <p className='text-success'>Something went wrong</p>}
                    <div className="card">
                        <h3 className='card-header'>Teacher Register</h3>
                        <div className="card-body">
                            {/* <form> */}
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Fullname</label>
                                <input name='full_name' value={teacherData.full_name} onChange={handleChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input name='email' onChange={handleChange} value={teacherData.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input name='password' onChange={handleChange} value={teacherData.password} type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Qualification</label>
                                <input name='qualification' onChange={handleChange} value={teacherData.qualification} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Mobile Number</label>
                                <input name='mobile_no' onChange={handleChange} value={teacherData.mobile_no} type="tel" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Skills</label>
                                <textarea className='form-control' value={teacherData.skills} onChange={handleChange} name="skills" ></textarea>
                                <div id="emailHelp" className="form-text">python,golang,php.</div>
                            </div>

                            <button type="submit" onClick={submitForm} className="btn btn-primary">Register</button>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherRegister