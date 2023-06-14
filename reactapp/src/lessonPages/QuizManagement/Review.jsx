import React, { useEffect, useState } from 'react'

const Review = ({ question, answers, index }) => {
    
    const [isCorrect, setCorrect] = useState(false)

    useEffect(() => {
        if(question.answer === answers[index])
        {
            setCorrect(!isCorrect)
        }
    },[])

    return (
        <div>
            <div className='px-4 sm:px-6 md:px-12 lg:px-16 py-4'>
                <div className='flex space-x-1 my-4 items-baseline'>
                    <div className='flex text-sm md:text-lg font-bold'>Question{index + 1}:</div>
                    <div className='flex text-sm md:text-lg font-bold'>{question.question}</div>
                    <div className='text-base md:text-xl text-green-500 font-bold mx-2'>{isCorrect ? "+1" : "+0"}</div>
                </div>
                <div>
                    <ul>
                        <li className={`flex justify-start bg-gray-100 w-full my-2 p-2 ${(answers[index] !== '' && question.answer === question.option1) && 'flex justify-start bg-green-300 w-full my-2 p-2'} ${(question.option1 === answers[index] && question.answer !== answers[index]) && 'flex justify-start bg-red-400 w-full my-2 p-2'}`}>{question.option1}</li>
                        <li className={`flex justify-start bg-gray-100 w-full my-2 p-2 ${(answers[index] !== '' && question.answer === question.option2) && 'flex justify-start bg-green-300 w-full my-2 p-2'} ${(question.option2 === answers[index] && question.answer !== answers[index]) && 'flex justify-start bg-red-400 w-full my-2 p-2'}`}>{question.option2}</li>
                        <li className={`flex justify-start bg-gray-100 w-full my-2 p-2 ${(answers[index] !== '' && question.answer === question.option3) && 'flex justify-start bg-green-300 w-full my-2 p-2'} ${(question.option3 === answers[index] && question.answer !== answers[index]) && 'flex justify-start bg-red-400 w-full my-2 p-2'}`}>{question.option3}</li>
                        <li className={`flex justify-start bg-gray-100 w-full my-2 p-2 ${(answers[index] !== '' && question.answer === question.option4) && 'flex justify-start bg-green-300 w-full my-2 p-2'} ${(question.option4 === answers[index] && question.answer !== answers[index]) && 'flex justify-start bg-red-400 w-full my-2 p-2'}`}>{question.option4}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Review
