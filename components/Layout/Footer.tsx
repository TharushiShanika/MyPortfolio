import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
const Footer = () => {
  return <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <MailIcon size={24} />
              <span>your.email@example.com</span>
            </a>
            <a href="https://www.linkedin.com/in/shanika-ekanayake-641b9327b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <LinkedinIcon size={24} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/IT21171406" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <GithubIcon size={24} />
              <span>GitHub</span>
            </a>
          </div>
          <div className="text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;