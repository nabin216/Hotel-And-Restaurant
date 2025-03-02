import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiFilter, FiX } from 'react-icons/fi';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Room type definitions
interface RoomAmenity {
  id: string;
  name: string;
}

interface RoomType {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  size: number;
  image: string;
  amenities: RoomAmenity[];
  featured?: boolean;
}

const AccommodationsPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  // Filter options
  const filterOptions = [
    { id: 'all', label: 'All Rooms' },
    { id: 'standard', label: 'Standard Rooms' },
    { id: 'deluxe', label: 'Deluxe Rooms' },
    { id: 'suite', label: 'Suites' },
    { id: 'family', label: 'Family Rooms' },
  ];

  // Room amenities
  const amenities: RoomAmenity[] = [
    { id: 'wifi', name: 'Free WiFi' },
    { id: 'breakfast', name: 'Breakfast Included' },
    { id: 'ac', name: 'Air Conditioning' },
    { id: 'tv', name: 'Smart TV' },
    { id: 'minibar', name: 'Mini Bar' },
    { id: 'safe', name: 'In-room Safe' },
    { id: 'bathtub', name: 'Bathtub' },
    { id: 'workspace', name: 'Work Desk' },
    { id: 'cityview', name: 'City View' },
    { id: 'balcony', name: 'Private Balcony' },
    { id: 'coffeemaker', name: 'Coffee Maker' },
    { id: 'roomservice', name: '24/7 Room Service' },
  ];

  // Sample room data
  const rooms: RoomType[] = [
    {
      id: 'standard-1',
      name: 'Standard Room',
      description: 'Comfortable room with all essential amenities for a pleasant stay.',
      price: 120,
      capacity: 2,
      size: 25,
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      amenities: amenities.filter(a => ['wifi', 'ac', 'tv', 'workspace'].includes(a.id)),
    },
    {
      id: 'deluxe-1',
      name: 'Deluxe Room',
      description: 'Spacious room with premium amenities and city views.',
      price: 180,
      capacity: 2,
      size: 35,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      amenities: amenities.filter(a => ['wifi', 'breakfast', 'ac', 'tv', 'minibar', 'cityview', 'coffeemaker'].includes(a.id)),
      featured: true,
    },
    {
      id: 'suite-1',
      name: 'Executive Suite',
      description: 'Luxurious suite with separate living area and premium amenities.',
      price: 280,
      capacity: 2,
      size: 50,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      amenities: amenities.filter(a => ['wifi', 'breakfast', 'ac', 'tv', 'minibar', 'safe', 'bathtub', 'workspace', 'cityview', 'coffeemaker', 'roomservice'].includes(a.id)),
      featured: true,
    },
    {
      id: 'family-1',
      name: 'Family Room',
      description: 'Spacious room designed for families with children.',
      price: 220,
      capacity: 4,
      size: 45,
      image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      amenities: amenities.filter(a => ['wifi', 'breakfast', 'ac', 'tv', 'safe', 'workspace'].includes(a.id)),
    },
    {
      id: 'suite-2',
      name: 'Presidential Suite',
      description: 'Our most luxurious accommodation with panoramic city views and exclusive amenities.',
      price: 450,
      capacity: 2,
      size: 75,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      amenities: amenities,
      featured: true,
    },
    {
      id: 'deluxe-2',
      name: 'Deluxe Twin Room',
      description: 'Comfortable room with twin beds, perfect for friends or colleagues.',
      price: 180,
      capacity: 2,
      size: 35,
      image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      amenities: amenities.filter(a => ['wifi', 'breakfast', 'ac', 'tv', 'minibar', 'workspace', 'coffeemaker'].includes(a.id)),
    },
  ];

  // Filter rooms based on active filter
  const filteredRooms = activeFilter === 'all' 
    ? rooms 
    : rooms.filter(room => room.id.startsWith(activeFilter));

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Uttara Hotel Accommodations" 
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
              Luxurious Accommodations
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience comfort and elegance in our thoughtfully designed rooms and suites.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rooms Section */}
      <Section background="white">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-2">Our Accommodations</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Choose from our selection of rooms and suites designed for your comfort.
            </p>
          </div>
          
          {/* Mobile Filter Button */}
          <button 
            className="md:hidden mt-4 flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900 rounded-md"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FiFilter />
            <span>Filter Rooms</span>
          </button>
          
          {/* Desktop Filters */}
          <div className="hidden md:flex items-center gap-4 mt-4 md:mt-0">
            {filterOptions.map(option => (
              <button
                key={option.id}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeFilter === option.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveFilter(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Mobile Filters Dropdown */}
        {showFilters && (
          <div className="md:hidden mb-6 bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Filter Rooms</h3>
              <button onClick={() => setShowFilters(false)}>
                <FiX />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {filterOptions.map(option => (
                <button
                  key={option.id}
                  className={`px-4 py-2 rounded-md text-left transition-colors ${
                    activeFilter === option.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => {
                    setActiveFilter(option.id);
                    setShowFilters(false);
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </Section>

      {/* Amenities Section */}
      <Section background="light">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">Room Amenities</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            All our rooms come with a range of amenities to ensure your comfort and convenience during your stay.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map(amenity => (
            <div key={amenity.id} className="flex items-center gap-2">
              <FiCheck className="text-primary-600" />
              <span>{amenity.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Booking CTA */}
      <Section background="gradient" spacing="lg">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Reserve your room now and experience the luxury and comfort of Uttara Hotel.
          </p>
          <Button 
            href="/reservations" 
            size="lg"
            variant="accent"
          >
            Book Now
          </Button>
        </div>
      </Section>
    </>
  );
};

// Room Card Component
const RoomCard = ({ room }: { room: RoomType }) => {
  return (
    <Card variant="elevated" className="h-full flex flex-col">
      <Card.Image src={room.image} alt={room.name} className="h-64" />
      <Card.Body className="flex-grow">
        <div className="flex justify-between items-start mb-2">
          <Card.Title>{room.name}</Card.Title>
          {room.featured && (
            <span className="bg-accent-500 text-white text-xs px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {room.description}
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-sm">
          <div className="flex items-center gap-1">
            <span className="text-gray-500">Size:</span>
            <span>{room.size} m²</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-500">Capacity:</span>
            <span>{room.capacity} {room.capacity === 1 ? 'Person' : 'People'}</span>
          </div>
          <div className="flex items-center gap-1 col-span-2">
            <span className="text-gray-500">Price:</span>
            <span className="font-semibold">${room.price}</span>
            <span className="text-gray-500">/ night</span>
          </div>
        </div>
        <div className="mb-4">
          <h4 className="font-medium mb-2">Amenities:</h4>
          <div className="flex flex-wrap gap-2">
            {room.amenities.slice(0, 4).map(amenity => (
              <span key={amenity.id} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                {amenity.name}
              </span>
            ))}
            {room.amenities.length > 4 && (
              <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                +{room.amenities.length - 4} more
              </span>
            )}
          </div>
        </div>
      </Card.Body>
      <Card.Footer>
        <Button href={`/reservations?room=${room.id}`} fullWidth>
          Book Now
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default AccommodationsPage; 