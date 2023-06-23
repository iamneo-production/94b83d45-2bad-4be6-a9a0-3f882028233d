import Navbar from "../components/Navbar";
import {useState} from "react";
// import {faCheck,faTimes,faInfoCircle} from "@fortawesome/free-solid-svg-icons"
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import BASE_URL from "../api/axios";
function SignUp() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [pass,setPwd]=useState('');
    const [cpass, setCpwd] = useState('');

    const [ferror, setFerror] = useState('');
    const [lerror, setLerror] = useState('');
    const [emailerror, setEmailerror] = useState('');
    const [passerror,setPwderror]=useState('');
    const [cpasserror, setCpwderror] = useState('');
    const [othererror,setOerror]=useState('');
  const signupData = {
    firstName: fname,
    lastName: lname,
    email: email,
    password: pass,
    confirmpassword: cpass
  };

    const navigate=useNavigate();
    // const navigateHome=()=>{
    //     navigate('/signin')
    // };


    const handleSubmit = async (e) => {
            e.preventDefault();
        
            try {
              const response = await axios.post(`${BASE_URL}users/register`, signupData,{headers: {
                'Content-Type': 'application/json'
              }});
              alert(response.data);
              navigate("/signin");
            } catch (error) {
              if (error.response && error.response.data) {
                const { data } = error.response;
            
                if (data.hasOwnProperty("firstName")) {
                  setFerror(data.firstName);
                } else if (data.hasOwnProperty("lastName")) {
                  setLerror(data.lastName);
                } else if (data.hasOwnProperty("email")) {
                  setEmailerror(data.email);
                } else if (data.hasOwnProperty("password")) {
                  setPwderror(data.password);
                } else if (data.hasOwnProperty("confirmpassword")) {
                  setCpwderror(data.confirmpassword);
                } else {
                  setOerror(data);
                }
              } else {
                alert("Error! Please try again later");
              }
            }
            
          };
          
        return (
            <>
            <Navbar/>
            <div className="contact">
              <h1>SignUp</h1>
              {othererror && <h1>{othererror}</h1>}
              <form onSubmit={handleSubmit}>
              {ferror && <h1>{ferror}</h1>}
                 <input placeholder="FirstName" type="text" value={fname} onChange={(e) => setFname(e.target.value)}/>
                 {lerror && <p>{lerror}</p>}
                 <input placeholder="LastName" type="text" value={lname} onChange={(e) => setLname(e.target.value)}/>
                 {emailerror && <h1>{emailerror}</h1>}
                 <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                 {passerror && <h1>{passerror}</h1>}
                 <input placeholder="Password" type="pwd" value={pass} onChange={(e) => setPwd(e.target.value)}/>
                 {cpasserror && <h1>{cpasserror}</h1>}
                 <input placeholder="ConfirmPassword" value={cpass} onChange={(e) => setCpwd(e.target.value)}/>
                    <button>Sign Up</button>
                    {/* <button onClick={navigateHome}>Sign Up</button> */}
        
        
               
              </form>
              <p>
                        Already registered?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <button onClick={()=>navigate("/signin")}>Login</button>
                        </span>
                    </p>
            </div>
            </>
          );
        }

export default SignUp;

