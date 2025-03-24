import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Clock, Shield } from 'lucide-react';

interface ServicesPageProps {
  isDark: boolean;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ isDark }) => {
  const services = [
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Maintenance",
      description: "Regular service and maintenance for your KTM motorcycle"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all KTM owners"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Warranty",
      description: "Comprehensive warranty coverage for peace of mind"
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
            Our Services
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className={`p-8 rounded-lg text-center ${
                  isDark ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <div className="mb-6 text-orange-500">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;