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
              <img src="src\images\WhatsApp Image 2025-05-22 at 16.58.41.jpeg" />
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-700 mb-6">
              I'm Shanika Ekanayake, an enthusiastic IT undergraduate at SLIIT, specializing in Information Technology. 
             I have a strong interest in software development and UI/UX design.
             With a solid foundation in languages like Java, Python, and PHP
             I continuously seek to learn and apply new technologies to solve real-world problems. 
             I’m passionate about creating innovative, user-centered digital solutions that make a meaningful impact
            </p>
            <h3 className="text-2xl font-bold mb-4">My Expertise</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Java</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">React</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Wordpress</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">HTML5, CSS3, JavaScript</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Git,GitHub</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">SqFirebase, MongoDB, MySQLl</h4>
              </div>
            </div>
            <p className="text-gray-700">
              
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default About;