import React from 'react'
import { TbPlus } from 'react-icons/tb'
import { Link } from 'react-router-dom'

function LessonTable() {

    const Lessons = [{ id: "101", title: "Data Structures and Algorithms", instructorId: "1001" }, { id: "102", title: "Computer Network", instructorId: "1002" }, { id: "103", title: "Operating System", instructorId: "1003" }];

    return (
        <div className='bg-blue-200 px-4 mx-2 lg:px-14 py-8 my-10 lg:mx-20 rounded-2xl'>
            <div className='flex justify-between'>
                <p className="flex text-bold text-base sm:text-lg lg:text-xl font-bold font-sans text-gray-500">Lessons</p>
                <Link to={"/LessonForm"} className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500">
                    <TbPlus className='mx-2' />
                    Add New Lesson
                </Link>
            </div>
            
            <div class="flex justify-start py-8">
                <table class="w-1/2 border-2 border-collapse text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='border-2'>
                            <th scope="col" class="px-6 py-3">
                                Id
                            </th>
                            <th colSpan="3" class="px-6 py-3">
                                Title
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Lessons.map(lesson => {
                                return [
                                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <td class="px-4 lg:px-6 py-4">
                                            {lesson.id}
                                        </td>
                                        <td class="px-4 lg:px-6 py-4">
                                            {lesson.title}
                                        </td>
                                        <td class="px-4 lg:px-6 py-4">
                                            <a href="/#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                        <td class="px-4 lg:px-6 py-4">
                                            <a href="/#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                                        </td>
                                    </tr>
                                ]
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LessonTable
