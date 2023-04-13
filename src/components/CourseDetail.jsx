import React from 'react'
import { Link, useParams } from 'react-router-dom'
// Link

const CourseDetail = () => {
    let { course_id } = useParams()
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-4">
                    <img src="/logo192.png" className='img-thumbnail' alt="" />
                </div>
                <div className="col-8 text-start">
                    <h3>Course Title</h3>
                    <p>Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classes to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content.</p>
                    <small>

                        <p className='fw-bold'>Course By:<Link to="/teacher-detail/1">Teacher 1</Link></p>
                        <p className='fw-bold'>Duration:<a href="">3 Hours 30 Minutes</a></p>
                        <p className='fw-bold'>Total Students:<a href="">300</a></p>
                        <p className='fw-bold'>Rating: 4/5</p>
                    </small>

                </div>
            </div>
            <div className="card mt-4 text-start" >
                <div class="card-header">
                    Course Videos
                </div>
                <ul class="list-group list-group-flush">
                    <li className="list-group-item">Introduction   <span className='float-end'><span className='me-3'>2 Hours 43 Minutes</span><button className='btn btn-sm btn-danger '><i class="bi bi-youtube"></i></button></span></li>
                    <li className="list-group-item">Setup   <span className='float-end'><span className='me-3'>2 Hours 43 Minutes</span><button className='btn btn-sm btn-danger '><i class="bi bi-youtube"></i></button></span></li>
                    <li className="list-group-item">Cook   <span className='float-end'><span className='me-3'>2 Hours 43 Minutes</span><button className='btn btn-sm btn-danger '><i class="bi bi-youtube"></i></button></span></li>

                </ul>
            </div>


            <h3 className='text-start pb-1 mb-2 mt-5'>Related Courses</h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card" >
                        <img src="logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <Link to="detail/1" className="">Course Title</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" >
                        <img src="logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <a href="#" className="">Course Title</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" >
                        <img src="logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <a href="#" className="">Course Title</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" >
                        <img src="logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <a href="#" className="">Course Title</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetail