import React, { useState } from 'react'
import LessonAlert from './LessonAlert';
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin5Line } from 'react-icons/ri'


export default function QuizForm() {

    const [questions, setQuestions] = useState([])
    const [showAlert, setAlert] = useState(false)

    const [question, setQuestion] = useState({
        Question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        Answer: ''
    });


    const handleInputChange = (event) => {
        setQuestion({
            ...question,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        setAlert(!showAlert)
        setQuestions(current => [...current, question]);
    };

    return (
        <div>
            {
                showAlert && <LessonAlert content={"Question Added Successfully"} setValue={setAlert} />
            }
            <div className='px-10 py-8 bg-gray-200'>
                <span className='text-xl text-gray-600 flex justify-center font-medium'>
                    This Form allows you to Add a New Question that will be displayed below.
                </span>
            </div>
            <div className="flex justify-center mx-32 my-10">
                {/*content*/}
                <div className="border-0 top-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                    {/*header*/}
                    <div className="relative mx-4 -mt-4 mb-4 grid h-20 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40">
                        <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                            Add Quiz Question
                        </h3>
                    </div>
                    {/*body*/}
                    <div className="relative py-3 px-8 mx-6 flex-auto">
                        <form>
                            <div class="flex flex-col gap-4 p-4">
                                <div class="relative h-20 w-full min-w-[200px]">
                                    <textarea
                                        type="text"
                                        name="question"
                                        value={question.Question}
                                        onChange={handleInputChange}
                                        class="peer h-full w-full rounded-md border border-gray-500 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-500 placeholder-shown:border-t-gray-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0"
                                        placeholder=" "
                                    />
                                    <label class="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-gray-800 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
                                        Question
                                    </label>
                                </div>
                                <div class="relative h-11 w-full min-w-[200px]">
                                    <input
                                        type="text"
                                        name="option1"
                                        value={question.option1}
                                        onChange={handleInputChange}
                                        class="peer h-full w-full rounded-md border border-gray-500 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-500 placeholder-shown:border-t-gray-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0"
                                        placeholder=" "
                                    />
                                    <label class="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-gray-800 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">                                        Option1
                                    </label>
                                </div>
                                <div class="relative h-11 w-full min-w-[200px]">
                                    <input
                                        type="text"
                                        name="option2"
                                        value={question.option2}
                                        onChange={handleInputChange}
                                        class="peer h-full w-full rounded-md border border-gray-500 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-500 placeholder-shown:border-t-gray-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0"
                                        placeholder=" "
                                    />
                                    <label class="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-gray-800 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
                                        Option2
                                    </label>
                                </div>
                                <div class="relative h-11 w-full min-w-[200px]">
                                    <input
                                        type="text"
                                        name="option3"
                                        value={question.option3}
                                        onChange={handleInputChange}
                                        class="peer h-full w-full rounded-md border border-gray-500 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-500 placeholder-shown:border-t-gray-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0"
                                        placeholder=" "
                                    />
                                    <label class="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-gray-800 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
                                        Option3
                                    </label>
                                </div>
                                <div class="relative h-11 w-full min-w-[200px]">
                                    <input
                                        type="text"
                                        name="option4"
                                        value={question.option4}
                                        onChange={handleInputChange}
                                        class="peer h-full w-full rounded-md border border-gray-500 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-500 placeholder-shown:border-t-gray-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0"
                                        placeholder=" "
                                    />
                                    <label class="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-gray-800 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
                                        Option4
                                    </label>
                                </div>
                                <div class="relative h-11 w-full min-w-[200px]">
                                    <input
                                        type="text"
                                        name="answer"
                                        value={question.Answer}
                                        onChange={handleInputChange}
                                        class="peer h-full w-full rounded-md border border-gray-500 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-500 placeholder-shown:border-t-gray-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0"
                                        placeholder=" "
                                    />
                                    <label class="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-gray-800 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
                                        Answer
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                        <button onClick={handleSubmit}
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                        >
                            Save lesson
                        </button>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
                <p className='ml-4 text-lg font-semibold'>Set of Questions</p>
                <pre className="p-4">
                    {
                        questions.map(ques => {
                            return [
                                <div className='flex justify-between'>
                                    <div>
                                        {JSON.stringify(ques, null, 2)}
                                    </div>
                                    <div className='flex space-x-2'>
                                        <a href="#">
                                            <FiEdit className='h-6 w-6 text-gray-600 hover:ring-2 ring-gray-500' />
                                        </a>
                                        <a href="#">
                                            <RiDeleteBin5Line className='h-6 w-6 text-gray-600 hover:ring-2 ring-gray-500' />
                                        </a>
                                    </div>
                                </div>
                            ]
                        })
                    }
                </pre>
            </div>
        </div>
    )
}
