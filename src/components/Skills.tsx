import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const skills = {
  'Programming & Data Science': [
    'Python (Pandas, NumPy, Matplotlib)',
    'Data Structures & Algorithms',
    'Machine Learning Beginner',
    'Data Analysis Beginner',
    'Statistical Analysis Beginner ',
    'C Programming'
  ],
  'Web Development Uisng AI Tools': [
    'HTML5/CSS3',
    'JavaScript',
    'React.js',
    'Web Design',
    'Responsive Development',
    'Version Control (Git)'
  ],
  'Tools & Software': [
    'Microsoft Excel',
    'Microsoft Word',
    'GitHub',
    'VS Code',
    'Jupyter Notebook',
    'Firebase'
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive set of technical skills and tools I use to build solutions
            and analyze data.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
              <ul className="space-y-3">
                {skillList.map((skill, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600 mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}