import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ShowResults({ results }) {
    const navigate = useNavigate();
    return (
        <>  <div className="mycourses-container">
                <div className="mycourses-courses-box">
                    {results.map((course) => (
                        <div className="mycourses-course-card" key={course.id}>
                            <h2>{course.title}</h2>
                            <p>{course.id}</p>

                            <button onClick={() => navigate(`/instructor/courses/${course.id}`)}
                                className="mycourses-show-button"
                            >
                                View Details
                            </button>

                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

