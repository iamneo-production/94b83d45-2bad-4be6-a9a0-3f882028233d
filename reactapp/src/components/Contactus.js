// import "./Contactusstyles.css";
// function Contactus()
// {
//     return(
//         <div className="contact">
//             <h1>Send a message to us</h1>
//             <form>
//                 <input placeholder="Name" />
//                 <input placeholder="Email"/>
//                 <input placeholder="Subject"/>
//                 <textarea placeholder="Message" rows="4"></textarea>
//                 <button>Send</button>
//             </form>
//         </div>

//     );
// }
// export default Contactus;


import "./Contactusstyles.css";
import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from "../api/axios";

function Contactus() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject,setSubject]=useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}sendmsg`, {
        "name":name,
        "email":email,
        "subject":subject,
        "message":message
      });
      console.log(response.data);
      alert('Message sent successfully!');
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="contact">
      <h1>Send a message to us</h1>
      <form onSubmit={handleSubmit}>
         <input placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
         <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
         <input placeholder="Subject" type="text" value={subject} onChange={(e) => setSubject(e.target.value)}/>
         <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} rows="4"></textarea>
            <button>Send</button>


       
      </form>
    </div>
  );
}

export default Contactus;