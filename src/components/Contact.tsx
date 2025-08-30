import React from 'react';
import { MailIcon, GithubIcon, LinkedinIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
export const Contact = () => {
  return <section id="contact" className="py-16 md:py-24 bg-white w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Get In Touch
        </h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <MailIcon size={20} className="text-blue-600 mr-4" />
                <a href="mailto:your.email@example.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                  shanika2322@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <PhoneIcon size={20} className="text-blue-600 mr-4" />
                <a href="tel:+94768295683" className="text-gray-700 hover:text-blue-600 transition-colors">
                  +94768295683
                </a>
              </div>
              <div className="flex items-center">
                <MapPinIcon size={20} className="text-blue-600 mr-4" />
                <span className="text-gray-700">
                 North Western Provice , Sri Lanka
                </span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mt-10 mb-6">
              Connect With Me
            </h3>
            <div className="flex space-x-6">
              <a href="https://github.com/IT21171406" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors" aria-label="GitHub Profile">
                <GithubIcon size={28} />
              </a>
              <a href="https://www.linkedin.com/in/shanika-ekanayake-641b9327b" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700 transition-colors" aria-label="LinkedIn Profile">
                <LinkedinIcon size={28} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};