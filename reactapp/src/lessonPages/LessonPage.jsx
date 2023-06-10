import React from 'react'
import Sidebar from './Sidebar'
import ContentPage from './ContentPage'
import Footer from './Footer'
import Navbar from './Navbar'


function LessonPage() {
    return (
        <>
            <div className='h-screen w-full flex-col'>
                <Navbar />
                <div className='w-full flex'>
                    <div>
                        <Sidebar />
                    </div>
                    <div className="w-full h-screen overflow-y-auto">
                        <ContentPage />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default LessonPage
