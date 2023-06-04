import Navbar from "../components/Navbar";
import LandHome from "../components/LandHome";
import AboutImg from "../assets/image1.jpg";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";
function About(){
    return(
        <>
        <Navbar/>
        
        <LandHome
        cName="hero-mid"
        heroImg={AboutImg}
        title="Online Learning"
        btnClass="hide"
        />
        <Aboutus/>
        <Footer/>
        </>
    );

}
export default About;