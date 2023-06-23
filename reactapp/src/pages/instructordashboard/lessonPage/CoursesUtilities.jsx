import React, { useState } from 'react'
import axios from "axios";
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import LessonTable from './LessonTable'
import { RxCross2 } from 'react-icons/rx'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import BASE_URL from '../../../api/axios'
import { useNavigate } from 'react-router-dom'

function CoursesUtilities({course,setUpdateCourse,setThisCourse}) {
    const navigate=useNavigate()
    function HandleDelete() {
        const deleteData = async () => {
          try {
            await axios.delete(`${BASE_URL}courses/${course.id}`)
            alert("deleted succesfully")
            setTimeout(() => navigate("/instructor"), 2);
          } catch (error) {
            console.log(error)
          }
        }
        deleteData();
      }

    let [isClicked, checkClicked] = useState(false)

    return (
        <div>
            <div className='flex justify-between mx-20 my-4'>
                <button type="button" onClick={() => checkClicked(!isClicked)} className={ isClicked ? 'flex group/item justify-between items-center rounded-xl w-1/2 h-12 text-lg text-gray-500 font-bold px-3 hover:bg-gray-300 bg-gray-300': 'flex group/item justify-between items-center rounded-xl w-1/2 h-12 text-lg text-gray-500 font-bold px-3 hover:bg-gray-300 focus:bg-gray-300'}>
                    <p>{course.title}</p>
                    {isClicked ?  <RxCross2 className='h-6 w-6 '/> : <MdKeyboardDoubleArrowRight className='invisible h-6 w-6 group-hover/item:visible' />}
                </button>

                <div className='inline-flex items-center space-x-4'>
                    <button onClick={()=>{setUpdateCourse(true); setThisCourse(false)}}>
                        <FiEdit className='h-6 w-6 text-gray-600 hover:ring-2 ring-gray-500'/>
                    </button>
                    <button onClick={HandleDelete}>
                        <RiDeleteBin5Line className='h-6 w-6 text-gray-600 hover:ring-2 ring-gray-500'/>
                    </button>
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
