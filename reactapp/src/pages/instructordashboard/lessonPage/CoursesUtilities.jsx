import React, { useState } from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import LessonTable from './LessonTable'
import { RxCross2 } from 'react-icons/rx'

function CoursesUtilities({course}) {

    let [isClicked, checkClicked] = useState(false)

    return (
        <div>
            <div className='flex justify-between mx-20 my-4'>
                <button type="button" onClick={() => checkClicked(!isClicked)} className={ isClicked ? 'flex group/item justify-between items-center rounded-xl w-1/2 h-12 text-lg text-gray-500 font-bold px-3 hover:bg-gray-300 bg-gray-300': 'flex group/item justify-between items-center rounded-xl w-1/2 h-12 text-lg text-gray-500 font-bold px-3 hover:bg-gray-300 focus:bg-gray-300'}>
                    <p>{course.title}</p>
                    {isClicked ?  <RxCross2 className='h-6 w-6 '/> : <MdKeyboardDoubleArrowRight className='invisible h-6 w-6 group-hover/item:visible' />}
                </button>

                <div className='inline-flex items-center space-x-4'>
                    <a href="#">
                        <img className='h-7 w-7 hover:ring-2 ring-gray-500' src='Edit.ico' />
                    </a>
                    <a href="#">
                        <img className='h-7 w-7 hover:ring-2 ring-gray-500' src='delete.ico' />
                    </a>
                </div>
            </div>
            <div>
                {
                    isClicked && <LessonTable />
                }
            </div>
        </div>
    )

}

export default CoursesUtilities
