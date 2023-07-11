// Hero
import "./LandHomeStyles.css";
function LandHome(props){
    return(<>
        <div className={props.cName}>
            <img alt="HeroImg" width="100%" height="100%" src={props.heroImg} />
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href="/catalogue" className={props.btnClass}>
                    {props.buttonText}
                </a>
            </div>
        </div>

       
        </>
    );

}
export default LandHome;