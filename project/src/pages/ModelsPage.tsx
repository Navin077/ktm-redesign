import React from 'react';
import { motion } from 'framer-motion';
import BikeCard from '../components/BikeCard';

interface ModelsPageProps {
  isDark: boolean;
}

const ModelsPage: React.FC<ModelsPageProps> = ({ isDark }) => {
  const allBikes = [
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
    },
    {
      name: "KTM RC 390",
      image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=2070",
      price: "3,25,000",
      category: "Sport",
      description: "Race-bred performance for the street"
    },
    {
      name: "KTM 250 DUKE",
      image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80&w=2070",
      price: "2,45,000",
      category: "Naked Bike",
      description: "The perfect blend of power and agility"
    },
    {
      name: "KTM 125 DUKE",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=2070",
      price: "1,85,000",
      category: "Naked Bike",
      description: "Your first step into the world of KTM"
    },
    {
      name: "KTM 390 DUKE",
      image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80&w=2070",
      price: "3,15,000",
      category: "Naked Bike",
      description: "The cornerstone of street performance"
    },
    {
      name: "KTM RC 200",
      image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=2070",
      price: "2,15,000",
      category: "Sport",
      description: "Race-inspired design meets everyday usability"
    },
    {
      name: "KTM 790 ADVENTURE",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=2070",
      price: "12,50,000",
      category: "Adventure",
      description: "The ultimate mid-weight adventure machine"
    }
  ];

  return (
    <div className="pt-20">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`py-20 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            KTM Models
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-lg mb-8">
              Discover our complete range of motorcycles, from street-focused nakeds to adventure-ready machines.
              Each bike is crafted with precision and built to deliver the ultimate riding experience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBikes.map((bike, index) => (
              <BikeCard key={index} bike={bike} isDark={isDark} />
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ModelsPage;