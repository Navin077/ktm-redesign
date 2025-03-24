import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

interface ContactPageProps {
  isDark: boolean;
}

const ContactPage: React.FC<ContactPageProps> = ({ isDark }) => {
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
            Contact Us
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`p-8 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-orange-500" />
                  <p>123 KTM Street, Bangalore, India</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-orange-500" />
                  <p>+91 1800 123 4567</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-orange-500" />
                  <p>support@ktm.in</p>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 rounded-lg ${
                    isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
                  } border`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className={`w-full px-4 py-2 rounded-lg ${
                    isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
                  } border`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className={`w-full px-4 py-2 rounded-lg ${
                    isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
                  } border`}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;