import React from 'react'
import { MdPlayLesson, MdQuiz } from 'react-icons/md'


function Sidebar({setValue}) {
    return (
        <div>
            <aside class="top-0 left-0 w-64 h-screen hidden md:block" aria-label="Sidebar">
                <div class="h-full px-3 py-4 bg-gray-50">
                    <ul class="space-y-2 font-medium">
                        <li key={0}>
                            <a href="#" onClick={() => setValue('lessonForm')} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-400">
                                <MdPlayLesson class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                                <span class="ml-3">Add Lesson</span>
                            </a>
                        </li>
                        <li key={1}>
                            <a href="#" onClick={() => setValue('Quizzes')} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-400">
                                <MdQuiz class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"/>
                                <span class="flex-1 ml-3 whitespace-nowrap">Add Quizzes</span>
                            </a>
                        </li>
                        <li key={2}>
                            <a href="#" onClick={() => setValue('Assignments')} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-400">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Add Assignments</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar
