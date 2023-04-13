import React from 'react'
import TeacherSidebar from './TeacherSidebar'

const AddCourse = () => {
    return (
        <div className="container mt-4">
            <div className="row">

                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9' >
                    <div className="card">
                        <h5 className='card-header'>My Dashboard</h5>
                        <div className="card-body">

                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label">Title</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="staticEmail" />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label">Description</label>
                                <div className="col-sm-8">
                                    <textarea className='form-control' name="" ></textarea>                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label">Course Video</label>
                                <div className="col-sm-8">
                                    <input type="file" className="form-control" id="staticEmail" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-4 col-form-label">Technologies</label>
                                <div className="col-sm-8">
                                    <textarea className='form-control' name="" ></textarea>                                </div>
                            </div>
                            <hr />
                            <button className='btn btn-primary'>Submit</button>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default AddCourse