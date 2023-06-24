import Navbar from "../components/Navbar";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import BASE_URL from "../api/axios";
function SignUp() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [pass,setPwd]=useState('');
    const [cpass, setCpwd] = useState('');
    const [selectedRole, setSelectedRole] = useState('');

    const [ferror, setFerror] = useState('');
    const [lerror, setLerror] = useState('');
    const [emailerror, setEmailerror] = useState('');
    const [passerror,setPwderror]=useState('');
    const [cpasserror, setCpwderror] = useState('');
    const [roleerror,setRerror]=useState('');
    const [othererror,setOerror]=useState('');
  const signupData = {
    firstName: fname,
    lastName: lname,
    email: email,
    password: pass,
    confirmpassword: cpass
  };


    const navigate=useNavigate();
   


    const handleSubmit = async (e) => {
            e.preventDefault();
            console.log('Selected Role:', selectedRole);
            
        
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
                  setTimeout(() => {
                    setFerror('');
                  }, 3000);
                } else if (data.hasOwnProperty("lastName")) {
                  setLerror(data.lastName);
                  setTimeout(() => {
                    setLerror('');
                  }, 3000);
                } else if (data.hasOwnProperty("email")) {
                  setEmailerror(data.email);
                  setTimeout(() => {
                    setEmailerror('');
                  }, 3000);
                } else if (data.hasOwnProperty("password")) {
                  setPwderror(data.password);
                  setTimeout(() => {
                    setPwderror('');
                  }, 3000);
                } else if (data.hasOwnProperty("confirmpassword")) {
                  setCpwderror(data.confirmpassword);
                  setTimeout(() => {
                    setCpwderror('');
                  }, 3000);
                } else {
                  setOerror(data);
                  setTimeout(() => {
                    setOerror('');
                  }, 3000);
                }
              } else {
                alert("Error! Please try again later");
              }
            }
            if (!selectedRole) {
              setRerror('Please select a role.');
            }
            
          };
          
        return (
            <>
            <Navbar/>
            <div className="contact">
              
              <h1>SignUp</h1>
              <br/>
              {othererror && <h1>{othererror}</h1>}
              
              <form onSubmit={handleSubmit}>
              {ferror && <p>{ferror}</p>}
                 <input placeholder="FirstName" type="text" value={fname} onChange={(e) => setFname(e.target.value)}/>
                 {lerror && <p>{lerror}</p>}
                 <input placeholder="LastName" type="text" value={lname} onChange={(e) => setLname(e.target.value)}/>
                 {emailerror && <p>{emailerror}</p>}
                 <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                 {passerror && <p>{passerror}</p>}
                 <input placeholder="Password" type="pwd" value={pass} onChange={(e) => setPwd(e.target.value)}/>
                 {cpasserror && <p>{cpasserror}</p>}
                 <input placeholder="ConfirmPassword" value={cpass} onChange={(e) => setCpwd(e.target.value)}/>
                 {roleerror && <p className="error-message">{roleerror}</p>}
                <div className="radio-container">
                 <label>
          <input
            type="radio"
            name="role"
            value="user"
            checked={selectedRole === 'user'}
            onChange={(e)=>setSelectedRole(e.target.value)}
          />
          User
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="role"
            value="instructor"
            checked={selectedRole === 'instructor'}
            onChange={(e)=>setSelectedRole(e.target.value)}
          />
          Instructor
        </label>
        <br />
        <br />
        </div>
                    <button>Sign Up</button>
                   
        
        
               
              </form>
              <p>
                        Already registered?<br />
                        <span className="line">
                            
                            <button onClick={()=>navigate("/signin")}>Login</button>
                        </span>
                    </p>
              
            </div>
            </>
          );
        }

export default SignUp;

