import React, { useEffect, useState } from 'react'

function Options({ score, setScore, question, index, answers, isClickedReset }) {

    let [isClicked, setClicked] = useState('')

    let SetandCheckAnswer = (correctAnswer, index, currentAnswer) => {
        if (isClicked === '' && correctAnswer === currentAnswer) {
            setScore(score + 1)
        }
        if (answers[index] === correctAnswer && currentAnswer !== correctAnswer) {
            setScore(score - 1)
        }
        answers[index] = currentAnswer
        setClicked(currentAnswer)
    }

    useEffect(() => {
        setClicked('')
    }, [isClickedReset])

    return (

        <div>
            <div className='px-4 sm:px-6 md:px-12 lg:px-16 py-4'>
                <div className='flex space-x-1 my-4'>
                    <div className='flex text-sm md:text-lg font-bold'>Question{index + 1}:</div>
                    <div className='flex text-sm md:text-lg font-bold'>{question.question}</div>
                </div>
                <div>
                    <ul>
                        <li onClick={() => {SetandCheckAnswer(question.answer, index, question.option1) }} className={isClicked === question.option1 ? 'flex justify-start bg-gray-400 w-full my-2 p-2 hover:bg-gray-300' : 'flex justify-start bg-gray-100 w-full my-2 p-2 hover:bg-gray-300'}>{question.option1}</li>
                        <li onClick={() => {SetandCheckAnswer(question.answer, index, question.option2) }} className={isClicked === question.option2 ? 'flex justify-start bg-gray-400 w-full my-2 p-2 hover:bg-gray-300' : 'flex justify-start bg-gray-100 w-full my-2 p-2 hover:bg-gray-300'}>{question.option2}</li>
                        <li onClick={() => {SetandCheckAnswer(question.answer, index, question.option3) }} className={isClicked === question.option3 ? 'flex justify-start bg-gray-400 w-full my-2 p-2 hover:bg-gray-300' : 'flex justify-start bg-gray-100 w-full my-2 p-2 hover:bg-gray-300'}>{question.option3}</li>
                        <li onClick={() => {SetandCheckAnswer(question.answer, index, question.option4) }} className={isClicked === question.option4 ? 'flex justify-start bg-gray-400 w-full my-2 p-2 hover:bg-gray-300' : 'flex justify-start bg-gray-100 w-full my-2 p-2 hover:bg-gray-300'}>{question.option4}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Options
