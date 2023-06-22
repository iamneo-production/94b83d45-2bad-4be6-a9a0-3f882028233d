import React, { useState } from 'react'
import { FaArrowCircleLeft, FaUserCircle } from 'react-icons/fa'
import Sidebar from './Sidebar'
import LessonForm from './LessonForm'
import { Link } from 'react-router-dom'
import Footer from '../../../lessonPages/Footer'
import AssignmentsForm from './AssignmentsForm'
import QuizForm from './QuizForm'


const courses = [{ id: "101", title: "Data Structures and Algorithms", instructorId: "1001" }, { id: "102", title: "Computer Network", instructorId: "1002" }, { id: "103", title: "Operating System", instructorId: "1003" }];

function LessonFormMain() {

    const [switchComponents, setComponents] = useState('lessonForm')


    return (
        <>
            <nav class="flex justify-between space-x-3 md:space-x-6 px-3 md:px-5 py-6 bg-black dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
                <Link to={"/"} className='focus:outline-none focus:ring-2 focus:ring-offset-gray-800 focus:ring-gray-600 transition-all'>
                    <FaArrowCircleLeft className='text-white h-7 w-7 hover:text-gray-400' />
                </Link>
                <div>
                    <a href='#'><FaUserCircle class="z-20 mr-2 text-gray-100 h-6 w-6 sm:w-8 sm:h-8 rounded-full" /></a>
                </div>
            </nav>
            <div className='flex'>
                <div>
                    <Sidebar setValue={setComponents}/>
                </div>
                <div className='w-full h-screen overflow-y-scroll'>
                    <div>
                        {
                            (switchComponents === "lessonForm") && <LessonForm />
                        }
                        {
                            (switchComponents === "Assignments") && <AssignmentsForm />
                        }
                        {
                            (switchComponents === "Quizzes") && <QuizForm />
                        }
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default LessonFormMain
