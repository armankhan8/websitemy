import React, { useState } from 'react';
import { ShoppingCart, Play, Download, X } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import { loadStripe } from '@stripe/stripe-js';

Modal.setAppElement('#root');

const products = [
  {
    id: 'ecommerce-starter',
    title: 'E-Commerce Starter',
    price: 50,
    features: [
      'Responsive Design',
      'Product Management',
      'Shopping Cart',
      'Payment Integration',
      'Order Management',
      'Admin Dashboard'
    ],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2089&q=80',
    demoVideo: 'https://www.youtube.com/embed/your-ecommerce-demo-id',
    downloadUrl: '/templates/ecommerce-starter.zip'
  },
  {
    id: 'portfolio-pro',
    title: 'Portfolio Pro',
    price: 20,
    features: [
      'Modern Design',
      'Project Showcase',
      'Blog Integration',
      'Contact Form',
      'SEO Optimized',
      'Analytics Ready'
    ],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    demoVideo: 'https://www.youtube.com/embed/your-portfolio-demo-id',
    downloadUrl: '/templates/portfolio-pro.zip'
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    price: 50,
    features: [
      'CMS Integration',
      'Rich Text Editor',
      'Categories & Tags',
      'Social Sharing',
      'Newsletter Integration',
      'Comment System'
    ],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    demoVideo: 'https://www.youtube.com/embed/your-blog-demo-id',
    downloadUrl: '/templates/blog-platform.zip'
  }
];

const stripePromise = loadStripe('your_publishable_key');

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<null | typeof products[0]>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleBuyNow = async (product: typeof products[0]) => {
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      // In a real application, you would make an API call to your backend to create a checkout session
      // For demo purposes, we'll just add to cart
      addItem(product);
      alert('Product added to cart! In production, this would redirect to Stripe checkout.');
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment processing error. Please try again.');
    }
  };

  const handleDownload = (product: typeof products[0]) => {
    // In production, this would verify purchase and provide secure download link
    alert('In production, this would check purchase status and provide secure download.');
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Website Templates</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional, customizable website templates ready for your next project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <button 
                  className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  onClick={() => {
                    setSelectedProduct(product);
                    setIsVideoModalOpen(true);
                  }}
                >
                  <Play className="h-5 w-5 text-indigo-600" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
                  <span className="text-2xl font-bold text-indigo-600">${product.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <button 
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    onClick={() => handleBuyNow(product)}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Buy Now
                  </button>
                  <button 
                    className="flex items-center justify-center px-4 py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
                    onClick={() => handleDownload(product)}
                  >
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isVideoModalOpen}
        onRequestClose={() => setIsVideoModalOpen(false)}
        className="max-w-4xl mx-auto mt-20 bg-white rounded-xl shadow-xl"
        overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center px-4"
      >
        {selectedProduct && (
          <div className="relative">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              onClick={() => setIsVideoModalOpen(false)}
            >
              <X className="h-8 w-8" />
            </button>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={selectedProduct.demoVideo}
                title={`${selectedProduct.title} Demo`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}