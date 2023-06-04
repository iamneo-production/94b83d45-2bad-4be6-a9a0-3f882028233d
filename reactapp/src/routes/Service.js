import Navbar from "../components/Navbar";
import LandHome from "../components/LandHome";
import ServiceImg from "../assets/serviceimg.jpg";
import Footer from "../components/Footer";
import Latestcourse from "../components/Latestcourse";
function Service(){
    return(
        <>
       <Navbar/>
        <LandHome
        cName="hero-mids"
        heroImg={ServiceImg}
        title="Tutorials"
        btnClass="hide"
        />
        <Latestcourse/>
        <Footer/>
        </>
    )

}
export default Service;