import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
          
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/IT21171406" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub Profile">
              <GithubIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/in/shanika-ekanayake-641b9327b" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn Profile">
              <LinkedinIcon size={24} />
            </a>
            <a href="mailto:shanika2322@gmail.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email Me">
              <MailIcon size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} shanika. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};