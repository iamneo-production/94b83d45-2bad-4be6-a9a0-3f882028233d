import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./CourseDetails.css";
import "./SideBar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import NavBar from './NavBar';
import UpdateCourse from "./UpdateCourse";
const Sidebar = ({ setThisCourse, setlesson, setEnrolledStudents, enrolledStudents, lesson, thiscourse, navigate, setUpdateCourse }) => {
  const [sidebar, setSidebar] = useState(true);

  function showSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <div className="sidebar-container">

      <div className="nav">
        <Link className="nav-icon">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "sidebar-nav active" : "sidebar-nav"}>
        <div className="nav">
          <Link className="nav-icon">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </Link>
        </div>
        <div className="sidebar-wrap">
          <div className='sidebar-buttoncontainer'>
            <button className={`sidebar-button${thiscourse ? ' clicked' : ''}`} onClick={() => { setThisCourse(true); setlesson(false); setEnrolledStudents(false); setUpdateCourse(false); }}>
              This Course
            </button>
            <button className={`sidebar-button${lesson ? ' clicked' : ''}`} onClick={() => { setThisCourse(false); setlesson(true); setEnrolledStudents(false); setUpdateCourse(false); }}>
              Lessons
            </button>
            <button className={`sidebar-button${enrolledStudents ? ' clicked' : ''}`} onClick={() => { setThisCourse(false); setlesson(false); setEnrolledStudents(true); setUpdateCourse(false); }}>
              Enrolled Students
            </button>

          </div>
          <div>
            <button className="coursedetails-backicon" onClick={() => navigate("/instructor")}>

              <FaIcons.FaArrowLeft />Dashboard
            </button>
          </div>
        </div>

      </nav>

    </div>
  );
};



function CourseDetails() {
  const [details, setDetails] = useState({});
  const { courseId } = useParams();
  const [thiscourse, setThisCourse] = useState(true);
  const [lesson, setlesson] = useState(false);
  const [enrolledStudents, setEnrolledStudents] = useState(false);
  const [updatecourse, setUpdateCourse] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://8080-abdcffedaacedadccddafbcdeaeaadbdbabf.project.examly.io/courses/${courseId}`)
        setDetails(response.data);
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [courseId]);

  function HandleDelete() {
    const deleteData = async () => {
      try {
        await axios.delete(`https://8080-abdcffedaacedadccddafbcdeaeaadbdbabf.project.examly.io/courses/${details.id}`)
        alert("deleted succesfully")
        setTimeout(() => navigate("/instructor"), 2);
      } catch (error) {
        console.log(error)
      }
    }
    deleteData();
  }
  function HandleUpdate() {
    setUpdateCourse(true);
    setThisCourse(false);
    setEnrolledStudents(false);
    setlesson(false);
  }

  return (
    <>
      <div className="coursedetails-side-nav">

        <Sidebar thiscourse={thiscourse}
          setThisCourse={setThisCourse}
          lesson={lesson}
          setlesson={setlesson}
          enrolledStudents={enrolledStudents}
          setEnrolledStudents={setEnrolledStudents}
          setUpdateCourse={setUpdateCourse}
          navigate={navigate} />
        <NavBar />

      </div>
      <div className="coursedetails-maincontainer">


        {thiscourse &&
          <div className="coursedetails-detailscontainer">
            <div>
              <h1>Course Tile: {details.title}</h1>
              <h1>Course Id: {details.id}</h1>
              <p>Course Description: {details.description}</p>
            </div>
            <div>
              <button className="coursedetails-button" onClick={HandleUpdate}>Update Course</button>
              <button className="coursedetails-delbutton" onClick={HandleDelete}>Delete Course</button>
            </div>
          </div>}
        {lesson &&
          <div className="coursedetails-lesson-assignment-container">
            <h3 className="coursedetails-heading">Lessons</h3>
            <button className="coursedetails-button">Add Lesson</button>
          </div>}
        {updatecourse && <UpdateCourse courseId={details.id} setUpdateCourse={setUpdateCourse} setThisCourse={setThisCourse}/>}

      </div></>

  );

}

export default CourseDetails;
