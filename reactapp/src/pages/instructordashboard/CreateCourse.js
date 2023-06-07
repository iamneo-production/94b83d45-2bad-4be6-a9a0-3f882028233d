import { useEffect, useState } from 'react';

import './CreateCourse.css';
import axios from 'axios';
import BASE_URL from '../../api/axios';

function AddCourse({setIsCreateCourse}) {
  const [errormessage,setErrorMessage]=useState("");

  const [data, setData] = useState({
    "id": "",
    "title": "",
    "description": "",
    "instructorId": 923,
  });

  

  function Handlecreatecourse(event) {
    event.preventDefault();
    const postData=async()=>{
    try{
    await axios.post(`${BASE_URL}courses`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        
    alert("created successfully")
    setIsCreateCourse(false);
  }catch(error){
    if(error.response && error.response.data){
      setErrorMessage(error.response.data)
    }
    console.log(error)}
    }
    postData();
  }
  useEffect(()=>{
    if(errormessage){
      const timeout=setTimeout(() => {
        setErrorMessage("")
      }, 3000);
      return ()=>clearTimeout(timeout)
    }
    
  },[errormessage])

  return (
    <div className="createcourse-maincontainer">
      <div className="createcourse-container">
        <div className="createcourse-title">
          <h1>Add a new Course</h1>
        </div>
        
        <form className="createcourse-form-container" onSubmit={Handlecreatecourse}>
        <div>
          {errormessage && <h3 style={{ color: 'red' }}>{errormessage}</h3>}
            <label>Course Id</label>
            <input
              type="text"
              id="courseId"
              value={data.id}
              onChange={(e) =>
              setData((prevState) => ({
                  ...prevState,
              id: e.target.value,
                }))
              }
            />

          </div>
          <div>
            <label>Course title</label>
            <input
              type="text"
              id="title"
              value={data.title}
              onChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  title: e.target.value,
                }))
              }
            />
          </div>

          <div>
            <label>Course Description</label>
            <input
              type="text"
              id="description"
              value={data.description}
              onChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  description: e.target.value,
                }))
              }
            />
          </div>

          <div className="createcourse-buttons-container">
            <div>
              <button className='{disabled} ' type="submit" disabled={!data.id || !data.title || !data.description}>Submit</button>
            </div>
            <div>
              <button
                className="createcourse-cancel-button"
                onClick={() => setIsCreateCourse(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCourse;
