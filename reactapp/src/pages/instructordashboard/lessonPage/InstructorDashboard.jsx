import React, { useState } from 'react'
import { TbPlus } from 'react-icons/tb'
import CoursesUtilities from './CoursesUtilities';



function InstructorDashboard({courses}) {

    {/*const [showModal, setModal] = useState(false)*/}

    return (
        <>
            <div className='flex justify-between items-center mx-4 md:mx-10 md:my-6'>
                <p className="flex text-md md:text-lg lg:text-2xl font-bold font-sans text-gray-700">{courses.title} Course</p>
                {/* <button onClick={() => setModal(!showModal)} type="button" class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs md:text-md px-2 md:px-5 py-2.5 text-center inline-flex items-center">
                    <TbPlus className='mx-1 md:mx-2' />
                    Add New Course
                </button> */}
            </div>


            {/* {
                showModal && <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto backdrop-brightness-50 backdrop-blur-sm fixed inset-0 z-50"
                    >
                        <div className="relative w-full mx-10 md:mx-72 my-4">
                       
                            <div className="border-0 top-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                              
                                <div class="relative mx-4 -mt-4 mb-4 grid h-20 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40">
                                    <h3 class="block font-sans text-md md:text-xl lg:text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                                        Add New Course
                                    </h3>
                                </div>
                                
                                <div className="relative py-3 px-8 mx-6 flex-auto">
                                    <form>
                                        <div class="flex flex-col gap-4 p-4">

                                            <div class="relative h-11 w-full min-w-[200px]">
                                                <input
                                                    class="peer h-full w-full rounded-md border border-gray-500 bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-900 transition-all focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                    placeholder=" "
                                                />
                                                <label class="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent">
                                                    Course Name
                                                </label>
                                            </div>
                                            <div class="relative h-60 w-full min-w-[200px]">
                                                <textarea
                                                    class="peer h-full w-full rounded-md border border-gray-500 bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-900 transition-all focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                    placeholder=" "
                                                />
                                                <label class="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent">
                                                    Description
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                
                                <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-pink-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit"
                                        onClick={() => setModal(false)}
                                    >
                                        Save course
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            } */ }

            <hr className="w-auto h-0.5 my-2 mx-4 md:mx-6 bg-gray-300 border-0 rounded" />


            <CoursesUtilities course={courses} key={courses.id} />



        </>
    )
}

export default InstructorDashboard
