import React from "react";

export const About: React.FC = () => {
  const profileImage = new URL("../assets/my.jpeg", import.meta.url).href;

  return (
    <section id="about" className="py-16 md:py-24 bg-white w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg">
              <img
                src={profileImage}
                alt="Shanika Ekanayake"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3">
  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
    I'm <strong>Shanika Ekanayake</strong>, a recent graduate in Information Technology from <strong>SLIIT</strong>, with a keen interest in Quality Assurance and software development.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed">
    I enjoy testing and ensuring the quality of software applications, as well as designing user-friendly interfaces. I love building reliable and user-centered digital solutions that solve real-world problems.
  </p>
</div>

        </div>
      </div>
    </section>
  );
};
