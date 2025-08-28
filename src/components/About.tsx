export const About = () => {
  return <section id="about" className="py-16 md:py-24 bg-white w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-100">
              <img src="src\components\my.jpeg" />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg text-gray-700 mb-6">
            I’m Tharushi Shanika, a passionate graduate in Information Technology from SLIIT. I hold a BSc (Hons) Degree in IT, 
            specialized in core areas such as software development, systems analysis, and data management. 
            I’m eager to apply my knowledge and skills to real-world projects, continuously enhancing my technical expertise, problem-solving ability, 
            </p>
          </div>
        </div>
      </div>
    </section>;
};