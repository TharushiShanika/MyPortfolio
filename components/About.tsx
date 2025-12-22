import React from "react";

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
              <img
                src="/my.jpeg"
                alt="Shanika Ekanayake"
                title="Profile picture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="w-full md:w-2/3">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm <strong>Shanika Ekanayake</strong>, an enthusiastic IT
              undergraduate at <strong>SLIIT</strong>, specializing in
              Information Technology. I have a strong interest in software
              development and UI/UX design.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              With a solid foundation in languages like <strong>Java</strong>,
              <strong> Python</strong>, and <strong>PHP</strong>, I continuously
              seek to learn and apply new technologies to solve real-world
              problems. I’m passionate about creating innovative,
              user-centered digital solutions that make a meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
