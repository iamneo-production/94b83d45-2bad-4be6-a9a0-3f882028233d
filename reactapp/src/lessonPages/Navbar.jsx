import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex-row top-0'>
            <nav class="flex justify-between space-x-6 px-2 sm:px-5 py-6 rounded-b-xl bg-black" aria-label="Breadcrumb">
                <div>
                    <ol class="inline-flex items-center sm:space-x-3">
                        <li class="inline-flex items-center h-8">
                            <Link to={'#'} class="inline-flex shadow-[0_5px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(250,250,250)] items-center text-sm sm:text-lg font-medium text-gray-100 hover:pb-2">
                                <svg aria-hidden="true" class="w-4 h-4 sm:h-5 sm:w-5 sm:mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                Home
                            </Link>
                        </li>
                        <li>
                            <div class="flex items-center h-8">
                                <svg aria-hidden="true" class="w-4 h-4 sm:h-5 sm:w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                <Link to={'#'} class="text-sm sm:text-lg shadow-[0_5px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(250,250,250)] font-medium text-gray-100 hover:pb-2 md:ml-2">Courses</Link>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center h-8">
                                <svg aria-hidden="true" class="w-4 h-4 sm:h-5 sm:w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                <Link to={'#'} class="text-sm sm:text-lg shadow-[0_5px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(250,250,250)] font-medium text-gray-100 hover:pb-2 md:ml-2">Placement Preparation</Link>
                            </div>
                        </li>
                    </ol>
                </div>
                <div className='flex items-center'>
                    <a href='#'><img class="z-20 mr-2 h-6 w-6 sm:w-8 sm:h-8 rounded-full" src='UserIcon.ico' alt="usericon" /></a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar