import React from 'react';
import CourseList from '../components/studentdashboard/Courses/CourseList';
import Navbar from '../components/studentdashboard/common/Navbar';

function ExplorePage() {
  return (
    <div className='mt-12 bg-white'>
      <Navbar/>
      <CourseList></CourseList>
    </div>
  );
}

export default ExplorePage;
