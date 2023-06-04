import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Service from "./routes/Service";
import About from "./routes/About";
import SignUp from "./routes/SignUp";
import LogIn from "./routes/LogIn";
import Dashboard from "./pages/instructordashboard/Dashboard";
import CourseDetails from "./pages/instructordashboard/CourseDetails";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<LogIn/>}/>
        <Route path="/instructor" element={<Dashboard />}/>
        <Route path="/instructor/courses/:courseId" element={<CourseDetails />} />
      </Routes>
    </div>
  );
}

export default App;
