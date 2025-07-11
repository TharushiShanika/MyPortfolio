const Hero = () => {
  return <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Shanika Ekanayake
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
          IT Undergraduate | BSc (Hons) in Information Technology (Specialized in Information Technology) | SLIIT
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8 text-lg">
          I'm Tharushi Shanika, a dedicated final-year IT undergraduate at SLIIT. I’m currently completing my BSc (Hons) Degree in Information Technology, 
          specialized in core IT areas such as software development, systems analysis, and data management. I’m passionate about applying my knowledge to real-world projects and continuously 
          improving my technical and problem-solving skills.
          </p>
          <button onClick={() => {
          const section = document.getElementById('about');
          if (section) section.scrollIntoView({
            behavior: 'smooth'
          });
        }} className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div onClick={() => {
        const section = document.getElementById('about');
        if (section) section.scrollIntoView({
          behavior: 'smooth'
        });
      }} className="animate-bounce cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>;
};
export default Hero;