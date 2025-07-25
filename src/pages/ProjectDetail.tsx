import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { ArrowLeft, MapPin, Calendar, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import ImageModal from '../components/ImageModal';
import FloatingHeader from '../components/FloatingHeader';
import Footer from '../components/Footer';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGallery, setCurrentGallery] = useState<string[]>([]);
  const [galleryTitle, setGalleryTitle] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openImageModal = (images: string[], index: number, title: string) => {
    setCurrentGallery(images);
    setCurrentImageIndex(index);
    setGalleryTitle(title);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentGallery.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      prev === currentGallery.length - 1 ? 0 : prev + 1
    );
  };

  const projects = {
    '1': {
      title: "Modern Prefab Community",
      category: "Residential",
      location: "Green Valley",
      year: "2024",
      client: "Prefab Living Solutions",
      size: "250,000 sq ft",
      duration: "18 months",
      budget: "$45M",
      heroImage: "/images/project-1-hero.jpg",
      gallery: [
        "/images/project-1-gallery-1.jpg",
        "/images/project-1-gallery-2.jpg",
        "/images/project-1-gallery-3.jpg",
        "/images/project-1-gallery-4.jpg"
      ],
      description: "Sustainable prefab homes with modular design and energy-efficient systems. This flagship prefab community sets new standards for sustainable living with factory-built precision and eco-friendly features.",
      features: [
        "Factory-Built Quality Control",
        "Modular Construction System",
        "Sustainable Materials",
        "Energy-Efficient Systems",
        "Quick Assembly Process",
        "Customizable Floor Plans"
      ],
      challenge: "The main challenge was creating high-quality prefab homes that maintain architectural appeal while optimizing factory production efficiency and on-site assembly speed.",
      solution: "We developed an innovative modular system with precision manufacturing processes and streamlined assembly methods that deliver superior quality homes in significantly reduced timeframes.",
      prefabGallery: [
        "/images/project-1-prefab-1.jpg",
        "/images/project-1-prefab-2.jpg",
        "/images/project-1-prefab-3.jpg",
        "/images/project-1-prefab-4.jpg",
        "/images/project-1-prefab-5.jpg",
        "/images/project-1-prefab-6.jpg"
      ]
    },
    '2': {
      title: "Modular Office Complex",
      category: "Commercial",
      location: "Business Park",
      year: "2024",
      client: "Modular Workspace Solutions",
      size: "180,000 sq ft",
      duration: "14 months",
      budget: "$32M",
      heroImage: "/images/project-2-hero.jpg",
      gallery: [
        "/images/project-2-gallery-1.jpg",
        "/images/project-2-gallery-2.jpg",
        "/images/project-2-gallery-3.jpg",
        "/images/project-2-gallery-4.jpg"
      ],
      description: "Prefabricated office buildings with flexible modular construction. Features adaptable workspaces, efficient assembly processes, and sustainable prefab design elements.",
      features: [
        "Modular Office Layouts",
        "Factory-Built Components",
        "Rapid Assembly Process",
        "Sustainable Prefab Materials",
        "Energy-Efficient Design",
        "Scalable Modular System"
      ],
      challenge: "Creating flexible office spaces using prefab construction while maintaining professional aesthetics and incorporating efficient modular assembly processes.",
      solution: "We developed a modular office system with standardized components that can be quickly assembled on-site while providing the flexibility and professional appearance businesses require.",
      prefabGallery: [
        "/images/project-2-prefab-1.jpg",
        "/images/project-2-prefab-2.jpg",
        "/images/project-2-prefab-3.jpg",
        "/images/project-2-prefab-4.jpg",
        "/images/project-2-prefab-5.jpg",
        "/images/project-2-prefab-6.jpg"
      ]
    },
    '3': {
      title: "Luxury Prefab Villas",
      category: "Residential",
      location: "Coastal Ridge",
      year: "2023",
      client: "Premium Prefab Homes",
      size: "120,000 sq ft",
      duration: "24 months",
      budget: "$28M",
      heroImage: "/images/project-3-hero.jpg",
      gallery: [
        "/images/project-3-gallery-1.jpg",
        "/images/project-3-gallery-2.jpg",
        "/images/project-3-gallery-3.jpg",
        "/images/project-3-gallery-4.jpg"
      ],
      description: "High-end modular homes with custom prefab design and luxury finishes. Each villa features precision-manufactured components and premium modular construction.",
      features: [
        "Custom Modular Design",
        "Premium Prefab Materials",
        "Factory Quality Control",
        "Luxury Finishes",
        "Efficient Assembly",
        "Sustainable Construction"
      ],
      challenge: "Creating luxury prefab homes that maintain high-end aesthetics while utilizing efficient modular construction methods and factory-built components.",
      solution: "We developed a premium modular system with custom design capabilities and luxury finishes that delivers high-end homes through efficient prefab construction processes.",
      prefabGallery: [
        "/images/project-3-prefab-1.jpg",
        "/images/project-3-prefab-2.jpg",
        "/images/project-3-prefab-3.jpg",
        "/images/project-3-prefab-4.jpg",
        "/images/project-3-prefab-5.jpg",
        "/images/project-3-prefab-6.jpg"
      ]
    },
    '4': {
      title: "Mixed-Use Prefab Development",
      category: "Mixed-Use",
      location: "Urban District",
      year: "2023",
      client: "Modular Urban Solutions",
      size: "300,000 sq ft",
      duration: "20 months",
      budget: "$55M",
      heroImage: "/images/project-4-hero.jpg",
      gallery: [
        "/images/project-4-gallery-1.jpg",
        "/images/project-4-gallery-2.jpg",
        "/images/project-4-gallery-3.jpg",
        "/images/project-4-gallery-4.jpg"
      ],
      description: "Innovative prefab construction combining residential and commercial modules. A model for efficient modular urban development using factory-built components.",
      features: [
        "Modular Mixed-Use Design",
        "Prefab Retail Modules",
        "Modular Office Components",
        "Residential Prefab Units",
        "Integrated Assembly System",
        "Sustainable Modular Construction"
      ],
      challenge: "Integrating multiple prefab building types in a single development while maintaining efficient modular construction processes and distinct functional identities.",
      solution: "We developed a modular system with standardized components that can be configured for different uses, enabling efficient factory production and streamlined on-site assembly.",
      prefabGallery: [
        "/images/project-4-prefab-1.jpg",
        "/images/project-4-prefab-2.jpg",
        "/images/project-4-prefab-3.jpg",
        "/images/project-4-prefab-4.jpg",
        "/images/project-4-prefab-5.jpg",
        "/images/project-4-prefab-6.jpg"
      ]
    },
    '5': {
      title: "Prefab Corporate Campus",
      category: "Commercial",
      location: "Tech Valley",
      year: "2023",
      client: "Modular Corporate Solutions",
      size: "220,000 sq ft",
      duration: "16 months",
      budget: "$38M",
      heroImage: "/images/project-5-hero.jpg",
      gallery: [
        "/images/project-5-gallery-1.jpg",
        "/images/project-5-gallery-2.jpg",
        "/images/project-5-gallery-3.jpg",
        "/images/project-5-gallery-4.jpg"
      ],
      description: "Modular corporate buildings with sustainable prefab construction methods. Designed using efficient factory-built components and rapid assembly processes.",
      features: [
        "Modular Construction System",
        "Prefab Office Modules",
        "Factory-Built Components",
        "Rapid Assembly Process",
        "Sustainable Prefab Materials",
        "Scalable Modular Design"
      ],
      challenge: "Creating a prestigious corporate campus using prefab construction while maintaining professional aesthetics and achieving rapid construction timelines.",
      solution: "We developed a sophisticated modular system with premium finishes and efficient assembly processes that delivers corporate-quality buildings through advanced prefab construction methods.",
      prefabGallery: [
        "/images/project-5-prefab-1.jpg",
        "/images/project-5-prefab-2.jpg",
        "/images/project-5-prefab-3.jpg",
        "/images/project-5-prefab-4.jpg",
        "/images/project-5-prefab-5.jpg",
        "/images/project-5-prefab-6.jpg"
      ]
    },
    '6': {
      title: "Eco Prefab Homes",
      category: "Residential",
      location: "Eco Village",
      year: "2022",
      client: "Sustainable Prefab Living",
      size: "150,000 sq ft",
      duration: "22 months",
      budget: "$25M",
      heroImage: "/images/project-6-hero.jpg",
      gallery: [
        "/images/project-6-gallery-1.jpg",
        "/images/project-6-gallery-2.jpg",
        "/images/project-6-gallery-3.jpg",
        "/images/project-6-gallery-4.jpg"
      ],
      description: "Environmentally conscious prefab homes with integrated green technologies. A perfect blend of sustainable modular construction and eco-friendly living.",
      features: [
        "Sustainable Prefab Design",
        "Eco-Friendly Materials",
        "Energy-Efficient Modules",
        "Green Construction Methods",
        "Modular Solar Integration",
        "Sustainable Assembly Process"
      ],
      challenge: "Creating affordable eco-friendly prefab homes that maintain high environmental standards while utilizing efficient modular construction processes.",
      solution: "We developed a sustainable modular system using eco-friendly materials and energy-efficient components that delivers environmentally responsible homes through streamlined prefab construction.",
      prefabGallery: [
        "/images/project-6-prefab-1.jpg",
        "/images/project-6-prefab-2.jpg",
        "/images/project-6-prefab-3.jpg",
        "/images/project-6-prefab-4.jpg",
        "/images/project-6-prefab-5.jpg",
        "/images/project-6-prefab-6.jpg"
      ]
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/" className="text-[#1c164b] hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen" style={{ backgroundColor: 'rgb(244, 240, 228)' }}>
        <FloatingHeader />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden pt-20">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
            <div className="flex items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                {project.location}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                {project.year}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-block bg-[#1c164b]/10 text-[#1c164b] px-4 py-2 rounded-full text-sm font-medium mb-4">
                  {project.category}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">PROJECT OVERVIEW</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
              </motion.div>

              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">THE CHALLENGE</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.challenge}
                </p>
              </motion.div>

              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">OUR SOLUTION</h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">KEY FEATURES</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#1c164b] rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div 
                className="rounded-2xl p-6 mb-8"
                className="bg-white rounded-2xl p-6 mb-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">PROJECT DETAILS</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">CLIENT</div>
                    <div className="font-semibold text-gray-900">{project.client}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">SIZE</div>
                    <div className="font-semibold text-gray-900">{project.size}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">DURATION</div>
                    <div className="font-semibold text-gray-900">{project.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">BUDGET</div>
                    <div className="font-semibold text-gray-900">{project.budget}</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-[#1c164b] text-white rounded-2xl p-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-4">INTERESTED IN A SIMILAR PROJECT?</h3>
                <p className="text-gray-200 mb-6">
                  Let's discuss how SIGNEX can bring your vision to life with our expertise and innovation.
                </p>
                <Link 
                  to="/#contact"
                  className="bg-white text-[#1c164b] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Gallery */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">PROJECT GALLERY</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.gallery.map((image, index) => (
                <motion.div 
                  key={index} 
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => openImageModal(project.gallery, index, `${project.title} - Project Gallery`)}
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-sm font-medium">Click to enlarge</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Prefab Housing Gallery */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">PREFAB HOUSING SOLUTIONS</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Explore our innovative prefab housing designs that combine efficiency, sustainability, and modern aesthetics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.prefabGallery.map((image, index) => (
                <motion.div 
                  key={index} 
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => openImageModal(project.prefabGallery, index, `${project.title} - Prefab Housing Solutions`)}
                >
                  <img
                    src={image}
                    alt={`Prefab Housing - Design ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h4 className="text-lg font-semibold mb-2">Prefab Design {index + 1}</h4>
                      <p className="text-sm">Modern • Sustainable • Efficient</p>
                      <p className="text-xs mt-1">Click to enlarge</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Image Modal */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={closeImageModal}
        images={currentGallery}
        currentIndex={currentImageIndex}
        onPrevious={goToPrevious}
        onNext={goToNext}
        title={galleryTitle}
      />
      </div>
      
      <Footer />
    </>
  );
};

export default ProjectDetail;