import React, { useState } from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import LessonTable from './LessonTable'
import { RxCross2 } from 'react-icons/rx'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import BASE_URL from '../../../api/axios'
function CoursesUtilities({course,setUpdateCourse, setThisCourse}) {
    const navigate=useNavigate()
    function HandleDelete() {
        const deleteData = async () => {
          try {
            await axios.delete(`${BASE_URL}courses`, {
                params: {
                    courseId: course.id
                }
              });
              
            alert("deleted succesfully")
            navigate("/instructor")
          } catch (error) {
            console.log(error)
          }
        }
        deleteData();
      }
      function HandleUpdate() {
        setUpdateCourse(true);
        setThisCourse(false);
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
                    <button onClick={HandleUpdate}>
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