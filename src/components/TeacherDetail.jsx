import React from 'react'
import { Link } from 'react-router-dom'
// Link
const TeacherDetail = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-4">
                    <img src="/logo192.png" className='img-thumbnail' alt="teacher-image" />
                </div>
                <div className="col-8 text-start">
                    <h3>John Otto</h3>
                    <p>Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classes to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content.</p>
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
                    <Link to="/detail/1" className='list-group-item list-group-item-action'>PHP introduction</Link>
                    <Link to="/detail/1" className='list-group-item list-group-item-action'>JS Mastery</Link>
                    <Link to="/detail/1" className='list-group-item list-group-item-action'>PHP Laravel</Link>
                    <Link to="/detail/1" className='list-group-item list-group-item-action'>Gorilla Framework</Link>


                </div>
            </div>



        </div>
    )
}

export default TeacherDetail