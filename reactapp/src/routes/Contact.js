import Navbar from "../components/Navbar";
import LandHome from "../components/LandHome";
import ContactImg from "../assets/contactimg2.jpg";
import Footer from "../components/Footer";
import Contactus from "../components/Contactus";
function Contact(){
    return(
        <>
        <Navbar/>
        <LandHome
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        btnClass="hide"
        />
        <Contactus/>
        <Footer/>
        </>
    )

}
export default Contact;