import React from 'react';
import { useNavigate } from "react-router-dom";


function HomePage() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/StudentDashboard';
    navigate(path);
  }

  return (
    <div className="bg-gray-100">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to our Online Learning Portal</h1>
        <p className="mt-2 text-lg text-gray-600">Start your journey towards knowledge and growth</p>
      </header>
      <main className="max-w-4xl mx-auto px-4">
        <section className="flex flex-wrap items-center justify-center mt-10">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <i className="text-3xl text-blue-500 icon-video mb-4"></i>
              <h2 className="text-xl font-semibold text-gray-800">Video Lessons</h2>
              <p className="text-gray-600 mt-2">Access a vast library of video lessons and quizzes on various subjects.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <i className="text-3xl text-blue-500 icon-quizzes mb-4"></i>
              <h2 className="text-xl font-semibold text-gray-800">Interactive Quizzes</h2>
              <p className="text-gray-600 mt-2">Test your understanding with interactive quizzes after each lesson.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <i className="text-3xl text-blue-500 icon-certificate mb-4"></i>
              <h2 className="text-xl font-semibold text-gray-800">Course Certificates</h2>
              <p className="text-gray-600 mt-2">Earn certificates upon completion of courses to showcase your achievements.</p>
            </div>
          </div>
        </section>
        <section className="text-center mt-10">
          <h2 className="text-3xl font-bold text-gray-800">Get Started Today!</h2>
          <p className="text-lg text-gray-600 mt-2">Sign up now and unlock a world of knowledge.</p>
          <button
            className="mt-6 py-3 px-6 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-200" onClick={routeChange}
          >
            Let's start
          </button>
        </section>
      </main>
      <footer className="bg-gray-200 text-center py-6">
        <p className="text-gray-600">&copy; 2023 Online Learning Portal.</p>
      </footer>
    </div>
  );
};

export default HomePage;
