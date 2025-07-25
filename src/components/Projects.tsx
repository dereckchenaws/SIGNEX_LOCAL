import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Residential', 'Commercial', 'Mixed-Use'];

  const projects = [
    {
      id: 1,
      title: "Modern Prefab Community",
      category: "Residential",
      location: "Green Valley",
      year: "2024",
      image: "/images/project-1.jpg",
      description: "Sustainable prefab homes with modular design and energy-efficient systems."
    },
    {
      id: 2,
      title: "Modular Office Complex",
      category: "Commercial",
      location: "Business Park",
      year: "2024",
      image: "/images/project-2.jpg",
      description: "Prefabricated office buildings with flexible modular construction."
    },
    {
      id: 3,
      title: "Luxury Prefab Villas",
      category: "Residential",
      location: "Coastal Ridge",
      year: "2023",
      image: "/images/project-3.jpg",
      description: "High-end modular homes with custom prefab design and luxury finishes."
    },
    {
      id: 4,
      title: "Mixed-Use Prefab Development",
      category: "Mixed-Use",
      location: "Urban District",
      year: "2023",
      image: "/images/project-4.jpg",
      description: "Innovative prefab construction combining residential and commercial modules."
    },
    {
      id: 5,
      title: "Prefab Corporate Campus",
      category: "Commercial",
      location: "Tech Valley",
      year: "2023",
      image: "/images/project-5.jpg",
      description: "Modular corporate buildings with sustainable prefab construction methods."
    },
    {
      id: 6,
      title: "Eco Prefab Homes",
      category: "Residential",
      location: "Eco Village",
      year: "2022",
      image: "/images/project-6.jpg",
      description: "Environmentally conscious prefab homes with integrated green technologies."
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: 'rgb(244, 240, 228)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            FEATURED PROJECTS
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore our portfolio of exceptional projects that showcase our commitment 
            to innovative design, quality construction, and client satisfaction.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#1c164b] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              className="bg-white group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden">
                <Link to={`/project/${project.id}`} className="block relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full">
                      <ExternalLink size={24} />
                    </div>
                  </div>
                </Link>
              </div>
              
              <div className="p-6">
                <Link to={`/project/${project.id}`}>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-[#1c164b] transition-colors duration-300 cursor-pointer">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {project.year}
                  </div>
                </div>
                
                <div className="mt-4">
                  <span className="inline-block bg-[#1c164b]/10 text-[#1c164b] px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/view-all-projects"
            className="bg-[#1c164b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#1c164b]/90 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;