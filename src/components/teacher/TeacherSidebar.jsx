import React from 'react'
import { Link } from 'react-router-dom'
// Link
const TeacherSidebar = () => {
    return (
        <div className="card">
            <h5 className='card-header'>Dashboard</h5>
            <div className="list-group list-group-flush">
                <Link to="/teacher-dashboard" className='list-group-item list-group-item-action'>Dashboard</Link>
                <Link to="/teacher-my-courses" className='list-group-item list-group-item-action'>My Courses</Link>
                <Link to="/my-users" className='list-group-item list-group-item-action'>My Users</Link>
                <Link to="/add-course" className='list-group-item list-group-item-action'>Add Courses</Link>
                <Link to="/teacher-profile-setting" className='list-group-item list-group-item-action'>Profile Setting</Link>
                <Link to="/teacher-change-password" className='list-group-item list-group-item-action'>Change Password</Link>
                <Link to="/teacher-logout" className='text-danger list-group-item list-group-item-action'>Logout</Link>
            </div>
        </div>
    )
}

export default TeacherSidebar