import "./Popularcoursestyles.css";
// import Java from "../assets/java.jpg"
// import Java2 from "../assets/java2.jpg"
import {Component} from "react";
 class Popularcoursedata extends Component{
    render()
    {
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>
                        {this.props.heading}
                    </h2>
                    <p>
                    {this.props.text}
                    </p>

                </div>
                <div className="image">
                    <img alt="img" src={this.props.img1}/>
                    <img alt="img" src={this.props.img2}/>

                </div>

            </div>

        );
    }
 }
 export default Popularcoursedata;