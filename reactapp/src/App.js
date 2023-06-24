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
import LessonPage from './lessonPages/LessonPage';
import InstructorDashboard from './pages/instructordashboard/lessonPage/InstructorDashboard'
import LessonFormMain from './pages/instructordashboard/lessonPage/LessonFormMain'

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
        <Route path='/lessonpage' element={<LessonPage />} />
        <Route path='/dashboard' element={<InstructorDashboard />} />
        <Route path='/lessonform' element={<LessonFormMain />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/quizprogress" element={<QuizProgress />} />
        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
    </div>
  );
}

export default App;
