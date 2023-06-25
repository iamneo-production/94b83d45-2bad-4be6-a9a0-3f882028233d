import React from 'react';
import CourseCard from '../components/studentdashboard/Courses/CourseCard';
// import Logo from '../../studentdash/';
import { Link } from 'react-router-dom';
import Navbar from '../components/studentdashboard/common/Navbar';

const StudentDashboard = () => {
    const courses = [
        {
            id: 1,
            name: 'Course 1',
            author: 'Author 1',
            description: 'Description of Course 1',
            image: 'course1.jpg',
            price: '$19.99',
        },
        {
            id: 2,
            name: 'Course 2',
            author: 'Author 2',
            description: 'Description of Course 2',
            image: 'course2.jpg',
            price: '$29.99',
        },
        {
            id: 3,
            name: 'Course 3',
            author: 'Author 3',
            description: 'Description of Course 3',
            image: 'course3.jpg',
            price: '$39.99',
        },
        {
            id: 4,
            name: 'Course 4',
            author: 'Author 4',
            description: 'Description of Course 4',
            image: 'course4.jpg',
            price: '$49.99',
        },
        {
            id: 5,
            name: 'Course 5',
            author: 'Author 5',
            description: 'Description of Course 5',
            image: 'course5.jpg',
            price: '$59.99',
        },
        {
            id: 6,
            name: 'Course 5',
            author: 'Author 5',
            description: 'Description of Course 5',
            image: 'course5.jpg',
            price: '$59.99',
        },
    ];

    return (
        <div className="flex mt-12 bg-white">
            <Navbar/>
            {/* Vertical Navbar */}
            <div className=" text-white bg-gray-800 w-64 ">
                <ul className="py-4 text-white ">
                    {/* <img class="w-12 h-12 rounded-full mr-4" src={Logo} alt="" />
                    <Link to="./" class="w-12 h-12 rounded-full ml-2">
                        <img src={Logo} alt="Logo" className='logo' />
                    </Link> */}
                    <li className="px-4 py-2">
                        <Link to="/profile" className="navbar-link">Profile</Link>
                    </li>
                    <li className="px-4 py-2">
                        <Link to="/explore" className="navbar-link">Enrolled Courses</Link>
                    </li>
                    <li className="px-4 py-2">
                        <Link to="/quizprogress" className="navbar-link">Quizzes</Link>
                    </li>
                    <li className="px-4 py-2">
                        <Link to="/settings" className="navbar-link">Settings</Link>
                    </li>
                </ul>
            </div>

            {/* Course List */}
            <div className="grid grid-cols-1 md:grid-cols-4 my-5 lg:grid-cols-4 gap-4 justify-center items-center">
                {courses.map((course) => (
                    <div className="ml-6">
                        <CourseCard key={course.id} course={course} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentDashboard;
