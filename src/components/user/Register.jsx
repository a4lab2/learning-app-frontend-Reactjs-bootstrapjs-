import React from 'react'

const Register = () => {
    return (
        <div className="container mt-5">


            <div className="text-start row">
                <div className="col-8 offset-2">
                    <div className="card">
                        <h3 className='card-header'>User Register</h3>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Fullname</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Username</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Interest</label>
                                    <textarea className='form-control' name="" ></textarea>
                                    <div id="emailHelp" className="form-text">python,golang,php.</div>
                                </div>

                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register