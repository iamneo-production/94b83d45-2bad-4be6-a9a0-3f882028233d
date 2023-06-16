import Navbar from "../components/Navbar";
import {useState} from "react";
import axios from 'axios';
function LogIn() {
    const [email, setEmail] = useState('');
    const [pass,setPwd]=useState('');

    const [emailerror, setEmailerror] = useState('');
    const [passerror,setPwderror]=useState('');
    const [othererror,setOerror]=useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('https://8080-ceddffcfcefcbcdadccddafbcdeaeaadbdbabf.project.examly.io/users/register', { "email":email,"password":pass});
          alert(response.data);
        } catch (error) {
           if(error.response.data.hasOwnProperty("email"))
           {
            setEmailerror(error.response.data.email);
           }
           else if(error.response.data.hasOwnProperty("password"))
           {
            setPwderror(error.response.data.password);
           }
           else if(error.response.data)
           {
            setOerror(error.response.data);
           }
           else
           {
                alert("Error! Please try again later")
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

             {emailerror && <h1>{emailerror}</h1>}
             <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
             {passerror && <h1>{passerror}</h1>}
             <input placeholder="Password" type="pwd" value={pass} onChange={(e) => setPwd(e.target.value)}/>
             
                <button>LogIN</button>
                {/* <button onClick={navigateHome}>Sign Up</button> */}
    
    
           
          </form>
          <p>
                    Not registered?<br />
                    {/* <span className="line"> */}
                    <span>
                        {/*put router link here*/}
                        <a href="/signup">SignIn</a>
                    </span>
                </p>
        </div>
        </>
      );


}
export default LogIn;