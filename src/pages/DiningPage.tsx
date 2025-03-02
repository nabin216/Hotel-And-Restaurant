import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiMapPin, FiPhone } from 'react-icons/fi';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Restaurant type definition
interface Restaurant {
  id: string;
  name: string;
  description: string;
  cuisine: string;
  hours: string;
  location: string;
  phone: string;
  image: string;
  featured?: boolean;
}

// Menu item type definition
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  restaurant: string;
  featured?: boolean;
  dietaryInfo?: string[];
}

const DiningPage = () => {
  const [activeTab, setActiveTab] = useState<string>('restaurants');
  const [activeRestaurant, setActiveRestaurant] = useState<string>('all');

  // Sample restaurant data
  const restaurants: Restaurant[] = [
    {
      id: 'skyline',
      name: 'Skyline Restaurant',
      description: 'Experience fine dining with panoramic city views at our rooftop restaurant, offering a blend of international and local cuisine.',
      cuisine: 'International',
      hours: '6:30 AM - 11:00 PM',
      location: 'Rooftop, 12th Floor',
      phone: '+880 1234 567890',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      featured: true,
    },
    {
      id: 'spice',
      name: 'Spice Garden',
      description: 'Authentic Bengali and Indian cuisine prepared with traditional recipes and the freshest local ingredients.',
      cuisine: 'Bengali & Indian',
      hours: '12:00 PM - 10:30 PM',
      location: 'Ground Floor, East Wing',
      phone: '+880 1234 567891',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 'bistro',
      name: 'The Bistro',
      description: 'Casual dining with a European flair, perfect for a relaxed meal or coffee with friends.',
      cuisine: 'European',
      hours: '7:00 AM - 9:00 PM',
      location: 'Lobby Level',
      phone: '+880 1234 567892',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 'lounge',
      name: 'Horizon Lounge',
      description: 'Elegant lounge serving premium cocktails, fine wines, and light gourmet bites with live music in the evenings.',
      cuisine: 'International',
      hours: '4:00 PM - 1:00 AM',
      location: '11th Floor',
      phone: '+880 1234 567893',
      image: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      featured: true,
    },
  ];

  // Sample menu items
  const menuItems: MenuItem[] = [
    {
      id: 'item1',
      name: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon grilled to perfection, served with seasonal vegetables and lemon butter sauce.',
      price: 28,
      category: 'Main Course',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      restaurant: 'skyline',
      featured: true,
      dietaryInfo: ['Gluten-Free', 'High Protein'],
    },
    {
      id: 'item2',
      name: 'Butter Chicken',
      description: 'Tender chicken cooked in a rich tomato and butter sauce, served with naan bread and basmati rice.',
      price: 22,
      category: 'Main Course',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      restaurant: 'spice',
      featured: true,
    },
    {
      id: 'item3',
      name: 'Beef Tenderloin',
      description: 'Prime beef tenderloin cooked to your preference, served with truffle mashed potatoes and red wine reduction.',
      price: 34,
      category: 'Main Course',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80',
      restaurant: 'skyline',
      featured: true,
    },
    {
      id: 'item4',
      name: 'Vegetable Risotto',
      description: 'Creamy Arborio rice cooked with seasonal vegetables, white wine, and Parmesan cheese.',
      price: 18,
      category: 'Main Course',
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      restaurant: 'bistro',
      dietaryInfo: ['Vegetarian'],
    },
    {
      id: 'item5',
      name: 'Chocolate Fondant',
      description: 'Warm chocolate cake with a molten center, served with vanilla ice cream and berry compote.',
      price: 12,
      category: 'Dessert',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      restaurant: 'skyline',
    },
    {
      id: 'item6',
      name: 'Signature Cocktail',
      description: 'Our signature blend of premium spirits, fresh fruit juices, and aromatic herbs.',
      price: 16,
      category: 'Beverage',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      restaurant: 'lounge',
      featured: true,
    },
  ];

  // Filter menu items based on active restaurant
  const filteredMenuItems = activeRestaurant === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.restaurant === activeRestaurant);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
            alt="Uttara Hotel Dining" 
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
              Exquisite Dining Experience
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Indulge in a culinary journey with our world-class restaurants and bars.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <Section background="white" spacing="md">
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              className={`px-6 py-3 text-sm font-medium rounded-l-md ${
                activeTab === 'restaurants'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('restaurants')}
            >
              Our Restaurants
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium rounded-r-md ${
                activeTab === 'menu'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('menu')}
            >
              Menu Highlights
            </button>
          </div>
        </div>

        {/* Restaurants Tab */}
        {activeTab === 'restaurants' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {restaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}

        {/* Menu Tab */}
        {activeTab === 'menu' && (
          <>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeRestaurant === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveRestaurant('all')}
              >
                All Restaurants
              </button>
              {restaurants.map(restaurant => (
                <button
                  key={restaurant.id}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeRestaurant === restaurant.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveRestaurant(restaurant.id)}
                >
                  {restaurant.name}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMenuItems.map(item => (
                <MenuItemCard key={item.id} item={item} restaurants={restaurants} />
              ))}
            </div>
          </>
        )}
      </Section>

      {/* AI Recommendation Section */}
      <Section background="primary">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">Personalized Dining Recommendations</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Our AI-powered recommendation system suggests dishes based on your preferences and dietary requirements.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-elegant p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Get Personalized Recommendations</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Dietary Preferences
              </label>
              <div className="flex flex-wrap gap-2">
                {['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Nut-Free', 'No Preferences'].map(pref => (
                  <label key={pref} className="inline-flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50" />
                    <span className="ml-2 text-sm">{pref}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Cuisine Preferences
              </label>
              <div className="flex flex-wrap gap-2">
                {['Bengali', 'Indian', 'International', 'European', 'Asian', 'Mediterranean'].map(cuisine => (
                  <label key={cuisine} className="inline-flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50" />
                    <span className="ml-2 text-sm">{cuisine}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Spice Level
              </label>
              <div className="flex items-center space-x-4">
                <input type="range" min="1" max="5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                <span className="text-sm">Medium</span>
              </div>
            </div>
            <Button variant="primary" fullWidth>
              Get Recommendations
            </Button>
          </form>
        </div>
      </Section>

      {/* Reservation CTA */}
      <Section background="gradient" spacing="lg">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Reserve Your Table
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Secure your dining experience at one of our exquisite restaurants.
          </p>
          <Button 
            href="/reservations?type=dining" 
            size="lg"
            variant="accent"
          >
            Make a Reservation
          </Button>
        </div>
      </Section>
    </>
  );
};

// Restaurant Card Component
const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <Card variant="elevated" className="h-full flex flex-col">
      <Card.Image src={restaurant.image} alt={restaurant.name} className="h-64" />
      <Card.Body className="flex-grow">
        <div className="flex justify-between items-start mb-2">
          <Card.Title>{restaurant.name}</Card.Title>
          {restaurant.featured && (
            <span className="bg-accent-500 text-white text-xs px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
        <p className="text-sm text-primary-600 dark:text-primary-400 mb-2">
          {restaurant.cuisine}
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {restaurant.description}
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm">
            <FiClock className="text-gray-500 mr-2" />
            <span>{restaurant.hours}</span>
          </div>
          <div className="flex items-center text-sm">
            <FiMapPin className="text-gray-500 mr-2" />
            <span>{restaurant.location}</span>
          </div>
          <div className="flex items-center text-sm">
            <FiPhone className="text-gray-500 mr-2" />
            <span>{restaurant.phone}</span>
          </div>
        </div>
      </Card.Body>
      <Card.Footer>
        <Button href={`/reservations?restaurant=${restaurant.id}`} fullWidth>
          Reserve a Table
        </Button>
      </Card.Footer>
    </Card>
  );
};

// Menu Item Card Component
const MenuItemCard = ({ item, restaurants }: { item: MenuItem; restaurants: Restaurant[] }) => {
  const restaurant = restaurants.find(r => r.id === item.restaurant);
  
  return (
    <Card variant="elevated" className="h-full flex flex-col">
      <Card.Image src={item.image} alt={item.name} className="h-48" />
      <Card.Body className="flex-grow">
        <div className="flex justify-between items-start mb-2">
          <Card.Title>{item.name}</Card.Title>
          {item.featured && (
            <span className="bg-accent-500 text-white text-xs px-2 py-1 rounded-full">
              Chef's Special
            </span>
          )}
        </div>
        <p className="text-sm text-primary-600 dark:text-primary-400 mb-2">
          {item.category} • {restaurant?.name}
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {item.description}
        </p>
        {item.dietaryInfo && item.dietaryInfo.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {item.dietaryInfo.map(info => (
                <span key={info} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                  {info}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="mt-auto">
          <p className="text-lg font-semibold">${item.price}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DiningPage; 