import React from 'react';
const About = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="rounded-lg overflow-hidden bg-gray-100 aspect-square">
              {/* Replace with your actual image */}
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-700 mb-6">
              This is where you introduce yourself in more detail. Talk about
              your background, education, and what led you to your current
              professional path. Make it personal but professional.
            </p>
            <h3 className="text-2xl font-bold mb-4">My Expertise</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Skill 1</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Skill 2</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Skill 3</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Skill 4</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Skill 5</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Skill 6</h4>
              </div>
            </div>
            <p className="text-gray-700">
              Add more details about your professional approach, philosophy, or
              anything else that helps people understand what makes you unique
              in your field.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default About;