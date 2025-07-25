import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Users, Globe, Lightbulb, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingHeader from '../components/FloatingHeader';
import Footer from '../components/Footer';

const LearnMore: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Lightbulb size={48} />,
      title: "Innovative Design",
      description: "Cutting-edge architectural solutions that blend creativity with functionality.",
      details: [
        "3D modeling and visualization",
        "Sustainable design principles",
        "Smart building integration",
        "Custom architectural solutions"
      ]
    },
    {
      icon: <Shield size={48} />,
      title: "Quality Assurance",
      description: "Rigorous quality control ensuring every project meets our exacting standards.",
      details: [
        "Multi-stage quality inspections",
        "Certified materials and processes",
        "Safety compliance monitoring",
        "Post-completion warranties"
      ]
    },
    {
      icon: <Zap size={48} />,
      title: "Advanced Technology",
      description: "State-of-the-art construction technology and smart building solutions.",
      details: [
        "BIM (Building Information Modeling)",
        "IoT integration and automation",
        "Energy-efficient systems",
        "Digital project management"
      ]
    }
  ];

  const achievements = [
    {
      icon: <Award size={32} />,
      number: "50+",
      label: "Industry Awards",
      description: "Recognition for excellence in architectural design and construction"
    },
    {
      icon: <Users size={32} />,
      number: "200+",
      label: "Expert Team Members",
      description: "Skilled architects, engineers, and construction professionals"
    },
    {
      icon: <Globe size={32} />,
      number: "25+",
      label: "Countries Served",
      description: "International experience in diverse markets and regulations"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgb(244, 240, 228)' }}>
      <FloatingHeader />

      {/* Hero Section */}
      <section className="bg-[#1c164b] text-white py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">OUR STORY & EXPERTISE</h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            Discover how SIGNEX has been transforming architectural visions into reality 
            through innovation, expertise, and unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                BUILDING EXCELLENCE SINCE 2008
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to revolutionize the construction industry, SIGNEX has 
                grown from a small architectural firm to a leading construction company known 
                for innovation, quality, and client satisfaction.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey began with a simple belief: every space should inspire, function 
                beautifully, and stand the test of time. Today, we continue to push boundaries 
                in architectural design while maintaining our commitment to sustainable practices 
                and exceptional craftsmanship.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#1c164b] rounded-full"></div>
                  <span className="text-gray-700">15+ years of industry leadership</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#1c164b] rounded-full"></div>
                  <span className="text-gray-700">500+ successful projects completed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#1c164b] rounded-full"></div>
                  <span className="text-gray-700">98% client satisfaction rate</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/learn-more-team.jpg"
                alt="GAHOMES Team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              OUR SERVICES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From initial concept to final construction, SIGNEX provides comprehensive services 
              to bring your architectural vision to life with precision and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-[#1c164b] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title.toUpperCase()}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#1c164b] rounded-full"></div>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              OUR ACHIEVEMENTS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Recognition and milestones that reflect our commitment to excellence 
              and innovation in the construction industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white text-center rounded-2xl p-8">
                <div className="text-[#1c164b] mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-xl font-semibold text-gray-900 mb-3">{achievement.label}</div>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#1c164b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">READY TO START YOUR PROJECT?</h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Let's discuss how SIGNEX can bring your architectural vision to life 
            with our expertise and innovative approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/get-quote"
              className="bg-white text-[#1c164b] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get a Quote
            </Link>
            <Link 
              to="/#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#1c164b] transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LearnMore;