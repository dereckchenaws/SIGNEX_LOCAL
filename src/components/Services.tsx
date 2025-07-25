import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Hammer, Lightbulb, Shield, Zap, Users } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Hammer size={48} />,
      title: "Premium Construction",
      description: "High-quality construction services with attention to detail and commitment to timelines and budget.",
      features: ["Quality Materials", "Skilled Craftsmen", "Project Management"]
    },
    {
      icon: <Lightbulb size={48} />,
      title: "Design Consultation",
      description: "Expert design guidance from concept to completion, ensuring your project exceeds expectations.",
      features: ["Design Strategy", "Material Selection", "Cost Optimization"]
    },
    {
      icon: <Shield size={48} />,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring every project meets our exacting standards.",
      features: ["Safety Compliance", "Quality Inspections", "Warranty Protection"]
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            OUR SERVICES
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From initial concept to final construction, SIGNEX provides comprehensive services 
            to bring your architectural vision to life with precision and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-[#1c164b] mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title.toUpperCase()}</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700 text-sm">
                    <div className="w-2 h-2 bg-[#1c164b] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/learn-more"
                className="mt-6 text-[#1c164b] font-medium text-sm hover:text-[#1c164b]/80 transition-colors duration-300 flex items-center group"
              >
                Learn More
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;