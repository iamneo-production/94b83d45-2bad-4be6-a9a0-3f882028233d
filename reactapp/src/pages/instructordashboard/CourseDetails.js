import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./CourseDetails.css";
import "./SideBar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import NavBar from './NavBar';
import UpdateCourse from "./UpdateCourse";
import BASE_URL from "../../api/axios";
import SearchBar from './SearchBar';
import InstructorDashboard from './lessonPage/InstructorDashboard'
import EnrolledStudents from "./EnrolledStudents";
import LessonFormMain from "./lessonPage/LessonFormMain";
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
        const response = await axios.get(`${BASE_URL}courses/${courseId}`)
        setDetails(response.data);
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [thiscourse]);

  

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
        <SearchBar />
        <NavBar />

      </div>
      <div className="coursedetails-maincontainer">


        {thiscourse && <InstructorDashboard courses={details} setUpdateCourse={setUpdateCourse} setThisCourse={setThisCourse}/>}
          {/* <button className="coursedetails-button" onClick={HandleUpdate}>Update Course</button>
          <button className="coursedetails-delbutton" onClick={HandleDelete}>Delete Course</button> */}
        {lesson && <LessonFormMain/>}
        {updatecourse && <UpdateCourse courseId={details.id} setUpdateCourse={setUpdateCourse} setThisCourse={setThisCourse}/>}
        {enrolledStudents && <EnrolledStudents courseId={details.id}/>}
      </div></>

  );

}

export default CourseDetails;
