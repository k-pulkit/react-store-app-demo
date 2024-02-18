import React from 'react';

const About = () => {
  return (
    <div className="relative max-container p-20 flex flex-col flex-1 items-center justify-center min-h-[80vh]">
      <div className="p-8 bg-white shadow-lg rounded-lg h-full">
        <h1 className="text-3xl font-bold font-montserrat mb-4">About</h1>
        <div className="text-gray-700 mb-4 font-montserrat leading-7">
          <p>
          This single-page application (SPA) is built using React. Utilizing React Router, the application offers seamless navigation between different views, ensuring a smooth and intuitive user experience.
          </p>
          <p className='mt-4'>
          Redux is employed for state management, demonstrating how a centralized store can simplify data management and make it easier to maintain consistency across the application.
          </p>
          <p className="mt-4">
          In addition, the application leverages the latest React hooks to manage component state and side effects, highlighting the benefits of this modern approach to building React applications. By combining these technologies, this SPA serves as a comprehensive example of how to create robust and feature-rich web applications with React.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default About;