import { useState, useEffect } from 'react';
import './CreateCourse.css';
import axios from 'axios';

function UpdateCourse({courseId, setUpdateCourse, setThisCourse}) {

  

  const [data, setData] = useState({ id: '', title: '', description: '' });


  useEffect(() => {
    const fetchData=async()=>{
      try {
       const response = await axios.get(`https://8080-abdcffedaacedadccddafbcdeaeaadbdbabf.project.examly.io/courses/${courseId}`)
        setData(response.data);
      }catch(error){
        console.log(error)}
      }
      fetchData();
  }, [courseId]);

  function Handleupdatecourse(event) {
    event.preventDefault();
    const putData=async()=>{
      try{
      await  axios.put(`https://8080-abdcffedaacedadccddafbcdeaeaadbdbabf.project.examly.io/courses/${data.id}`, data,)
      alert("Updated successfully")
      setUpdateCourse(false);
      setThisCourse(true);
      }catch(error){
        console.log(error)}
    }
    putData()
  }

  return (
    <div className="createcourse-maincontainer">
      <div className="createcourse-container">
        <div className="createcourse-title">
          <h1>Update Course</h1>
        </div>

        <form className="createcourse-form-container" onSubmit={Handleupdatecourse}>
          <div>
            <label>Course Id</label>
            <input
              type="text"
              id="courseId"
              value={data.id}
              disabled
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
              <button type="submit" >Submit</button>
            </div>
            <div>
              <button className='createcourse-cancel-button' onClick={() =>{ setUpdateCourse(false); setThisCourse(true);}}>Cancel</button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateCourse;
