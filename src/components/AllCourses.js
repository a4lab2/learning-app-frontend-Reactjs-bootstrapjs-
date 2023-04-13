import React from 'react'
import { Link } from 'react-router-dom'
// Link
const AllCourses = () => {
    return (
        <div className="container mt-4">
            <h3 className='pb-1 mb-2'>All Courses </h3>
            <div className="row">
                <div className="col-md-3 mb-2">
                    <div className="card" >
                        <img src="logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <Link to="detail/1" className="">Course Title</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-2">
                    <div className="card" >
                        <img src="logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <a href="#" className="">Course Title</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-2">
                    <div className="card" >
                        <img src="logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <a href="#" className="">Course Title</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-2">
                    <div className="card" >
                        <img src="logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <a href="#" className="">Course Title</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-2">
                    <div className="card" >
                        <img src="logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <a href="#" className="">Course Title</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-2 mb-2">
                    <div className="card" >
                        <img src="logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <a href="#" className="">Course Title</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-2">
                    <div className="card" >
                        <img src="logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <a href="#" className="">Course Title</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-2">
                    <div className="card" >
                        <img src="logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <a href="#" className="">Course Title</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination */}

            <nav aria-label="Page navigation example ">
                <ul className="pagination mt-3 justify-content-center">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default AllCourses