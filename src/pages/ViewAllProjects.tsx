import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingHeader from '../components/FloatingHeader';
import Footer from '../components/Footer';

const ViewAllProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filters = ['All', 'Residential', 'Commercial', 'Mixed-Use'];

  const projects = [
    {
      id: 1,
      title: "Modern Prefab Community",
      category: "Residential",
      location: "Green Valley",
      year: "2024",
      image: "/images/project-1.jpg",
      description: "Sustainable prefab homes with modular design and energy-efficient systems.",
      status: "Completed"
    },
    {
      id: 2,
      title: "Modular Office Complex",
      category: "Commercial",
      location: "Business Park",
      year: "2024",
      image: "/images/project-2.jpg",
      description: "Prefabricated office buildings with flexible modular construction.",
      status: "Completed"
    },
    {
      id: 3,
      title: "Luxury Prefab Villas",
      category: "Residential",
      location: "Coastal Ridge",
      year: "2023",
      image: "/images/project-3.jpg",
      description: "High-end modular homes with custom prefab design and luxury finishes.",
      status: "Completed"
    },
    {
      id: 4,
      title: "Mixed-Use Prefab Development",
      category: "Mixed-Use",
      location: "Urban District",
      year: "2023",
      image: "/images/project-4.jpg",
      description: "Innovative prefab construction combining residential and commercial modules.",
      status: "Completed"
    },
    {
      id: 5,
      title: "Prefab Corporate Campus",
      category: "Commercial",
      location: "Tech Valley",
      year: "2023",
      image: "/images/project-5.jpg",
      description: "Modular corporate buildings with sustainable prefab construction methods.",
      status: "Completed"
    },
    {
      id: 6,
      title: "Eco Prefab Homes",
      category: "Residential",
      location: "Eco Village",
      year: "2022",
      image: "/images/project-6.jpg",
      description: "Environmentally conscious prefab homes with integrated green technologies.",
      status: "Completed"
    },
    {
      id: 7,
      title: "Modular High-Rise",
      category: "Commercial",
      location: "Urban Center",
      year: "2024",
      image: "/images/project-7.jpg",
      description: "Multi-story prefab building featuring modular office and retail components.",
      status: "In Progress"
    },
    {
      id: 8,
      title: "Prefab Resort Complex",
      category: "Mixed-Use",
      location: "Coastal Region",
      year: "2024",
      image: "/images/project-8.jpg",
      description: "Modular resort development with prefab hospitality and recreational modules.",
      status: "In Progress"
    },
    {
      id: 9,
      title: "Sustainable Prefab Village",
      category: "Residential",
      location: "Eco District",
      year: "2025",
      image: "/images/project-9.jpg",
      description: "Net-zero energy prefab community with advanced modular construction systems.",
      status: "Planning"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Planning':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgb(244, 240, 228)' }}>
      <FloatingHeader />

      {/* Hero Section */}
      <section className="bg-[#1c164b] text-white py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">OUR COMPLETE PORTFOLIO</h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            Explore our comprehensive collection of architectural projects spanning residential, 
            commercial, and mixed-use developments across multiple markets.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
               className="bg-white group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link 
                      to={`/project/${project.id}`}
                      className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-300"
                    >
                      <ExternalLink size={24} />
                    </Link>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <Link to={`/project/${project.id}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-[#1c164b] transition-colors duration-300 cursor-pointer">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {project.year}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-[#1c164b]/10 text-[#1c164b] px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <Link 
                      to={`/project/${project.id}`}
                      className="text-[#1c164b] font-medium hover:text-[#1c164b]/80 transition-colors duration-300"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-white rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">PORTFOLIO STATISTICS</h2>
              <p className="text-gray-600">Our track record of successful project delivery</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1c164b] mb-2">{projects.length}</div>
                <div className="text-gray-600">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1c164b] mb-2">
                  {projects.filter(p => p.status === 'Completed').length}
                </div>
                <div className="text-gray-600">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1c164b] mb-2">
                  {projects.filter(p => p.status === 'In Progress').length}
                </div>
                <div className="text-gray-600">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1c164b] mb-2">
                  {projects.filter(p => p.status === 'Planning').length}
                </div>
                <div className="text-gray-600">In Planning</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ViewAllProjects;