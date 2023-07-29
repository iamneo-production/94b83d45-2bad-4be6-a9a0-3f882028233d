import React, { useEffect, useState } from 'react'
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from 'react-icons/md'

const Sidebar = () => {
    const listCourse = [{ title: "Lesson1", link: "#" }, { title: "Lesson2", link: "#" }, { title: "Lesson3", link: "#" }, { title: "Lesson4", link: "#" }]

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const [responseData, setResponseData] = useState([])
    useEffect(() => {
        fetch("https://8080-acddabbfaeaadadccddafbcddcbcabfdfafdade.project.examly.io/lesson")
            .then(response => response.json())
            .then(data => {
                setResponseData(data);
                console.log(data);
            })
            .catch(error => {
                console.log("error in Fetching Lesson data", error);
            });
    }, [])

    return (
        <div>
            <div className='w-[300px] h-screen bg-white hidden md:block border-r-2'>
                {
                    listCourse
                        ?
                        listCourse.map(value => {
                            return (
                                <>
                                    <div className="border-b-2 flex pl-6 py-4 bg-gray-50 hover:bg-gray-200">
                                        <a href={value.link} className='text-md font-semibold'>{value.title}</a>
                                    </div>
                                </>
                            )
                        })
                        :
                        "Empty"
                }
            </div>
            <div className="flex flex-grow md:hidden">
                <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 transition-transform duration-300 absolute z-50 h-screen bg-white border-r-2`}>
                    {
                        listCourse
                            ?
                            listCourse.map(value => {
                                return (
                                    <>
                                        <div className="border-b-2 flex pl-6 py-4 bg-gray-50 hover:bg-gray-200">
                                            <a href={value.link} className='text-xs font-semibold'>{value.title}</a>
                                        </div>
                                    </>
                                )
                            })
                            :
                            "Empty"
                    }
                </div>
                <button type="button" onClick={toggleSidebar} className={`${isOpen ? 'ml-64' : ''} transition-margin duration-300 text-white bg-gray-500 hover:bg-gray-700 absolute z-50 rounded-e-xl px-1 py-1.5`}>
                    {
                        isOpen ? <MdKeyboardDoubleArrowLeft className="h-8 w-8" /> : <MdKeyboardDoubleArrowRight className="h-8 w-8" />
                    }
                </button>
            </div>
        </div>
    )
}

export default Sidebar
