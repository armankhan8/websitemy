import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const videos = [
  {
    title: 'E-Commerce Platform Demo',
    description: 'See how our e-commerce template handles product management, cart functionality, and checkout process.',
    thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2089&q=80',
    videoUrl: 'https://www.youtube.com/embed/your-ecommerce-demo-id'
  },
  {
    title: 'Portfolio Website Walkthrough',
    description: 'Explore the features and customization options of our professional portfolio template.',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/embed/your-portfolio-demo-id'
  },
  {
    title: 'Blog Platform Features',
    description: 'Watch how our blog platform handles content management, comments, and social sharing.',
    thumbnail: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/embed/your-blog-demo-id'
  }
];

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = React.useState<string | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Demos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch detailed demonstrations of our website templates in action.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button
                    className="p-4 bg-white/90 rounded-full hover:bg-white transition-colors transform hover:scale-110"
                    onClick={() => setSelectedVideo(video.videoUrl)}
                  >
                    <Play className="h-8 w-8 text-indigo-600" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedVideo && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-xl">
              <button
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                onClick={() => setSelectedVideo(null)}
              >
                <Play className="h-8 w-8" />
              </button>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedVideo}
                  title="Product Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}