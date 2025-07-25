import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: <Award size={32} />,
      number: "50+",
      label: "Industry Awards"
    },
    {
      icon: <Users size={32} />,
      number: "200+",
      label: "Team Members"
    },
    {
      icon: <Globe size={32} />,
      number: "25+",
      label: "Countries Served"
    },
    {
      icon: <Zap size={32} />,
      number: "100%",
      label: "Sustainable Focus"
    }
  ];

  return (
    <section id="about" className="py-20 text-white" style={{ backgroundColor: 'rgb(28,22,75)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              CRAFTING EXCELLENCE SINCE 2008
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              SIGNEX has been at the forefront of architectural innovation, delivering 
              exceptional construction and design solutions that transform spaces and 
              exceed client expectations.
            </p>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">OUR MISSION</h3>
                <p className="text-gray-300 leading-relaxed">
                  To revolutionize the construction industry through innovative design, 
                  sustainable practices, and uncompromising quality, creating spaces 
                  that inspire and endure.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">OUR VISION</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the world's most trusted partner in architectural excellence, 
                  setting new standards for design innovation and sustainable construction 
                  practices globally.
                </p>
              </div>
            </div>

            <Link 
              to="/learn-more"
              className="bg-white text-[#1c164b] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Learn Our Story
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/images/about-team.jpg"
              alt="SIGNEX Team"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1c164b]/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-800">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="text-white mb-4 flex justify-center">
                {achievement.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-2">{achievement.number}</div>
              <div className="text-gray-400 font-normal text-sm">{achievement.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;