import React from 'react';

const DownloadButton = ({ fileName }) => {
    
    const handleDownload = () => {
        const fileUrl = process.env.PUBLIC_URL + '/' + fileName;
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        link.click();
    };

    return (
        <button className='text-sm md:text-base text-blue-500 hover:underline' onClick={handleDownload}>Download</button>
    );
};

export default DownloadButton;