import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiStar, FiCoffee, FiWifi, FiMapPin } from 'react-icons/fi';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const HomePage = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Uttara Hotel Luxury Suite" 
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
              Experience Luxury & Comfort
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover the perfect blend of elegance, comfort, and exceptional service at Uttara Hotel & Restaurant.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/reservations" size="lg">
                Book Your Stay
              </Button>
              <Button variant="outline" size="lg" href="/dining">
                Explore Dining
              </Button>
            </div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={scrollToFeatures}
          >
            <div className="flex flex-col items-center">
              <span className="mb-2">Scroll Down</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <div ref={featuresRef}>
        <Section background="white">
          <Section.Header 
            title="Why Choose Uttara Hotel" 
            subtitle="Experience the perfect blend of luxury, comfort, and exceptional service that sets us apart."
            centered
          />
          <Section.Grid columns={3}>
            <FeatureCard 
              icon={<FiStar />}
              title="Luxury Accommodations"
              description="Our elegantly designed rooms and suites offer the perfect blend of comfort and sophistication for an unforgettable stay."
            />
            <FeatureCard 
              icon={<FiCoffee />}
              title="Fine Dining Experience"
              description="Indulge in a culinary journey with our world-class chefs creating exquisite dishes using the finest local and international ingredients."
            />
            <FeatureCard 
              icon={<FiWifi />}
              title="Modern Amenities"
              description="Enjoy state-of-the-art facilities including high-speed WiFi, fitness center, spa, and swimming pool throughout your stay."
            />
          </Section.Grid>
        </Section>
      </div>

      {/* Accommodations Preview */}
      <Section background="light">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Luxurious Accommodations</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our rooms and suites are designed with your comfort in mind, featuring elegant décor, premium bedding, and modern amenities to ensure a restful and rejuvenating stay.
            </p>
            <ul className="space-y-3 mb-8">
              {['Spacious rooms with stunning views', 'Premium bedding and linens', 'Modern bathrooms with luxury amenities', 'Smart room controls', 'Complimentary high-speed WiFi'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <FiCheck className="text-primary-600 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/accommodations">
              Explore Rooms & Suites <FiArrowRight className="ml-2" />
            </Button>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Luxury Suite" 
              className="rounded-lg object-cover h-full w-full"
            />
            <img 
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Deluxe Room" 
              className="rounded-lg object-cover h-full w-full"
            />
          </div>
        </div>
      </Section>

      {/* Dining Experience */}
      <Section background="white">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Fine Dining" 
              className="rounded-lg object-cover h-full w-full"
            />
            <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Gourmet Food" 
              className="rounded-lg object-cover h-full w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Exquisite Dining Experience</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our restaurants offer a diverse culinary journey, from authentic local flavors to international gourmet cuisine, all prepared by our talented chefs using the finest ingredients.
            </p>
            <ul className="space-y-3 mb-8">
              {['Multiple dining venues', 'Farm-to-table ingredients', 'Extensive wine collection', 'Themed dining nights', 'Private dining options'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <FiCheck className="text-primary-600 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/dining">
              Explore Dining Options <FiArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </Section>

      {/* AI-Powered Features */}
      <Section background="primary">
        <Section.Header 
          title="AI-Enhanced Experience" 
          subtitle="Leveraging cutting-edge artificial intelligence to personalize and elevate your stay with us."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card variant="elevated">
            <Card.Body>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600 dark:text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <Card.Title>Personalized Recommendations</Card.Title>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Our AI system learns your preferences to suggest personalized dining options, activities, and amenities tailored just for you.
                </p>
              </div>
            </Card.Body>
          </Card>

          <Card variant="elevated">
            <Card.Body>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600 dark:text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <Card.Title>Smart Concierge Chatbot</Card.Title>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Our 24/7 AI chatbot assists with room service, reservations, local recommendations, and answers any questions about your stay.
                </p>
              </div>
            </Card.Body>
          </Card>

          <Card variant="elevated">
            <Card.Body>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600 dark:text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <Card.Title>Smart Room Controls</Card.Title>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Control lighting, temperature, entertainment, and more through voice commands or our mobile app for a seamless stay.
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="light">
        <Section.Header 
          title="What Our Guests Say" 
          subtitle="Hear from guests who have experienced our hospitality and service firsthand."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="The attention to detail and personalized service at Uttara Hotel exceeded all my expectations. The AI recommendations made our dining experience truly memorable."
            author="Sarah Johnson"
            role="Business Traveler"
            image="https://randomuser.me/api/portraits/women/44.jpg"
            rating={5}
          />
          <TestimonialCard 
            quote="From the moment we arrived, we were treated like royalty. The rooms are stunning, the food is exceptional, and the staff goes above and beyond."
            author="Michael Chen"
            role="Family Vacation"
            image="https://randomuser.me/api/portraits/men/32.jpg"
            rating={5}
          />
          <TestimonialCard 
            quote="The smart room controls and AI concierge made our stay so convenient. The hotel combines luxury with cutting-edge technology perfectly."
            author="Emily Rodriguez"
            role="Luxury Traveler"
            image="https://randomuser.me/api/portraits/women/68.jpg"
            rating={5}
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" spacing="lg">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Experience Luxury Like Never Before
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your stay today and discover why Uttara Hotel & Restaurant is the preferred choice for discerning travelers.
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

      {/* Location Section */}
      <Section background="white">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Prime Location</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Situated in the heart of Uttara, our hotel offers easy access to major attractions, business centers, and transportation hubs, making it the perfect base for both business and leisure travelers.
            </p>
            <div className="flex items-center mb-6">
              <FiMapPin className="text-primary-600 mr-2 text-xl" />
              <address className="not-italic">
                123 Hotel Street, Uttara, Dhaka, Bangladesh
              </address>
            </div>
            <Button href="/contact">
              Get Directions <FiArrowRight className="ml-2" />
            </Button>
          </div>
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-elegant">
              {/* In a real app, you would embed a Google Map here */}
              <img 
                src="https://maps.googleapis.com/maps/api/staticmap?center=Uttara,Dhaka,Bangladesh&zoom=14&size=600x400&markers=color:red%7CUttara,Dhaka,Bangladesh&key=YOUR_API_KEY" 
                alt="Map location of Uttara Hotel" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <Card variant="elevated">
    <Card.Body>
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-4">
          <div className="text-2xl text-primary-600 dark:text-primary-300">
            {icon}
          </div>
        </div>
        <Card.Title>{title}</Card.Title>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </Card.Body>
  </Card>
);

// Testimonial Card Component
const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  image, 
  rating 
}: { 
  quote: string; 
  author: string; 
  role: string; 
  image: string; 
  rating: number;
}) => (
  <Card variant="elevated">
    <Card.Body>
      <div className="flex flex-col h-full">
        <div className="mb-4 flex">
          {[...Array(rating)].map((_, i) => (
            <FiStar key={i} className="text-accent-500 fill-current" />
          ))}
        </div>
        <p className="italic text-gray-600 dark:text-gray-400 mb-6 flex-grow">"{quote}"</p>
        <div className="flex items-center">
          <img src={image} alt={author} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
          </div>
        </div>
      </div>
    </Card.Body>
  </Card>
);

export default HomePage; 