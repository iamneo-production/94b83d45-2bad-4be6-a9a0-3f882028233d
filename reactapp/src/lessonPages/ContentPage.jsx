import React, { useState } from 'react'
import Quizzes from './QuizManagement/Quizzes';
import Assignments from './AssignmentManagement/Assignments';

const ContentPage = () => {

    const [activeComponent, setActiveComponent] = useState('Overview');

    const handleButtonClick = (component) => {
      setActiveComponent(component);  
    };
  
    return (
        <div>
            <div>
                <h1 className='flex justify-center pt-6 sm:pt-8 text-2xl sm:text-3xl font-bold'>
                    Title of the lesson1
                </h1>
                <p className='flex justify-center pt-6 sm:pt-8 px-4 sm:px-14 text-base sm:text-lg font-serif'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur ut modi rem placeat enim rerum praesentium perspiciatis, voluptas voluptatibus iusto unde ducimus? Cum corporis aspernatur cupiditate in accusamus tempore sunt incidunt provident? Porro reiciendis dolores repudiandae tenetur debitis officia earum corrupti ut natus, soluta, cum rerum distinctio sapiente, praesentium architecto quidem nostrum ab sunt dignissimos enim. Quo veritatis voluptas amet, quaerat hic assumenda earum beatae tempore cupiditate fuga, officia voluptates atque dignissimos dolor dolorum magni distinctio necessitatibus saepe esse doloribus. Eaque sed, quas quo non a magni odit, neque iusto dolores veritatis necessitatibus libero illo reiciendis minus, beatae quos?
                </p>
            </div>

            <div className='flex justify-center h-60 w-full mt-6 sm:mt-10'>
                <iframe className='h-full w-full mx-6' src="https://player.vimeo.com/video/146022717?color=0c88dd&title=0&byline=0&portrait=0&badge=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Introduction" allowfullscreen></iframe>
            </div>

            <div className='flex space-x-2 sm:space-x-6 p-1.5 sm:p-4 justify-start border-y-2 mt-8 sm:mt-12'>
                <button type='button' onClick={() => handleButtonClick('Overview')} class={`${activeComponent === 'Overview' ? 'text-blue-500 bg-gray-300 p-2' : 'text-gray-500 p-2'} inline-flex rounded-xl shadow-[0_5px_0_rgb(250,250,250)] hover:shadow-[0_2px_0px_rgb(0,0,0)] items-center text-sm sm:text-lg font-medium active:text-gray-800`}>
                    Overview
                </button>
                <button type='button' onClick={() => handleButtonClick('Assignments')} class={`${activeComponent === 'Assignments' ? 'text-blue-500 bg-gray-300 p-2' : 'text-gray-500 p-2'} inline-flex rounded-xl shadow-[0_5px_0_rgb(250,250,250)] hover:shadow-[0_2px_0px_rgb(0,0,0)] items-center text-sm sm:text-lg font-medium active:text-gray-800`}>
                    Assignments
                </button>
                <button type='button' onClick={() => handleButtonClick('Quizzes')} class={`${activeComponent === 'Quizzes' ? 'text-blue-500 bg-gray-300 p-2' : 'text-gray-500 p-2'} inline-flex rounded-xl shadow-[0_5px_0_rgb(250,250,250)] hover:shadow-[0_2px_0px_rgb(0,0,0)] items-center text-sm sm:text-lg font-medium active:text-gray-800`}>
                    Quizzes
                </button>
                <button type='button' onClick={() => handleButtonClick('Discussion')} class={`${activeComponent === 'Discussion' ? 'text-blue-500 bg-gray-300 p-2' : 'text-gray-500 p-2'} inline-flex rounded-xl shadow-[0_5px_0_rgb(250,250,250)] hover:shadow-[0_2px_0px_rgb(0,0,0)] items-center text-sm sm:text-lg font-medium active:text-gray-800`}>
                    Discussion Forum
                </button>
            </div>
            
            <div className='bg-neutral-200'>
                {
                    activeComponent === 'Assignments' && <Assignments />
                }
                {
                    activeComponent === 'Quizzes' && <Quizzes />
                }
                {
                    activeComponent === 'Discussion' && <div> you are in Discussion </div>
                }
                {
                    activeComponent === 'Overview' && <div> you are in Overview</div>
                }
            </div>

        </div>
    )
}

export default ContentPage