import React from "react";

export const About: React.FC = () => {
  const profileImage = new URL("../assets/my.jpeg", import.meta.url).href;

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 w-full"
    >
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
              <img
                src={profileImage}
                alt="Tharushi Shanika"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Full Stack Developer & AI Solutions Engineer
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              I am a passionate IT graduate specializing in building intelligent,
              scalable, and secure web applications. My expertise includes modern
              frontend development with React and TypeScript, backend systems using
              FastAPI and Firebase, and AI model integration for real-world problem solving.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              I enjoy transforming complex ideas into practical solutions, 
              focusing on performance, security, and user experience. 
              My goal is to create technology that delivers measurable impact.
            </p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-blue-600 mb-2">Frontend</h4>
                <p className="text-sm text-gray-600">
                  React, TypeScript, Tailwind CSS
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-blue-600 mb-2">Backend</h4>
                <p className="text-sm text-gray-600">
                  FastAPI, Node.js, Firebase
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-blue-600 mb-2">AI & Systems</h4>
                <p className="text-sm text-gray-600">
                  LLM Integration, IoT, Secure Systems
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};