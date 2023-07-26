import React, { useState , useEffect} from "react";
import { Courses } from './Card';
// import contents from './content';
import "./cataloguestyle.css";
import BASE_URL from '../api/axios';
import axios from 'axios';
const Main=()=>{
    const [contents,setContent]=useState([]);
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}course`);
        setContent(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
    const [query,setQuery]  =useState("");
    return(
        <>
            <div className="catalogueheader">
                <div className="cataloguerow1">
                    <h1>Explore  All  Courses  Here</h1>
                </div>
                <div className="cataloguerow2">
                    <h2>Find Your Course</h2>
                    <div className="cataloguesearch">
                        <input type ="text" placeholder ="Search...." 
                        onChange={(e)=> setQuery(e.target.value)}
                        />
                        <button>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    
                </div>
                <div className='back'>
                    <a href="/">
                        <button>Back to Home</button>
                    </a>
                </div>
            </div>
            <div className='cataloguecoursecontainer'>
            {/* contents.filter(content=>(content.title.toLowerCase().includes(query.toLowerCase()) || content.description.toLowerCase().includes(query.toLowerCase()))) */}
                
                {contents.filter(content=>(content.title.toLowerCase().includes(query.toLowerCase()) || content.description.toLowerCase().includes(query.toLowerCase())))
                .map((contents) => (
                    <Courses
                        key={contents.id}
                        name={contents.title}
                        //image={contents.image}
                        //instructor={contents.instructor}
                        price={contents.price}
                        description={contents.description}
                    
                    />
                 ))}
            </div>
            
        </>
    )
}
export default Main;