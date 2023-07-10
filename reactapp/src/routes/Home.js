import Navbar from "../components/Navbar";
import Icon from "../components/Icon";
import LandHome from "../components/LandHome";
import Popularcourse from "../components/Popularcourse";
import Latestcourse from "../components/Latestcourse";
import Footer from "../components/Footer";
function Home(){
    return(
        <>
        
        <Navbar/>
        <Icon/>
        <LandHome
        cName="hero"
        // heroImg="https://images.pexels.com/photos/4559555/pexels-photo-4559555.jpeg?auto=compress&cs=tinysrgb&w=600"
        heroImg="https://www.shutterstock.com/image-photo/elearning-education-internet-technology-webinar-260nw-1139995139.jpg"
        title="Your Success based on Your Learning"
        text="Choose your favourite Course"
        buttonText="Course Plan"
        url="/"
        btnClass="show"
        />
        {/* <i class="fa-solid fa-cart-shopping"></i> */}
        <Popularcourse/>
        <Latestcourse/>
        <Footer/>
        </>
    )

}
export default Home;