import React, { useState } from 'react';
import DownloadButton from './DownloadButton';
import { AiFillFileText } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'


const Assignments = () => {

    const length = 2;
    const [file, setFile] = useState(null)
    const [displayFile, setDisplayFile] = useState(false)

    return (
        <div>
            <h1 className='flex justify-start items-center text-2xl font-bold pl-8 pt-6'>
                Assignments
            </h1>
            <p className='flex justify-start text-base font-medium pl-8 pt-2'>
                {length} Assignments
            </p>
            {
                file && displayFile ? (
                    <div className='py-4'>
                        <div className='flex justify-between items-center p-4 mt-4 mx-4 md:mx-16 bg-gray-100'>
                            <span className='flex justify-center items-center text-xs truncate md:text-base font-medium'>
                                <AiFillFileText className='text-blue-400 h-6 w-6' />
                                <p className='w-84 truncate'>{file.name}</p>
                            </span>
                            <MdDelete className='h-6 w-6' onClick={() => {
                                setFile(null)
                                setDisplayFile(!displayFile)
                            }} />
                        </div>
                    </div>)
                    :
                    (<div>
                        <div className='px-4 sm:px-6 md:px-12 lg:px-16 py-4'>
                            <div className='flex space-x-1 mt-4 mb-2'>
                                <div className='flex text-sm md:text-lg font-bold'>Assignment{1}:</div>
                                <div className='flex text-sm md:text-lg font-bold'>React Assignment</div>
                            </div>
                            <div className='flex-col'>
                                <div className='flex p-4 text-sm md:text-base font-semibold w-full border border-gray-900 bg-gray-300'>
                                    <div className='flex w-1/4 justify-center'>
                                        Download Questions
                                    </div>
                                    <div className='flex px-40 md:px-0 w-3/4 justify-center'>
                                        Upload Solutions
                                    </div>
                                </div>
                                <div className='flex py-8 px-2 text-base font-semibold w-full bg-gray-300'>
                                    <div className='flex justify-center w-1/4'>
                                        <DownloadButton fileName="Assignment1.pdf" />
                                    </div>
                                    <div className='flex items-center pl-2 justify-center w-3/4'>
                                        <input type="file" accept={".pdf,.doc,.docx"} required={true} className="block w-full text-sm text-gray-500 md:file:mr-2 file:py-2 file:px-2 md:file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-500" onChange={({ target: { files } }) => { if (files) { setFile(files[0]) } }} />
                                        <button onClick={file && (() => setDisplayFile(!displayFile))} className='bg-blue-600 md:mr-4 px-2 md:px-4 py-2 text-sm rounded-md font-semibold text-white hover:bg-blue-500'>Upload</button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end items-end'>
                                <p class="mt-1 text-sm font-semibold text-gray-800">Only PDF, DOC, DOCS.</p>
                            </div>
                        </div>
                    </div>)
            }
        </div>

    );
};

export default Assignments;