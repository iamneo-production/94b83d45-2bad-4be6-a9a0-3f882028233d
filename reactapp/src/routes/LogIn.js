import Navbar from "../components/Navbar";
import {useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import BASE_URL from "../api/axios";
function LogIn() {
    const navigate=useNavigate();
    const [email, setEmail] = useState('');
    const [pass,setPwd]=useState('');

    // const [emailerror, setEmailerror] = useState('');
    // const [passerror,setPwderror]=useState('');
    const [othererror,setOerror]=useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post(`${BASE_URL}users/login`, { "email":email,"password":pass});
          localStorage.setItem("userData", JSON.stringify(response.data));
          if (response.data.role==="INSTRUCTOR") {
            navigate("/instructor");
          }
          if (response.data.role==="USER") {
            navigate("/studentdashboard");
          }
        } catch (error) {
          if (error.response && error.response.data) {
            const { data } = error.response;
        
            if (typeof data === 'string') {
              setOerror(data);
            } else if (typeof data === 'object') {
              setOerror(data.message);
            } 
            else {
              setOerror('An error occurred. Please try again later.');
            }
          }
        }
      };
      return (
        <>
        <Navbar/>
        <div className="contact">
          <h1>LogIn</h1>
          {othererror && <h1>{othererror}</h1>}
          <form onSubmit={handleSubmit}>

             {/* {emailerror && <h1>{emailerror}</h1>} */}
             <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
             {/* {passerror && <h1>{passerror}</h1>} */}
             <input placeholder="Password" type="pwd" value={pass} onChange={(e) => setPwd(e.target.value)}/>
             
                <button>LogIN</button>
                {/* <button onClick={navigateHome}>Sign Up</button> */}
    
    
           
          </form>
          <p>
                    Not registered?<br />
                    {/* <span className="line"> */}
                    <span>
                        {/*put router link here*/}
                        <button onClick={()=>navigate("/signup")}>Register</button>
                    </span>
                </p>
        </div>
        </>
      );


}
export default LogIn;