import React, { useState } from "react";
import { Courses } from './Card';
import contents from './content';
import "./cataloguestyle.css";


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
                {contents.filter(content=>(content.name.toLowerCase().includes(query.toLowerCase()) || content.instructor.toLowerCase().includes(query.toLowerCase()) || content.description.toLowerCase().includes(query.toLowerCase())))
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
export default Main;