import React from 'react';
import { Code, Laptop, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate computer science student with a focus on data science and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="aspect-square w-full max-w-md mx-auto mb-8 bg-gray-100 rounded-xl overflow-hidden">
              <img 
                src="Photos/kk.jpg"  // Path to your photo
                alt="Your Photo" 
                className="w-full h-full object-cover" 
              />
            </div>
            <p className="text-gray-600 leading-relaxed">
              I am currently a third-year student pursuing a Bachelor's degree in Technology (B.Tech) 
              in CSE with Data Science specialization at Lloyd Institute Engineering and Technology. 
              My academic focus includes honing my skills in various areas of computer science, with 
              a particular emphasis on programming and data science.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">B.Tech in CSE (Data Science)</h4>
                  <p className="text-gray-600">Lloyd Institute Engineering and Technology | Current</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Higher Secondary Education</h4>
                  <p className="text-gray-600">Completed 12th in 2022</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Secondary Education</h4>
                  <p className="text-gray-600">Completed 10th in 2020</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <Code className="h-8 w-8 text-indigo-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Clean Code</h3>
                <p className="text-sm text-gray-600">Writing maintainable & efficient code</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <Users className="h-8 w-8 text-indigo-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Data Science</h3>
                <p className="text-sm text-gray-600">Analytics & Machine Learning</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <Laptop className="h-8 w-8 text-indigo-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Web Dev</h3>
                <p className="text-sm text-gray-600">Modern web technologies</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <Zap className="h-8 w-8 text-indigo-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Quick Learner</h3>
                <p className="text-sm text-gray-600">Adaptable to new technologies</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
