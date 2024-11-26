import React from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const typewriterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const words = ["innovative", "scalable", "modern"];

export default function Hero() {
  const [wordIndex, setWordIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm <span className="text-indigo-600">Arman Khan</span>
            <br />
            <span className="text-3xl md:text-4xl">Computer Science Student</span>
          </motion.h1>
          
          <motion.div
            className="h-8 mb-8"
            initial="hidden"
            animate="visible"
            variants={typewriterVariants}
            key={words[wordIndex]}
          >
            <p className="text-xl text-gray-600">
              Creating <span className="text-indigo-600 font-semibold">{words[wordIndex]}</span> solutions
            </p>
          </motion.div>

          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A passionate computer science student specializing in Data Science, focused on creating
            innovative solutions and exploring cutting-edge technologies.
          </motion.p>

          <div className="flex justify-center gap-4 mb-12">
            <motion.a 
              href="Photos/ArmanResumeMain.pdf" 
              className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
            <motion.a 
              href="#about" 
              className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </div>

          <div className="flex justify-center space-x-6">
            <motion.a 
              href="http://linkedin.com/in/arman-khan-86409b297" 
              className="text-gray-600 hover:text-indigo-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a 
              href="https://github.com/armankhan8" 
              className="text-gray-600 hover:text-indigo-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}