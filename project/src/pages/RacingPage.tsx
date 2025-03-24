import React from 'react';
import { motion } from 'framer-motion';

interface RacingPageProps {
  isDark: boolean;
}

const RacingPage: React.FC<RacingPageProps> = ({ isDark }) => {
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
            KTM Racing
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=2070"
                alt="KTM Racing"
                className="w-full h-[300px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Race</h2>
              <p className="text-lg mb-6">Experience the thrill of KTM Racing, where performance meets passion. Our racing heritage drives innovation across our entire motorcycle lineup.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold self-start"
              >
                Join KTM Racing
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default RacingPage;