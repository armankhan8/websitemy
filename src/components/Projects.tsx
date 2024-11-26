import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Admission Predictor Web App',
    description: 'Web-based tool to estimate admission chances using machine learning, featuring GRE, TOEFL, and other academic metrics.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['Flask', 'Scikit-Learn', 'HTML/CSS'],
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    title: 'Sorting Visualizer',
    description: 'Interactive visualization of various sorting algorithms including Selection, Insertion, Bubble, Merge, Quick, and Heap Sort.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['C', 'Algorithms', 'Data Structures'],
    demoUrl: 'sorting_visualizer.html',
    codeUrl: 'https://github.com/armankhan8/SortingVisualizerProject'
  },
  {
    title: 'Face Recognition Attendance',
    description: 'Advanced attendance system using face recognition with Firebase integration for real-time tracking.',
    image: 'https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['Python', 'OpenCV', 'Firebase'],
    demoUrl: '#',
    codeUrl: 'https://github.com/armankhan8/Face-Recognition-Attendance-System-Project'
  },
  {
    title: 'Modulus Tutors Website',
    description: 'Professional website for online and offline tuition services with modern design and functionality.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://modulustutor.in',
    codeUrl: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical projects and achievements in software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      title="View Demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-5 w-5 text-gray-900" />
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      title="View Code"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5 text-gray-900" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}