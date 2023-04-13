import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (

        <div className="container mt-4">

            <h3 className='pb-1 mb-2'>Latest Courses <a className='float-end' href="">See all</a></h3>
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

            <h3 className='pb-1 my-4 mt-5'>Popular Courses <a className='float-end' href="">See all</a></h3>
            <div className="row">
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


            <h3 className='pb-1 my-4 mt-5'>Popular Teachers <a className='float-end' href="">See all</a></h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card" >
                        <img src="logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href="#" className="">Teacher Name</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" >
                        <img src="logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href="#" className="">Teacher Name</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" >
                        <img src="logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href="#" className="">Teacher Name</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" >
                        <img src="logo192.png" className="card-img-top" alt="..." />
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
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item ">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item ">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
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