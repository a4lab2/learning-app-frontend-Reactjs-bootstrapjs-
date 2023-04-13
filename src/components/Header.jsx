import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (


        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">LeanIT</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Courses</a>
                        </li>


                        <li class="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Teacher
                            </a>
                            <ul class="dropdown-menu">

                                <li className="">
                                    <Link className="dropdown-item" to="/teacher-login"> Login</Link>
                                </li>

                                <li className="">
                                    <Link className="dropdown-item" to="/teacher-register"> Register</Link>
                                </li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="/teacher-dashboard">Dashboard</a></li>
                                <li><Link class="dropdown-item" to="/teacher-login">logout</Link></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                User
                            </a>
                            <ul class="dropdown-menu">

                                <li className="">
                                    <Link className="dropdown-item" to="/user-login"> Login</Link>
                                </li>

                                <li className="">
                                    <Link className="dropdown-item" to="/user-register"> Register</Link>
                                </li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="/user-dashboard">Dashboard</a></li>
                                <li><Link class="dropdown-item" to="/user-login">logout</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header