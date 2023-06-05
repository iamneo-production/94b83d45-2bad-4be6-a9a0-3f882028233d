import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseDetails from './pages/instructordashboard/CourseDetails';
import Dashboard from './pages/instructordashboard/Dashboard';
import LessonPage from './pages/lessonPages/LessonPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/instructor" element={<Dashboard />}/>
        <Route path="/instructor/courses/:courseId" element={<CourseDetails />} />
        <Route path='lessonpage' element={<LessonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
