import React from 'react';
import { motion } from 'framer-motion';

interface BikeCardProps {
  bike: {
    name: string;
    image: string;
    price: string;
    category: string;
    description: string;
  };
  isDark: boolean;
}

const BikeCard: React.FC<BikeCardProps> = ({ bike, isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`rounded-lg overflow-hidden shadow-lg ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="relative h-64">
        <img
          src={bike.image}
          alt={bike.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
          {bike.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{bike.name}</h3>
        <p className="text-sm mb-4 text-gray-500 dark:text-gray-400">{bike.description}</p>
        <p className={`text-lg font-semibold ${isDark ? 'text-orange-400' : 'text-orange-500'}`}>
          Starting at ₹{bike.price}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 w-full bg-orange-500 text-white py-2 rounded-full font-semibold"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default BikeCard;