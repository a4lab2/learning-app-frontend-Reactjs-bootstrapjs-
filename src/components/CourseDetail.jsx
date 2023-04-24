import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const baseUrl = 'http://127.0.0.1:8000/api/'
const siteUrl = 'http://127.0.0.1:8000/'
const CourseDetail = () => {
    let { course_id } = useParams()
    const [courseData, setCourseData] = useState([]);
    const [chapterData, setChapterData] = useState(null);
    const [teacherData, setTeacherData] = useState([]);
    const [relatedCourseData, setRelatedCourseData] = useState([]);
    const [techListData, setTechListData] = useState([]);

    useEffect(() => {
        try {
            axios.get(baseUrl + 'course/' + course_id).then((r) => {
                setChapterData(r.data.course_chapters)
                setCourseData(r.data)
                setTeacherData(r.data.teacher)
                setRelatedCourseData(JSON.parse(r.data.related_videos))
                setTechListData(r.data.tech_list)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-4">
                    <img src={courseData.featured_img} className='img-thumbnail' alt="" />
                </div>
                <div className="col-8 text-start">
                    <h3>{courseData.title}</h3>
                    <p>{courseData.description}</p>
                    <small>
                        <p className='fw-bold'>Course By:<Link to={`/teacher-detail/${teacherData.id}`}>{teacherData.full_name}</Link></p>
                        <p className='fw-bold'>Duration: <a href="">3 Hours 30 Minutes</a></p>
                        <p className='fw-bold'>Techs:
                            {

                                techListData.map((tech, index) =>
                                    <Link to={`/category/${tech.trim()}`} className='badge bg-warning mr-3'>{tech}</Link>
                                )
                            }
                            <a href="">{courseData.techs}</a></p>
                        <p className='fw-bold'>Total Students: <a href="">300</a></p>
                        <p className='fw-bold'>Rating: 4/5</p>
                    </small>

                </div>
            </div>
            <div className="card mt-4 text-start" >
                <div className="card-header">
                    Course Videos
                </div>
                <ul className="list-group list-group-flush">

                    {chapterData?.map((cd) =>
                        <li className="list-group-item">{cd.title}   <span className='float-end'><span className='me-3'>2 Hours 43 Minutes</span><button className='btn btn-sm btn-danger ' data-bs-toggle="modal" data-bs-target="#VideoModal1"><i className="bi bi-youtube"></i></button></span>
                            {/* video modal  */}
                            <div className="modal fade" id="VideoModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">{cd.title} </h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="ratio ratio-16x9">
                                                <iframe src={cd.video} title={cd.title} allowfullscreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}


                </ul>
            </div>


            <h3 className='text-start pb-1 mb-2 mt-5'>Related Courses</h3>
            <div className="row">
                {
                    relatedCourseData && relatedCourseData.map((rc) =>
                        <div className="col-md-3">
                            <div className="card" >
                                <Link target='__blank' to={`/ detail / ${rc.pk}`} className=""><img src={`${siteUrl}media/${rc.fields.featured_img}`} className="card-img-top" alt="..." /></Link>
                                <div className="card-body">
                                    <h5 className="card-title">{rc.fields.title}</h5>

                                </div>
                            </div>
                        </div>
                    )
                }


            </div>
        </div >
    )
}

export default CourseDetail