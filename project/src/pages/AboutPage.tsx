import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, PenTool as Tool, Globe, Users } from 'lucide-react';

interface AboutPageProps {
  isDark: boolean;
}

const AboutPage: React.FC<AboutPageProps> = ({ isDark }) => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "18 Dakar Rally Wins",
      description: "Dominating the world's toughest rally raid"
    },
    {
      icon: <Tool className="w-8 h-8" />,
      title: "Innovation Leader",
      description: "Pioneering motorcycle technology since 1934"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Presence",
      description: "Available in over 100 countries worldwide"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Racing Heritage",
      description: "Multiple MotoGP and Motocross championships"
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
            About KTM
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Heritage</h2>
              <p className="text-lg mb-6">
                Founded in 1934 in Mattighofen, Austria, KTM has grown from a small metal working shop to one of the world's leading motorcycle manufacturers. Our journey is marked by innovation, determination, and an unwavering commitment to excellence.
              </p>
              <p className="text-lg mb-6">
                Today, KTM continues to push the boundaries of motorcycle engineering and design. Our "Ready to Race" philosophy isn't just a slogan – it's the principle that drives every motorcycle we create, whether it's for the racetrack or the street.
              </p>
              <p className="text-lg">
                With multiple championships across various disciplines and a reputation for producing some of the most exciting motorcycles in the world, KTM remains at the forefront of motorcycle innovation and performance.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80&w=2070"
                alt="KTM Heritage"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-lg text-center ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}
              >
                <div className="text-orange-500 mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;