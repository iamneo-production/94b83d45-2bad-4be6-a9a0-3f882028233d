import React, { useState } from 'react'
import Sidebar from './Sidebar'
import LessonForm from './LessonForm'
import Footer from '../../../lessonPages/Footer'
import AssignmentsForm from './AssignmentsForm'
import QuizForm from './QuizForm'


function LessonFormMain() {

    const [switchComponents, setComponents] = useState('lessonForm')


    return (
        <>
            {/* <nav class="flex justify-between space-x-3 md:space-x-6 px-3 md:px-5 py-6 bg-black dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
                <Link to={"/"} className='focus:outline-none focus:ring-2 focus:ring-offset-gray-800 focus:ring-gray-600 transition-all'>
                    <FaArrowCircleLeft className='text-white h-7 w-7 hover:text-gray-400' />
                </Link>
                <div>
                    <a href='/#'><FaUserCircle class="z-20 mr-2 text-gray-100 h-6 w-6 sm:w-8 sm:h-8 rounded-full" /></a>
                </div>
            </nav> */}
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
