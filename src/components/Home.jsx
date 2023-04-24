import React, { useEffect, useState } from 'react'
import AllCourses from './AllCourses'
import PopularTeachers from './PopularTeachers'
import PopularCourses from './PopularCourses'

import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const baseUrl = 'http://127.0.0.1:8000/api/'
const Home = () => {
    useEffect(() => { document.title = 'LMS Home Page' })
    const [courseData, setcourseData] = useState([]);
    useEffect(() => {
        try {
            axios.get(baseUrl + 'course/?result=4').then((r) => {
                console.log(r)
                setcourseData(r.data)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])
    return (

        <div className="container mt-4">

            <h3 className='pb-1 mb-2'>Latest Courses <Link className='float-end' to="/all-courses">See all</Link></h3>
            <div className="row">

                {courseData && courseData.map((c) =>
                    <div className="col-md-3 mt-3">
                        <div className="card" >
                            <Link to={`detail/${c.id}`}>
                                <img src={c.featured_img} className="card-img-top" alt={c.title} />
                            </Link>
                            <div className="card-body">
                                {/* <h5 className="card-title"></h5> */}
                                <Link to={`detail/${c.id}`} className="">{c.title}</Link>
                            </div>
                            <div className="card-footer">
                                <div className="title">
                                    <span className=''> Rating: 4.5 </span>
                                    <span className='float-end'> Views: 400 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <h3 className='pb-1 my-4 mt-5'>Popular Courses <Link className='float-end' to="/popular-courses">See all</Link></h3>
            <div className="row">

                <div className="col-md-3">
                    <div className="card" >
                        <img src="lang.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <Link to="detail/1" className="">Course Title</Link>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span className=''> Rating: 4.5 </span>
                                <span className='float-end'> Views: 400 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" >
                        <img src="lang.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <Link to="detail/1" className="">Course Title</Link>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span className=''> Rating: 4.5 </span>
                                <span className='float-end'> Views: 400 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" >
                        <img src="lang.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <Link to="detail/1" className="">Course Title</Link>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span className=''> Rating: 4.5 </span>
                                <span className='float-end'> Views: 400 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" >
                        <img src="lang.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <Link to="detail/1" className="">Course Title</Link>
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


            <h3 className='pb-1 my-4 mt-5'>Popular Teachers <Link className='float-end' to="/popular-teachers">See all</Link></h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card" >
                        <img src="teacher.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href="#" className="">Teacher Name</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" >
                        <img src="teacher.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href="#" className="">Teacher Name</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" >
                        <img src="teacher.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href="#" className="">Teacher Name</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" >
                        <img src="teacher.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href="#" className="">Teacher Name</a></h5>
                        </div>
                    </div>
                </div>
            </div>


            <h3 className='pb-1 my-4 mt-5'>Student Testimonials </h3>
            <div id="carouselExampleIndicators" className="carousel slide bg-dark text-white py-5">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item ">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item ">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>





        </div>

    )
}

export default Home