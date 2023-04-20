import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const baseUrl = "http://127.0.0.1:8000/api/"
const PopularTeachers = () => {
    const [teacher, setTeacher] = useState(null)

    useEffect(() => {
        axios.get(baseUrl + 'teacher/').then((response) => {
            setTeacher(response.data)
        })
    }, [])
    console.log(teacher)
    return (
        <div className="container mt-4">
            <h3 className='pb-1 mb-2'>Popular Teachers </h3>
            <div className="row">
                <div className="col-md-3 mb-2">
                    <div className="card" >
                        <img src="teacher.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/teacher-detail/1" className="">Teacher Name</Link>
                            </h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span className=''> Rating: 4.5 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-2">
                    <div className="card" >
                        <img src="teacher.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/teacher-detail/1" className="">Teacher Name</Link>
                            </h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span className=''> Rating: 4.5 </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-2">
                    <div className="card" >
                        <img src="teacher.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/teacher-detail/1" className="">Teacher Name</Link>
                            </h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span className=''> Rating: 4.5 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-2">
                    <div className="card" >
                        <img src="teacher.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/teacher-detail/1" className="">Teacher Name</Link>
                            </h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span className=''> Rating: 4.5 </span>
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

export default PopularTeachers