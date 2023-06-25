import React, { useState } from 'react'
import LessonAlert from './LessonAlert';
import { FaFileUpload } from 'react-icons/fa'
import { AiFillFileText } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { GrDocumentPdf } from 'react-icons/gr'
import { FcDocument } from 'react-icons/fc'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin5Line } from 'react-icons/ri'


function AssignmentsForm() {
    const [fileName, setFileName] = useState("No File Selected");
    const [showAlert, setAlert] = useState(false)
    const [File, setFile] = useState(null)
    const [fileArray, setFileArray] = useState([])


    const handleSubmit = () => {
        setAlert(!showAlert)
        setFileArray(current => [...current, File])
        setFile(null)
        setFileName("No File Selected")
    }



    return (
        <>
            {
                showAlert && <LessonAlert content={"Assignment Uploaded Successfully"} setValue={setAlert} />
            }
            <div className='px-10 py-8 bg-gray-200 text-xl text-gray-600 flex justify-center font-medium'>
                This Form allows you to Upload the Assignments either in PDF or DOCS file and that will be displayed below.
            </div>

            <div className="flex justify-center mx-32 my-10">
                {/*content*/}
                <div className="border-0 top-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                    {/*header*/}
                    <div className="relative mx-4 -mt-4 mb-4 grid h-20 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40">
                        <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                            Add Assignments
                        </h3>
                    </div>
                    {/*body*/}

                    <div className='flex place-content-center mt-8 mx-16'>
                        <form onClick={() => document.querySelector(".input-field").click()}
                            className='flex justify-center items-center border-dashed border-2 h-[300px] w-[350px] border-black cursor-pointer rounded-lg'>
                            <input className="input-field" type="file" accept=".pdf,.doc,.docx" hidden onChange={({ target: { files } }) => {
                                files[0] && setFileName(files[0].name)
                                if (files) {
                                    setFile(files[0])
                                }
                            }} />


                            {
                                File ?
                                    (File.type === "application/pdf") ?
                                        <div className='flex-col flex items-center'>
                                            <span>
                                                <GrDocumentPdf className='h-40 w-40 text-gray-600' />
                                            </span>

                                            <p className='w-24 truncate'>
                                                {fileName}
                                            </p>
                                        </div>
                                        :
                                        <div className='flex-col flex items-center'>
                                            <span>
                                                <FcDocument className='h-40 w-40 text-gray-600' />
                                            </span>

                                            <p className='w-24 truncate'>
                                                {fileName}
                                            </p>
                                        </div>
                                    : <div className='flex-col'>
                                        <span className='flex justify-center'>
                                            <FaFileUpload className='h-10 w-10' />
                                        </span>
                                        <span className='font-bold'>
                                            Browse Files to Upload
                                        </span>
                                    </div>

                            }
                        </form>
                    </div>
                    <div className='flex justify-between items-center p-4 mt-4 mb-10 mx-16 bg-gray-100'>
                        <div className='flex text-md font-medium'>
                            <AiFillFileText className='text-blue-400 h-6 w-6' />
                            <p className='w-84 truncate'>{fileName}</p>
                        </div>
                        <MdDelete className='h-6 w-6' onClick={() => {
                            setFileName("No File Selected")
                            setFile(null)
                        }} />
                    </div>

                    {/*footer*/}
                    <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                        <button onClick={File && handleSubmit}
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                        >
                            Upload Assignment
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-4 bg-gray-100 rounded-lg">
                <p className='ml-4 text-lg font-semibold'>Set of Assignments</p>
                <pre className='p-4'>{
                    fileArray.map(file => {
                        return [
                            <div className='flex py-2 justify-between'>
                                <div className='flex'>
                                    <AiFillFileText className='text-blue-400 h-6 w-6' />
                                    <p className='px-1'>{file.name}</p>
                                </div>
                                <div className='flex space-x-2'>
                                    <a href="/#">
                                        <FiEdit className='h-6 w-6 text-gray-600 hover:ring-2 ring-gray-500' />
                                    </a>
                                    <a href="/#">
                                        <RiDeleteBin5Line className='h-6 w-6 text-gray-600 hover:ring-2 ring-gray-500' />
                                    </a>
                                </div>
                            </div>
                        ]
                    })
                }</pre>
            </div>
        </>
    )
}

export default AssignmentsForm
