import React from 'react'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import About from './About'
// MyCourses 
// FavoriteCourses
import { Routes as Switch, Route } from 'react-router-dom'
import CourseDetail from './CourseDetail'
import TeacherDetail from './TeacherDetail'






import Register from './user/Register'
import Login from './user/Login'
import Dashboard from './user/Dashboard'
import MyCourses from './user/MyCourses'
import FavoriteCourses from './user/FavoriteCourses'
import RecommendedCourses from './user/RecommendedCourses'
import ProfileSetting from './user/ProfileSetting'
import ChangePassword from './user/ChangePassword'


import TeacherLogin from './teacher/TeacherLogin'
import TeacherRegister from './teacher/TeacherRegister'
import TeacherDashboard from './teacher/TeacherDashboard'
import TeacherChangePassword from './teacher/TeacherChangePassword'
import TeacherProfileSetting from './teacher/TeacherProfileSetting'
import AddCourse from './teacher/AddCourse'
import TeacherMyCourses from './teacher/TeacherMyCourses'
import TeacherMyUsers from './teacher/TeacherMyUsers'
import AllCourses from './AllCourses'
// TeacherLogin
// TeacherRegister
// TeacherMyCourses

const main = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/all-courses" element={<AllCourses />} />

                <Route path="/about" element={<About />} />
                <Route path="/detail/:course_id" element={<CourseDetail />} />


                <Route path="/user-login" element={<Login />} />
                <Route path="/user-register" element={<Register />} />
                <Route path="/user-dashboard" element={<Dashboard />} />


                <Route path="/my-courses" element={<MyCourses />} />
                <Route path="/favorite-courses" element={<FavoriteCourses />} />
                <Route path="/recommended-courses" element={<RecommendedCourses />} />
                <Route path="/profile-setting" element={<ProfileSetting />} />
                <Route path="/change-password" element={<ChangePassword />} />



                <Route path="/teacher-login" element={<TeacherLogin />} />
                <Route path="/teacher-register" element={<TeacherRegister />} />
                <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
                <Route path="/teacher-change-password" element={<TeacherChangePassword />} />
                <Route path="/teacher-profile-setting" element={<TeacherProfileSetting />} />
                <Route path="/teacher-profile-setting" element={<TeacherProfileSetting />} />
                <Route path="/my-users" element={<TeacherMyUsers />} />
                <Route path="/teacher-my-courses" element={<TeacherMyCourses />} />
                <Route path="/add-course" element={<AddCourse />} />



                <Route path="/teacher-detail/:teacher_id" element={<TeacherDetail />} />

            </Switch>

            <Footer />
        </>
    )
}

export default main