import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiWifi, FiCoffee, FiHeart, FiSun, FiDroplet, FiUsers, FiAward, FiShield } from 'react-icons/fi';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

// Define facility types and interfaces
interface Facility {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  category: string;
  featured: boolean;
}

const FacilitiesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Facilities' },
    { id: 'wellness', name: 'Wellness & Spa' },
    { id: 'recreation', name: 'Recreation' },
    { id: 'business', name: 'Business Services' },
    { id: 'convenience', name: 'Convenience' },
  ];
  
  // Sample facilities data
  const facilities: Facility[] = [
    {
      id: 'spa',
      name: 'Luxury Spa & Wellness Center',
      description: 'Indulge in a variety of therapeutic treatments and massages designed to rejuvenate your body and mind.',
      icon: <FiHeart />,
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'wellness',
      featured: true
    },
    {
      id: 'pool',
      name: 'Infinity Swimming Pool',
      description: 'Enjoy our temperature-controlled infinity pool with panoramic views of the city skyline.',
      icon: <FiDroplet />,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'recreation',
      featured: true
    },
    {
      id: 'gym',
      name: 'State-of-the-Art Fitness Center',
      description: 'Stay fit during your stay with our modern gym equipment and personal training services.',
      icon: <FiAward />,
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'wellness',
      featured: false
    },
    {
      id: 'conference',
      name: 'Conference & Meeting Rooms',
      description: 'Host your business meetings and events in our fully-equipped conference rooms with modern amenities.',
      icon: <FiUsers />,
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      category: 'business',
      featured: true
    },
    {
      id: 'wifi',
      name: 'High-Speed Wi-Fi',
      description: 'Stay connected with complimentary high-speed internet access throughout the hotel.',
      icon: <FiWifi />,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'convenience',
      featured: false
    },
    {
      id: 'cafe',
      name: 'Café & Lounge',
      description: 'Relax and enjoy a variety of beverages and light snacks in our comfortable café and lounge area.',
      icon: <FiCoffee />,
      image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      category: 'convenience',
      featured: false
    },
    {
      id: 'garden',
      name: 'Rooftop Garden',
      description: 'Experience tranquility in our beautifully landscaped rooftop garden with seating areas.',
      icon: <FiSun />,
      image: 'https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'recreation',
      featured: false
    },
    {
      id: 'security',
      name: '24/7 Security',
      description: 'Rest assured with our round-the-clock security services and surveillance systems.',
      icon: <FiShield />,
      image: 'https://images.unsplash.com/photo-1503418895522-46f9804cda40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'convenience',
      featured: false
    },
  ];
  
  // Filter facilities based on active category
  const filteredFacilities = activeCategory === 'all' 
    ? facilities 
    : facilities.filter(facility => facility.category === activeCategory);
  
  // Get featured facilities
  const featuredFacilities = facilities.filter(facility => facility.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Uttara Hotel Facilities" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Our Facilities
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover the exceptional amenities and services that make your stay unforgettable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Facilities Section */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold mb-4">Featured Facilities</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Experience the best of what Uttara Hotel has to offer with our premium facilities and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredFacilities.map((facility) => (
            <FeaturedFacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </Section>

      {/* All Facilities Section */}
      <Section background="light">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">All Facilities & Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Browse through our comprehensive range of facilities and services designed for your comfort and convenience.
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </Section>

      {/* Wellness Section */}
      <Section background="white">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Wellness and Spa" 
              className="rounded-lg shadow-elegant w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-serif font-bold mb-6">Wellness & Relaxation</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Indulge in a world of relaxation and rejuvenation at our luxury spa and wellness center. Our expert therapists offer a range of treatments designed to soothe your body and mind.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1"><FiCheck /></span>
                <span>Professional massage therapists with international certifications</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1"><FiCheck /></span>
                <span>Aromatherapy and essential oil treatments</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1"><FiCheck /></span>
                <span>Steam room and sauna facilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1"><FiCheck /></span>
                <span>Couples massage and treatment rooms</span>
              </li>
            </ul>
            <Button href="#" variant="outline">Book a Spa Treatment</Button>
          </div>
        </div>
      </Section>

      {/* Business Services Section */}
      <Section background="light">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
              alt="Business Services" 
              className="rounded-lg shadow-elegant w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-serif font-bold mb-6">Business Services</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Stay productive during your stay with our comprehensive business services and facilities. Whether you're hosting a meeting or need to catch up on work, we've got you covered.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1"><FiCheck /></span>
                <span>Fully-equipped conference rooms with modern AV equipment</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1"><FiCheck /></span>
                <span>High-speed internet and Wi-Fi throughout the hotel</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1"><FiCheck /></span>
                <span>Business center with printing, scanning, and copying services</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1"><FiCheck /></span>
                <span>Private meeting rooms for small groups</span>
              </li>
            </ul>
            <Button href="#" variant="outline">Inquire About Business Services</Button>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" spacing="lg">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Experience Our World-Class Facilities
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your stay today and enjoy all the exceptional amenities and services that Uttara Hotel has to offer.
          </p>
          <Button 
            href="/reservations" 
            size="lg"
            variant="accent"
          >
            Book Your Stay Now
          </Button>
        </div>
      </Section>
    </>
  );
};

// Featured Facility Card Component
const FeaturedFacilityCard = ({ facility }: { facility: Facility }) => (
  <div className="relative rounded-lg overflow-hidden shadow-elegant group h-[400px]">
    <div className="absolute inset-0">
      <img 
        src={facility.image} 
        alt={facility.name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
      <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4">
        <div className="text-xl">
          {facility.icon}
        </div>
      </div>
      <h3 className="text-2xl font-serif font-bold mb-2">{facility.name}</h3>
      <p className="mb-4">{facility.description}</p>
      <Button href="#" size="sm" variant="ghost">Learn More</Button>
    </div>
  </div>
);

// Facility Card Component
const FacilityCard = ({ facility }: { facility: Facility }) => (
  <Card>
    <div className="h-48 overflow-hidden rounded-t-lg">
      <img 
        src={facility.image} 
        alt={facility.name} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
    <div className="p-6">
      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-4">
        <div className="text-lg text-primary-600 dark:text-primary-300">
          {facility.icon}
        </div>
      </div>
      <h3 className="text-xl font-serif font-bold mb-2">{facility.name}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{facility.description}</p>
      <Button href="#" size="sm" variant="ghost">Learn More</Button>
    </div>
  </Card>
);

// Check icon component
const FiCheck = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default FacilitiesPage; 