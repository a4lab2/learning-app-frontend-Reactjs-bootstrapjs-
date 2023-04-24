import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
// Link
const baseUrl = 'http://127.0.0.1:8000/api/'
const CategoryCourses = () => {
    const [courseData, setcourseData] = useState([]);
    const { course_id } = useParams()

    useEffect(() => {
        try {
            axios.get(baseUrl + 'course/').then((r) => {
                console.log(r)
                setcourseData(r.data)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <div className="container mt-4">
            <h3 className='pb-1 mb-2'>Golang Courses </h3>
            <div className="row">
                <div className="col-md-3 mt-3">
                    <div className="card" >
                        <img src="/lang.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <Link to="/detail/1" className="">Course Title</Link>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span className=''> Rating: 4.5 </span>
                                <span className='float-end'> Views: 400 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                    <div className="card" >
                        <img src="/lang.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <Link to="/detail/1" className="">Course Title</Link>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span className=''> Rating: 4.5 </span>
                                <span className='float-end'> Views: 400 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                    <div className="card" >
                        <img src="/lang.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <Link to="/detail/1" className="">Course Title</Link>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span className=''> Rating: 4.5 </span>
                                <span className='float-end'> Views: 400 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                    <div className="card" >
                        <img src="/lang.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <Link to="/detail/1" className="">Course Title</Link>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span className=''> Rating: 4.5 </span>
                                <span className='float-end'> Views: 400 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                    <div className="card" >
                        <img src="/lang.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <Link to="/detail/1" className="">Course Title</Link>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span className=''> Rating: 4.5 </span>
                                <span className='float-end'> Views: 400 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                    <div className="card" >
                        <img src="/lang.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <Link to="/detail/1" className="">Course Title</Link>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span className=''> Rating: 4.5 </span>
                                <span className='float-end'> Views: 400 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                    <div className="card" >
                        <img src="/lang.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <Link to="/detail/1" className="">Course Title</Link>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span className=''> Rating: 4.5 </span>
                                <span className='float-end'> Views: 400 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                    <div className="card" >
                        <img src="/lang.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <Link to="/detail/1" className="">Course Title</Link>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span className=''> Rating: 4.5 </span>
                                <span className='float-end'> Views: 400 </span>
                            </div>
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

export default CategoryCourses