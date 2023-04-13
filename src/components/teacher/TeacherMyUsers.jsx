import React from 'react'
import { Link } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'
// Sidebar
const TeacherMyUsers = () => {
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
                                        <th scope="col">Fullname</th>
                                        <th scope="col">Enrolled Course</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John Otto</td>
                                        <td>Cooking Course</td>
                                        <td><Link to="/"> <button className='btn btn-danger btn-sm'>Delete</button></Link>
                                        </td>
                                    </tr>

                                </tbody>


                            </table>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default TeacherMyUsers