import "./LCStyles.css";
// import Latestcourse from "./Latestcourse";
function LCData(props)  {
    return(
        <div className="lc-card">
        <div className="lc-image">
        <img src={props.image} alt="image1"/>
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>


        </div>

    );
}
export default LCData;