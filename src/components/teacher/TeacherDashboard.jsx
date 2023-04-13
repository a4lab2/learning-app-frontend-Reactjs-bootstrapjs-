import React from 'react'
import { Link } from 'react-router-dom'

import { Routes as Switch, Route } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'



const TeacherDashboard = () => {
    return (
        <div className="container mt-4">
            <div className="row">

                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9' >
                    <div className="card">
                        <h5 className='card-header'>My Teaching Dashboard</h5>

                    </div>

                </section>
            </div>
        </div>
    )
}

export default TeacherDashboard