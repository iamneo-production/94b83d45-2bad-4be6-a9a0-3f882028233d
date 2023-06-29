import React, { useState } from 'react'
import questions from './Questions'
import Options from './Options';
import Review from './Review';


const length = questions.length
var answers = Array(length).fill('')

function Quizzes() {

    const [showResult, setResult] = useState(false);

    const [score, setScore] = useState(0)

    const RetryQuiz = () => {
        setScore(0)
        setResult(!showResult)
        answers = Array(length).fill('')
    }

    const [isClickedReset, setClickedReset] = useState(false)

    const Reset = () => {
        setScore(0)
        answers = Array(length).fill('')
        setClickedReset(!isClickedReset)
    }

    const [showReview, setReview] = useState(false)

    const chcekReview = () => {
        setReview(!showReview)
    }

    return (
        <div>
            {
                showResult ?
                    (<div>
                        <div className='px-4 md:px-16 py-6'>
                            <h1 className='text-2xl font-semibold flex justify-start'>Quiz Results</h1>
                            <div className='flex my-2 items-baseline justify-center'>
                                <h1 className='text-6xl font-normal pt-2'>
                                    {
                                        Math.round(score / length * 100)
                                    }%
                                </h1>
                                <h1 className='text-lg font-medium'>
                                    Correct ({score}/{length})
                                </h1>
                            </div>
                            <div>
                                {
                                    ((score / length) * 100 > 60) ? (
                                        <h1 className='flex bg-green-700 text-gray-100 justify-center p-4 rounded-lg text-sm md:text-lg font-medium my-4'>
                                            Good Job! You are ready to move on to the next lecture.
                                        </h1>
                                    )
                                        :
                                        (<h1 className='flex bg-gray-800 text-gray-100 p-4 justify-center rounded-lg text-sm md:text-lg font-medium my-4'>
                                            Kindly review the lesson materials to expand your Knowledge.
                                        </h1>)
                                }
                            </div>
                            <div className='flex justify-between'>
                                <button type="button" onClick={() => chcekReview()} class="text-white my-6 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Review Answers</button>
                                <button type="button" onClick={() => RetryQuiz()} class="text-white my-6 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Retry Quiz</button>
                            </div>
                        </div>
                        <div>
                            {
                                showReview && questions.map((question, index) => {
                                    return (
                                        <> 
                                            <Review question={question} answers={answers} index={index} />
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>)
                    :
                    (<div>
                        <h1 className='flex justify-start text-2xl font-bold pl-8 pt-6'>
                            React Quiz
                        </h1>
                        <p className='flex justify-start text-base font-medium pl-8 pt-2'>
                            {length} Questions
                        </p>

                        {
                            questions.map((question, index) => {
                                return (
                                    <>
                                        <Options score={score} setScore={setScore} question={question} index={index} answers={answers} isClickedReset={isClickedReset} />
                                    </>
                                )
                            })
                        }
                        <div className='flex justify-between px-4 md:px-16 py-4'>
                            <button type="button" onClick={() => Reset()} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Reset</button>
                            <button type="button" onClick={() => setResult(!showResult)} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Submit</button>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default Quizzes
