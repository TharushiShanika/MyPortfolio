import React from 'react';
import { BookOpenIcon, AwardIcon } from 'lucide-react';
export const Education = () => {
  const education = [{
    degree: ' BSc (Hons) Degree in Information Technology Specializing Information Technology',
    institution: 'SLIIT Malabe',
    year: '2021 - 2025',
    
  }, ];
  const certifications = [{
    title: 'Research Publication Certificate',
    issuer: 'IRJIET',
    date: 'May 2025',
    description: "Integrated Healthcare System for Vulnerable Populations: Leveraging IOT Machine-learning Community Based Interventions."
    
    
  },];
  return <section id="education" className="py-16 md:py-24 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Education & Certifications
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <BookOpenIcon size={24} className="text-blue-600" />
              <h3 className="text-2xl font-semibold ml-2">Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((item, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900">
                    {item.degree}
                  </h4>
                  <p className="text-gray-600">
                    {item.institution} | {item.year}
                  </p>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                </div>)}
            </div>
          </div>
          <div>
            <div className="flex items-center mb-8">
              <AwardIcon size={24} className="text-blue-600" />
              <h3 className="text-2xl font-semibold ml-2">Certifications</h3>
            </div>
            <div className="space-y-8">
              {certifications.map((cert, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900">
                    {cert.title}
                  </h4>
                  <p className="text-gray-600">
                    {cert.issuer} | {cert.date}
                  </p>
                  <p className="text-gray-700 mt-2">{cert.description}</p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};