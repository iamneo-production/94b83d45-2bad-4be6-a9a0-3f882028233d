import "./Popularcoursestyles.css";
import Popularcoursedata from "./Popularcoursedata";
import Java from "../assets/java.jpg"
import Java2 from "../assets/java2.jpg"
import React from "../assets/reactimg1.jpg"
import React2 from "../assets/reactimg2.jpg"
const Popularcourse=()=> {

    return(
        <div className="popularcourse">
            <h1>Popular Courses</h1>
            <p>Learning gives you the opportunity to achieve a lot, within a time frame</p>
            <Popularcoursedata
            className="first-des"
            heading="Java Course"
            text=" Java is a widely-used programming language for coding web applications. It has been a popular choice among developers for over two decades, with millions of Java applications in use today. Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, reliable programming language for coding everything from mobile apps and enterprise software to big data applications and server-side technologies.
            It is easy to learn. It was designed to be easy to use and is therefore easy to write, compile, debug, and learn than other programming languages.It is object-oriented. This allows you to create modular programs and reusable code.It is platform-independent."
            img1={Java}
            img2={Java2}

            />
             <Popularcoursedata className="first-des-reverse"
            heading="ReactJS Course"
            text="The React.js framework is an open-source JavaScript framework and library developed by Facebook. It’s used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript. In React, you develop your applications by creating reusable components that you can think of as independent Lego blocks. These components are individual pieces of a final interface, which, when assembled, form the application’s entire user interface. "
            img1={React}
            img2={React2}

            />
            
        </div>

    );
}
export default Popularcourse;
