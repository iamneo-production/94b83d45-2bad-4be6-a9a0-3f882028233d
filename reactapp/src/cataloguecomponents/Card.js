import React from "react";
export function Courses(props) {
    return (
        <div className="cataloguecourseList">
            <div className="cataloguecourses-container">
                <div key={props.id} className="cataloguecourse">
                    <div className="cataloguecourse-preview">
                        <h6>Course</h6>
                        <h2>{props.name}</h2>
                        <div className='cataloguecourseInstructor'><b>- </b>{props.instructor}</div>
                     
                        <a href="#">View Details <i className="fas fa-chevron-right"></i></a>
                    </div>
                    <div className="cataloguecourse-info">
                        <div className="cataloguecourseDescription"><b><h3>Description -</h3></b><p>{props.description}</p></div>
                        <button className="cataloguebtn">Enroll</button>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
