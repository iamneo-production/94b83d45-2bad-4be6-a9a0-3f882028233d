import Navbar from "../components/Navbar";
import {useRef,useState,useEffect} from "react";
import {faCheck,faTimes,faInfoCircle} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
// import axios from "../api/axios";
const USER_REGEX=/^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const LAST_REGEX=/^[a-zA-Z]{3,24}$/;
const PWD_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const MAIL_REGEX=/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
// const REGISTER_URL = '/register';

const SignUp = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);


    const [last, setLast] = useState('');
    const [validLast, setValidLast] = useState(false);
    const [userLast, setUserLast] = useState(false);

    const [mail, setMail] = useState('');
    const [validMail, setValidMail] = useState(false);
    const [mailFocus, setMailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success] = useState(false);
    // const [success, setSuccess] = useState(false);

  

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])
    useEffect(() => {
        setValidLast(LAST_REGEX.test(last));
    }, [last])
    useEffect(() => {
        setValidMail(MAIL_REGEX.test(mail));
    }, [mail])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user,last,mail, pwd, matchPwd])

    const navigate=useNavigate();
    const navigateHome=()=>{
        navigate('/signin')
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // if button enabled with JS hack
    //     const v1 = USER_REGEX.test(user);
    //     const v2 = PWD_REGEX.test(pwd);
    //     if (!v1 || !v2) {
    //         setErrMsg("Invalid Entry");
    //         return;
    //     }
    //     try {
    //         const response = await axios.post(REGISTER_URL,
    //             JSON.stringify({ user, pwd }),
    //             {
    //                 headers: { 'Content-Type': 'application/json' },
    //                 withCredentials: true
    //             }
    //         );
    //         console.log(response?.data);
    //         console.log(response?.accessToken);
    //         console.log(JSON.stringify(response))
    //         setSuccess(true);
    //         //clear state and controlled inputs
    //         //need value attrib on inputs for this
    //         setUser('');
    //         setPwd('');
    //         setMatchPwd('');
    //     } catch (err) {
    //         if (!err?.response) {
    //             setErrMsg('No Server Response');
    //         } else if (err.response?.status === 409) {
    //             setErrMsg('Username Taken');
    //         } else {
    //             setErrMsg('Registration Failed')
    //         }
    //         errRef.current.focus();
    //     }
    // }
    return (
        <div className="sign">
           
        
         <Navbar/>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        {/* <a href="#">Sign In</a> */}
                        <a href="/">Sign In</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>SignUp</h1>
                    <form >
                        {/* <form onSubmit={handleSubmit}></form> */}
                        <label htmlFor="username">
                            Firstname:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                        <label htmlFor="lastname">
                            Lastname:
                            <FontAwesomeIcon icon={faCheck} className={validLast ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validLast || !last ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="lastname"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setLast(e.target.value)}
                            value={last}
                            required
                            aria-invalid={validLast ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserLast(true)}
                            onBlur={() => setUserLast(false)}
                        />
                        <p id="uidnote" className={userLast && last && !validLast ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Should contain only letters.<br />
                            {/* Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed. */}
                        </p>
                        <label htmlFor="maill">
                            Mail:
                            <FontAwesomeIcon icon={faCheck} className={validMail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMail || !mail ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="maill"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setMail(e.target.value)}
                            value={mail}
                            required
                            aria-invalid={validMail ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setMailFocus(true)}
                            onBlur={() => setMailFocus(false)}
                        />
                        <p id="uidnote" className={mailFocus && mail && !validMail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            start with small letter or a number.<br />
                            Only contains small letters.<br />
                            Should end with @gmail.com.
                        </p>


                        <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>


                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>

                        <button disabled={!validName ||!validLast|| !validMail ||  !validPwd || !validMatch ? true : false} onClick={navigateHome}>Sign Up</button>
                    </form>
                    <p>
                        Already registered?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="/signin">Login</a>
                        </span>
                    </p>
                </section>
            )}
        </div>
        
    )
}

export default SignUp;

// const EMAIL_REGEX=/^([\w]*[\w\.]*(?!\.)@gmail.com$/;
// const SignUp = () =>{
//     const userRef=useRef();
//     const errRef=useRef();

//     const [user,setUser]=useState('');
//     const [validName,setValidName]=useState(false);
//     const [userFocus,setUserFocus]=useState(false);

//     // const [mail,setMail]=useState('');
//     // const [validMail,setValidMail]=useState(false);
//     // const [mailFocus,setMailFocus]=useState(false);

//     const [pwd,setPwd]=useState('');
//     const [validPwd,setValidPwd]=useState(false);
//     const [pwdFocus,setPwdFocus]=useState(false);

//     const [matchPwd,setMatchPwd]=useState('');
//     const [validMatch,setValidMatch]=useState(false);
//     const [matchFocus,setMatchFocus]=useState(false);

//     const [errMsg,setErrMsg]=useState('');
//     const [success,setSuccess]=useState(false);

//     useEffect(()=>{
//         userRef.current.focus();
//     },[])

//     useEffect(()=> {
//         const result=USER_REGEX.test(user);
//         console.log(result);
//         console.log(user);
//         setValidName(result);
//     },[user])
//     // useEffect(()=> {
//     //     const result=EMAIL_REGEX.test(mail);
//     //     console.log(result);
//     //     console.log(mail);
//     //     setValidName(result);
//     // },[user])
//     useEffect(()=> {
//         const result=PWD_REGEX.test(pwd);
//         console.log(result);
//         console.log(pwd);
//         setValidName(result);
//         const match=pwd===matchPwd;
//         setValidMatch(match);
//     },[user])
//     useEffect(()=> {
//         setErrMsg('');
//     },[user,pwd,matchPwd])
//     const handleSubmit=async(e)=> {
//         e.preventDefault();
//         const v1 = USER_REGEX.test(user);
//         const v2 = PWD_REGEX.test(pwd);
//         if (!v1 || !v2) {
//             setErrMsg("Invalid Entry");
//             return;
//     }

//     return(
//         <>
//         <Navbar/>
//         <h1>This is SignUp</h1>
//         <section>
//             <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//             <h1>Register</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">
//                     Username:
//                     <span className={validName ? "valid" : "hide"}>
//                         <FontAwesomeIcon icon={faCheck} />
//                     </span>
//                     <span className={validName || !user ? "hide" : "invalid"}>
//                         <FontAwesomeIcon icon={faTimes}/>
//                     </span>
//                 </label>
//                 <input
//                             type="text"
//                             id="username"
//                             ref={userRef}
//                             autoComplete="off"
//                             onChange={(e) => setUser(e.target.value)}
//                             value={user}
//                             required
//                             aria-invalid={validName ? "false" : "true"}
//                             aria-describedby="uidnote"
//                             onFocus={() => setUserFocus(true)}
//                             onBlur={() => setUserFocus(false)}
//                         />
//                          <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
//                             <FontAwesomeIcon icon={faInfoCircle} />
//                             4 to 24 characters.<br />
//                             Must begin with a letter.<br />
//                             Letters, numbers, underscores, hyphens allowed.
//                         </p>

//                         <label htmlFor="password">
//                             Password:
//                             <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
//                             <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             onChange={(e) => setPwd(e.target.value)}
//                             value={pwd}
//                             required
//                             aria-invalid={validPwd ? "false" : "true"}
//                             aria-describedby="pwdnote"
//                             onFocus={() => setPwdFocus(true)}
//                             onBlur={() => setPwdFocus(false)}
//                         />
//                         <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
//                             <FontAwesomeIcon icon={faInfoCircle} />
//                             8 to 24 characters.<br />
//                             Must include uppercase and lowercase letters, a number and a special character.<br />
//                             Allowed special characters: <span aria-label="exclamation mark">!</span>
//                              <span aria-label="at symbol">@</span> 
//                              <span aria-label="hashtag">#</span>
//                               <span aria-label="dollar sign">$</span>
//                                <span aria-label="percent">%</span>
//                         </p>
//                         <label htmlFor="confirm_pwd">
//                             Confirm Password:
//                             <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
//                             <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
//                         </label>
//                         <input
//                             type="password"
//                             id="confirm_pwd"
//                             onChange={(e) => setMatchPwd(e.target.value)}
//                             value={matchPwd}
//                             required
//                             aria-invalid={validMatch ? "false" : "true"}
//                             aria-describedby="confirmnote"
//                             onFocus={() => setMatchFocus(true)}
//                             onBlur={() => setMatchFocus(false)}
//                         />
//                         <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
//                             <FontAwesomeIcon icon={faInfoCircle} />
//                             Must match the first password input field.
//                         </p>
//                         <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
//             </form>
//             <p>
//                         Already registered?<br />
//                         <span className="line">
//                             {/*put router link here*/}
//                             <a href="#">Sign In</a>
//                         </span>
//                     </p>
//             </section>
//         </>
//     )

// }
// export default SignUp;
// // npm i --save @fortawesome/fontawesome-svg-core
// // npm install --save @fortawesome/free-solid-svg-icons
// // npm install --save @fortawesome/react-fontawesome
// const REGISTER_URL = '/register';

// import React, { useState } from 'react';
// import axios from 'axios';

// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('https://8080-abdcffedaacedadccddafbcdeaeaadbdbabf.project.examly.io/users/register', { username, password });
//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage('An error occurred during signup.');
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <button type="submit">Signup</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default SignUp;