import React from 'react';
import { ChevronDownIcon } from 'lucide-react';
export const Hero = () => {
  return <section className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Shanika Ekanayake
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-8">
          Software Developer | Researcher | Problem Solver
        </p>
        <div className="flex justify-center gap-4">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
            View Projects
          </a>
          <a href="#contact" className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-6 rounded-md border border-gray-300 transition-colors">
            Contact Me
          </a>
        </div>
        <a href="#about" className="flex justify-center mt-16 animate-bounce">
          <ChevronDownIcon size={28} className="text-gray-600" />
        </a>
      </div>
    </section>;
};