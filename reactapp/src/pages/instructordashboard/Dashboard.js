import React, { useState , useEffect} from 'react';
import { Link } from "react-router-dom";
import MyCourses from './MyCourses';
import AddCourse from './CreateCourse';
import './Dashboard.css';
import "./SideBar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SearchBar from './SearchBar';
import axios from 'axios';
import NavBar from './NavBar';
import './NavBar.css'
import ShowResults from './ShowResults';
import Welcome from './Welcome'
import BASE_URL from '../../api/axios';


const Sidebar = ({ ismycourses, iscreatecourse, setIsCreateCourse, setIsMyCourses, setIsSearch }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

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
            <button className={`sidebar-button${ismycourses ? ' clicked' : ''}`} onClick={() => { setIsMyCourses(true); setIsCreateCourse(false); setIsSearch(false); }}>
              My courses
            </button>
            <button className={`sidebar-button${iscreatecourse ? ' clicked' : ''}`} onClick={() => { setIsCreateCourse(true); setIsMyCourses(false); setIsSearch(false); }}>
              Create course
            </button>
          </div>

        </div>
      </nav>

    </div>
  );
};

function Dashboard() {
  const [ismycourses, setIsMyCourses] = useState(false);
  const [iscreatecourse, setIsCreateCourse] = useState(false);
  const [issearch, setIsSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchitem, setsearchItem] = useState("")
  const [data, setData] = useState([])

  const HandleSearch = (event) => {
    setIsMyCourses(false); 
    setIsCreateCourse(false); 
    setIsSearch(true);
    const query = event.target.value.toString().toLowerCase();
    setsearchItem(query);

    const results = data.filter((item) =>
      item.title.toLowerCase().includes(query) || item.id.toString().toLowerCase().includes(query) || item.description.toLowerCase().includes(query)
    );

    setSearchResults(results);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}courses`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [ismycourses]);
  


  return (
    <>


      <div className='dashboard-side-nav'>
        <Sidebar
          ismycourses={ismycourses}
          iscreatecourse={iscreatecourse}
          setIsCreateCourse={setIsCreateCourse}
          setIsMyCourses={setIsMyCourses}
          setIsSearch={setIsSearch} />
        <SearchBar searchitem={searchitem} HandleSearch={HandleSearch} />
        <NavBar />
      </div>

      <div className="dashboard-container">

        <div className="content-container">
          {!ismycourses && !iscreatecourse && !issearch &&< Welcome/>}
          {issearch && searchResults.length === 0 && <p style={{ fontSize: '50px', display: 'flex', justifyContent: 'center', justifyItems: 'center', alignItems: 'center' }}>No results found</p>}
          {issearch && <ShowResults results={searchResults}/>}
          {ismycourses && <MyCourses setIsCreateCourse={setIsCreateCourse} setIsMyCourses={setIsMyCourses}/>}
          {iscreatecourse && <AddCourse setIsCreateCourse={setIsCreateCourse} />}
        </div>
      </div>

    </>
  );
}

export default Dashboard;