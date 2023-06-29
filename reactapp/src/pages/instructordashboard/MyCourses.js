import { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import "./MyCourses.css"
import BASE_URL from '../../api/axios';
function MyCourses({setIsCreateCourse,setIsMyCourses}) {
  const [courses, setCourses] = useState([]);
  const navigate=useNavigate()
  

  useEffect(() => {
    const fetchData=async()=>{
      try{
    const response=await axios.get(`${BASE_URL}courses`)
    setCourses(response.data);
      }catch(error){
        console.error(error);
      }
    }
    fetchData();
   } ,[]);

  function HandleAddCourses(){
    setIsMyCourses(false); 
    setIsCreateCourse(true);
  }

  return (
    <><div className="mycourses-container">
      <div className="mycourses-courses-box">
        {courses.length === 0 ? (
          <div className='mycourses-course-card h2'><h2>No courses available </h2>
            <h2>Click here to add new courses <button className='mycourses-show-button' onClick={HandleAddCourses}>Add New Course</button></h2>
          </div>

        ) : (
          courses.map((course) => (
            <div className="mycourses-course-card" key={course.id}>
              <h2>{course.title}</h2>
              <p>{course.id}</p>
                
                <button onClick={()=>{navigate(`/instructor/courses/${course.id}`);}}
                  className="mycourses-show-button">
                  View Details
                </button>
             
              
            </div>
          )))}
      </div>
     
    </div>
   
      </>
  );
  
}

export default MyCourses;
