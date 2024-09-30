import React from 'react';

const Experience = () => {
  return (
    <section className="py-10 w-full text-center" style={{ backgroundColor: '#121212' }}>
      <h2 className="text-3xl md:text-4xl font-semibold text-purple-400">
        Experience
      </h2>
      <div className="mt-8 space-y-4 max-w-3xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl text-purple-400">Project 1</h3>
          <p className="text-gray-300 mt-2">
            Developed a fully functional Automated Parking Ticket Platform using Node.js & Express.js.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl text-purple-400">Project 2</h3>
          <p className="text-gray-300 mt-2">
            Created a task management system using the MERN stack and implemented advanced features.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl text-purple-400">Project 3</h3>
          <p className="text-gray-300 mt-2">
            Made a Digital Marketing Dashboard from scratch using Ant Design. Used React.js, redux, react-router, etc.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl text-purple-400">Project 4</h3>
          <p className="text-gray-300 mt-2">
            Created a Reporting Manager using the MERN stack and used Bootstrap.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
