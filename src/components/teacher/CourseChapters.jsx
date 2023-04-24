import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios'
import Swal from 'sweetalert2'
// axios
// Sidebar

const baseUrl = 'http://127.0.0.1:8000/api/'
const CourseChapters = () => {
    const [chapterData, setChapterData] = useState([]);
    const [totalResult, settotalResult] = useState(0);
    const { course_id } = useParams()

    useEffect(() => {
        try {
            axios.get(baseUrl + 'course-chapters/' + course_id).then((r) => {
                console.log(r)
                settotalResult(r.data.length)
                setChapterData(r.data)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])
    const Swal = require('sweetalert2')
    const handleDeleteClick = () => {
        Swal.fire({
            title: 'Confirm!',
            text: 'Do you want to continue',
            icon: 'info',
            confirmButtonText: 'Continue',
            showCancelButton: true,
        })
    }
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9' >
                    <div className="card">
                        <h5 className='card-header'>All Chapters ({totalResult}) <Link className='btn btn-success float-end btn-sm' to={"/add-chapter/" + course_id}> Add Chapter</Link></h5>
                        <div className="card-body">
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th scope="col">Chapter Title</th>
                                        <th scope="col">Video</th>
                                        <th scope="col">Remarks</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {chapterData.map((chapter, index) =>
                                        < tr key={index}>
                                            <td> <Link to={"/edit-chapter/" + chapter.id}>{chapter.title}</Link></td>
                                            <td>
                                                <video width="320" height="240" controls>
                                                    <source src={chapter.video.url} type="video/mp4" />
                                                    <source src={chapter.video.url} type="video/ogg" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </td>
                                            <td>{chapter.remarks}</td>
                                            <td>
                                                <Link className='btn btn-info btn-sm mr-2' to={"/edit-chapter/" + chapter.id}> <i class="bi bi-pencil-square"></i></Link>
                                                <button className='btn btn-danger btn-sm' onClick={handleDeleteClick} to={"/delete-chapter/" + chapter.id}> <i class="bi bi-trash"></i>Delete</button>

                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </section>
            </div >
        </div >
    )
}

export default CourseChapters