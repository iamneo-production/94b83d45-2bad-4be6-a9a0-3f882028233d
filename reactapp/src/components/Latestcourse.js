import "./LCStyles.css";
import LCdata from "./LCdata";
import LC1 from "../assets/springboot.jpg";
import LC2 from "../assets/angularjs.jpg";
import LC3 from "../assets/python.jpg";
function Latestcourse() {
    return(
        <div className="newcourse">
            <h1>Latest Courses</h1>
            <p>You can check our newly available courses</p>
            <div className="lccard">
                <LCdata
                image={LC1}
                heading="SpringBoot"
                text="Spring Boot is an open source Java-based framework used to create a micro Service. It is developed by Pivotal Team and is used to build stand-alone and production ready spring applications.Spring Boot provides a good platform for Java developers to develop a stand-alone and production-grade spring application that you can just run. You can get started with minimum configurations without the need for an entire Spring configuration setup."
                
                />
                <LCdata
                image={LC2}
                heading="AngularJS"
                text="AngularJS is a structural framework for dynamic web applications. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application components clearly and succinctly. Its data binding and dependency injection eliminate much of the code you currently have to write."
                />
                <LCdata
                image={LC3}
                heading="Python"
                text="Python is commonly used for developing websites and software, task automation, data analysis, and data visualization. Since it's relatively easy to learn, Python has been adopted by many non-programmers such as accountants and scientists, for a variety of everyday tasks, like organizing finances."
                />

            </div>
            </div>

    );
}
export default Latestcourse;