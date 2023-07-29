/*import React, { useState , useEffect} from "react";
import { Courses } from './Card';
import contents from './content';
import "./cataloguestyle.css";


const Main=()=>{
    const [contents,setContent]=useState([]);
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}course`);
        setContent(response.data);
      } 
      catch (error) {
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
            {/* contents.filter(content=>(content.title.toLowerCase().includes(query.toLowerCase()) || content.description.toLowerCase().includes(query.toLowerCase()))) }
                
                {contents.filter(content=>(content.title.toLowerCase().includes(query.toLowerCase()) || content.description.toLowerCase().includes(query.toLowerCase())))
                .map((contents) => (
                    <Courses
                        key={contents.id}
                        name={contents.name}
                        image={contents.image}
                        instructor={contents.instructor}
                        rating={contents.rating}
                        description={contents.description}
                    
                    />
                 ))}
            </div>
            
        </>
    )
}
export default Main;*/



import React, { useState } from "react";
import { Courses } from './Card';
import "./cataloguestyle.css";
import coursesData from './content';
const Main=()=>{
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
            {coursesData.filter(content=>(content.name.toLowerCase().includes(query.toLowerCase()) || content.instructor.toLowerCase().includes(query.toLowerCase()) || content.description.toLowerCase().includes(query.toLowerCase())))
                .map((conten) => (
                    <Courses
                        key={conten.id}
                        name={conten.name}
                        //image={conten.image}
                        //instructor={conten.instructor}
                        price={conten.price}
                        //rating={conten.rating}
                        description={conten.description}
                    
                    />
                 ))}
            </div>
            
        </>
    )
}
export default Main;