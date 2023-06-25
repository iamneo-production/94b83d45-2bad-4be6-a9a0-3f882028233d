import React from 'react';

const CourseCard = ({ course }) => {
    return (
        <div className="bg-gray-100 p-4">
            <img src={course.image} alt={course.name} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-lg font-semibold">{course.name}</h3>
            <p className="text-gray-600 mb-2">{course.author}</p>
            <p className="mb-4">{course.description}</p>
            <div className="flex items-center justify-between">
                <p className="text-gray-700">{course.price}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Buy</button>
            </div>
        </div>
    );
};

export default CourseCard;
