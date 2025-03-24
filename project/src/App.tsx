import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X, ChevronRight, Instagram, Facebook, Youtube, ArrowDown } from 'lucide-react';
import { Link as ScrollLink, Element } from 'react-scroll';
import Navbar from './components/Navbar';
import BikeCard from './components/BikeCard';
import ModelsPage from './pages/ModelsPage';
import RacingPage from './pages/RacingPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const featuredBikes = [
    {
      name: "KTM 1290 SUPER DUKE R EVO",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=2070",
      price: "16,25,000",
      category: "Naked Bike",
      description: "The Beast 3.0 - Ultimate power meets precision"
    },
    {
      name: "KTM 890 DUKE R",
      image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80&w=2070",
      price: "10,35,000",
      category: "Naked Bike",
      description: "The Super Scalpel - Sharp and precise"
    },
    {
      name: "KTM 390 ADVENTURE",
      image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=2070",
      price: "5,85,000",
      category: "Adventure",
      description: "Your entry into adventure riding"
    }
  ];

  const features = [
    {
      title: "Advanced Technology",
      description: "Cutting-edge electronics and rider aids for maximum control and performance",
      image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80&w=2070"
    },
    {
      title: "Racing DNA",
      description: "Built with racing heritage and track-proven performance",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=2070"
    },
    {
      title: "Premium Components",
      description: "High-quality materials and components for durability and reliability",
      image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=2070"
    }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'models':
        return <ModelsPage isDark={isDark} />;
      case 'racing':
        return <RacingPage isDark={isDark} />;
      case 'services':
        return <ServicesPage isDark={isDark} />;
      case 'about':
        return <AboutPage isDark={isDark} />;
      case 'contact':
        return <ContactPage isDark={isDark} />;
      default:
        return (
          <>
            {/* Hero Section */}
            <Element name="hero">
              <motion.section 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative h-screen"
              >
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=2070" 
                    alt="KTM Hero"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>
                
                <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
                  <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-2xl"
                  >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">READY TO RACE</h1>
                    <p className="text-xl text-white/90 mb-8">
                      Experience the thrill of pure performance with KTM's latest lineup of motorcycles.
                      Each bike is crafted with precision and built to deliver the ultimate riding experience.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentPage('models')}
                        className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2"
                      >
                        Explore Models <ChevronRight size={20} />
                      </motion.button>
                      <ScrollLink to="featured" smooth={true} duration={800}>
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2"
                        >
                          Learn More <ArrowDown size={20} />
                        </motion.button>
                      </ScrollLink>
                    </div>
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
                >
                  <ScrollLink to="featured" smooth={true} duration={800}>
                    <ArrowDown size={32} className="animate-bounce cursor-pointer" />
                  </ScrollLink>
                </motion.div>
              </motion.section>
            </Element>

            {/* Featured Section */}
            <Element name="featured">
              <section className={`py-20 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
                <div className="container mx-auto px-4">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                  >
                    FEATURED MODELS
                  </motion.h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredBikes.map((bike, index) => (
                      <BikeCard key={index} bike={bike} isDark={isDark} />
                    ))}
                  </div>
                </div>
              </section>
            </Element>

            {/* Features Section */}
            <Element name="features">
              <section className={`py-20 ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
                <div className="container mx-auto px-4">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                  >
                    WHY CHOOSE KTM
                  </motion.h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative group"
                      >
                        <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                          <img 
                            src={feature.image} 
                            alt={feature.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                        <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                          {feature.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            </Element>

            {/* Innovation Section */}
            <Element name="innovation">
              <section className={`py-20 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      className="order-2 md:order-1"
                    >
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">Innovation in Motion</h2>
                      <p className="text-lg mb-6">
                        At KTM, we're constantly pushing the boundaries of what's possible on two wheels.
                        Our commitment to innovation has led to groundbreaking technologies that enhance
                        both performance and rider safety.
                      </p>
                      <p className="text-lg mb-8">
                        From advanced traction control systems to cutting-edge suspension technology,
                        every KTM motorcycle is equipped with state-of-the-art features that deliver
                        an unmatched riding experience.
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentPage('about')}
                        className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold"
                      >
                        Discover More
                      </motion.button>
                    </motion.div>
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      className="order-1 md:order-2"
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=2070"
                        alt="KTM Innovation"
                        className="rounded-lg shadow-xl"
                      />
                    </motion.div>
                  </div>
                </div>
              </section>
            </Element>
          </>
        );
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Navbar 
        isDark={isDark} 
        setIsDark={setIsDark} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      
      {renderPage()}

      {/* Footer */}
      <footer className={`py-12 ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">KTM</h3>
              <div className="flex gap-4">
                <Instagram className="w-6 h-6 cursor-pointer hover:text-orange-500 transition-colors" />
                <Facebook className="w-6 h-6 cursor-pointer hover:text-orange-500 transition-colors" />
                <Youtube className="w-6 h-6 cursor-pointer hover:text-orange-500 transition-colors" />
              </div>
            </div>
            <div className="text-sm text-center md:text-right">
              <p>&copy; 2025 KTM. All rights reserved by Naveen Singh.</p>
              <p className="mt-2">Designed with passion for performance</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;