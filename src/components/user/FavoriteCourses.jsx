import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
// Sidebar
// Link
const FavoriteCourses = () => {
    return (
        <div className="container mt-4">
            <div className="row">

                <aside className='col-md-3'>
                    <Sidebar />
                </aside>
                <section className='col-md-9' >
                    <div className="card">
                        <h5 className='card-header'>Favourite Courses</h5>
                        <div className="card-body">
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th scope="col">Course Name</th>
                                        <th scope="col">Created By</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Cooking Course</td>
                                        <td>Mr Otto</td>
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

export default FavoriteCourses