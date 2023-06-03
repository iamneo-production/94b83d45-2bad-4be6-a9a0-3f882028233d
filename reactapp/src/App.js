import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseDetails from './pages/instructordashboard/CourseDetails';
import Dashboard from './pages/instructordashboard/Dashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/instructor" element={<Dashboard />}/>
        <Route path="/instructor/courses/:courseId" element={<CourseDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
