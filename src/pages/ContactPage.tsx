import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheck } from 'react-icons/fi';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { useToast } from '../context/ToastContext';

const ContactPage = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill in all required fields.');
      showToast('error', 'Please fill in all required fields.');
      return;
    }
    
    // In a real app, you would send this data to your API
    console.log('Form submitted:', formData);
    
    // Show success message
    setFormSubmitted(true);
    setFormError('');
    showToast('success', 'Thank you for your message! We\'ll get back to you shortly.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Uttara Hotel Contact" 
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              We're here to assist you with any inquiries or special requests.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <ContactInfoCard 
            icon={<FiMapPin />}
            title="Address"
            details={[
              '123 Hotel Street, Uttara',
              'Dhaka, Bangladesh'
            ]}
          />
          <ContactInfoCard 
            icon={<FiPhone />}
            title="Phone"
            details={[
              '+880 1234 567890',
              '+880 1234 567891'
            ]}
          />
          <ContactInfoCard 
            icon={<FiMail />}
            title="Email"
            details={[
              'info@uttarahotel.com',
              'reservations@uttarahotel.com'
            ]}
          />
          <ContactInfoCard 
            icon={<FiClock />}
            title="Hours"
            details={[
              'Front Desk: 24/7',
              'Reservations: 8:00 AM - 10:00 PM'
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-serif font-bold mb-6">Send Us a Message</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Have questions or special requests? Fill out the form below and our team will get back to you as soon as possible.
            </p>
            
            {formSubmitted && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-md mb-6 flex items-center"
              >
                <FiCheck className="mr-2" />
                <span>Thank you for your message! We'll get back to you shortly.</span>
              </motion.div>
            )}
            
            {formError && (
              <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 p-4 rounded-md mb-6">
                {formError}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input"
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Reservation Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="special-request">Special Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="input"
                  required
                ></textarea>
              </div>
              
              <div>
                <Button type="submit" variant="primary">
                  <FiSend className="mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          
          {/* Map */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-serif font-bold mb-6">Our Location</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Conveniently located in the heart of Uttara, our hotel is easily accessible from major transportation hubs and attractions.
            </p>
            <div className="rounded-lg overflow-hidden shadow-elegant h-[400px]">
              {/* In a real app, you would embed a Google Map here */}
              <img 
                src="https://maps.googleapis.com/maps/api/staticmap?center=Uttara,Dhaka,Bangladesh&zoom=14&size=600x400&markers=color:red%7CUttara,Dhaka,Bangladesh&key=YOUR_API_KEY" 
                alt="Map location of Uttara Hotel" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="light">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Find quick answers to common questions about our hotel and services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <FaqItem 
              question="What are the check-in and check-out times?"
              answer="Check-in time is 2:00 PM and check-out time is 12:00 PM. Early check-in and late check-out can be arranged based on availability for an additional fee."
            />
            <FaqItem 
              question="Is airport transfer available?"
              answer="Yes, we offer airport transfer services for our guests. Please contact our reservations team at least 24 hours in advance to arrange your transfer."
            />
            <FaqItem 
              question="Do you have parking facilities?"
              answer="Yes, we offer complimentary parking for hotel guests. Valet parking is also available for an additional charge."
            />
            <FaqItem 
              question="Is Wi-Fi available in the hotel?"
              answer="Yes, complimentary high-speed Wi-Fi is available throughout the hotel, including all guest rooms and public areas."
            />
            <FaqItem 
              question="Do you accommodate special dietary requirements?"
              answer="Yes, our restaurants can accommodate various dietary requirements including vegetarian, vegan, gluten-free, and allergies. Please inform us of your needs when making a reservation."
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" spacing="lg">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Experience Uttara Hotel?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your stay today and discover the perfect blend of luxury, comfort, and exceptional service.
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

// Contact Info Card Component
const ContactInfoCard = ({ icon, title, details }: { icon: React.ReactNode; title: string; details: string[] }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
      <div className="text-xl text-primary-600 dark:text-primary-300">
        {icon}
      </div>
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="text-gray-600 dark:text-gray-400">
      {details.map((detail, index) => (
        <p key={index}>{detail}</p>
      ))}
    </div>
  </div>
);

// FAQ Item Component
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 p-4 bg-gray-50 dark:bg-gray-700' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 dark:text-gray-400">{answer}</p>
      </div>
    </div>
  );
};

export default ContactPage; 