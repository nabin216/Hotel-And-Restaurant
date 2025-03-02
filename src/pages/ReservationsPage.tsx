import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiUsers, FiHome, FiCheck, FiInfo } from 'react-icons/fi';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { useToast } from '../context/ToastContext';
import useFormValidation from '../hooks/useFormValidation';

// Room type options
const roomTypes = [
  { id: 'standard', name: 'Standard Room', price: 120 },
  { id: 'deluxe', name: 'Deluxe Room', price: 180 },
  { id: 'suite', name: 'Executive Suite', price: 250 },
  { id: 'family', name: 'Family Room', price: 220 },
  { id: 'presidential', name: 'Presidential Suite', price: 450 },
];

const ReservationsPage = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    roomType: '',
    adults: '2',
    children: '0',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  // Calculate minimum dates for check-in and check-out
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const minCheckInDate = today.toISOString().split('T')[0];
  const minCheckOutDate = tomorrow.toISOString().split('T')[0];

  // Form validation
  const validationRules = {
    firstName: { required: true },
    lastName: { required: true },
    email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    checkIn: { required: true },
    checkOut: { required: true },
    roomType: { required: true },
  };

  const { errors, validateForm, validateField } = useFormValidation(validationRules);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm(formData)) {
      showToast('error', 'Please fill in all required fields correctly.');
      return;
    }
    
    // In a real app, you would send this data to your API
    console.log('Reservation submitted:', formData);
    
    // Show success message
    showToast('success', 'Your reservation request has been submitted! We\'ll contact you shortly to confirm.');
    
    // Reset form
    setFormData({
      checkIn: '',
      checkOut: '',
      roomType: '',
      adults: '2',
      children: '0',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      specialRequests: '',
    });
  };

  // Find selected room price
  const selectedRoom = roomTypes.find(room => room.id === formData.roomType);
  const roomPrice = selectedRoom ? selectedRoom.price : 0;

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Uttara Hotel Reservations" 
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
              Book Your Stay
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience luxury and comfort at Uttara Hotel
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Make a Reservation</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Fill out the form below to request a reservation at Uttara Hotel. Our team will contact you to confirm availability.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-elegant">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Stay Details */}
              <div>
                <h3 className="text-xl font-serif font-bold mb-4 flex items-center">
                  <FiCalendar className="mr-2" /> Stay Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Check-in Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      min={minCheckInDate}
                      value={formData.checkIn}
                      onChange={handleChange}
                      className={`input ${errors.checkIn ? 'input-error' : ''}`}
                      required
                    />
                    {errors.checkIn && <p className="error-message">{errors.checkIn}</p>}
                  </div>
                  <div>
                    <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Check-out Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      min={formData.checkIn || minCheckOutDate}
                      value={formData.checkOut}
                      onChange={handleChange}
                      className={`input ${errors.checkOut ? 'input-error' : ''}`}
                      required
                    />
                    {errors.checkOut && <p className="error-message">{errors.checkOut}</p>}
                  </div>
                </div>
              </div>

              {/* Room & Guests */}
              <div>
                <h3 className="text-xl font-serif font-bold mb-4 flex items-center">
                  <FiHome className="mr-2" /> Room & Guests
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Room Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="roomType"
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      className={`input ${errors.roomType ? 'input-error' : ''}`}
                      required
                    >
                      <option value="">Select a room type</option>
                      {roomTypes.map(room => (
                        <option key={room.id} value={room.id}>
                          {room.name} - ${room.price}/night
                        </option>
                      ))}
                    </select>
                    {errors.roomType && <p className="error-message">{errors.roomType}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="adults" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Adults
                      </label>
                      <select
                        id="adults"
                        name="adults"
                        value={formData.adults}
                        onChange={handleChange}
                        className="input"
                      >
                        {[1, 2, 3, 4, 5].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="children" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Children
                      </label>
                      <select
                        id="children"
                        name="children"
                        value={formData.children}
                        onChange={handleChange}
                        className="input"
                      >
                        {[0, 1, 2, 3, 4].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guest Information */}
              <div>
                <h3 className="text-xl font-serif font-bold mb-4 flex items-center">
                  <FiUsers className="mr-2" /> Guest Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`input ${errors.firstName ? 'input-error' : ''}`}
                      required
                    />
                    {errors.firstName && <p className="error-message">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`input ${errors.lastName ? 'input-error' : ''}`}
                      required
                    />
                    {errors.lastName && <p className="error-message">{errors.lastName}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
                      className={`input ${errors.email ? 'input-error' : ''}`}
                      required
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number
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
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Special Requests
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows={4}
                  value={formData.specialRequests}
                  onChange={handleChange}
                  className="input"
                  placeholder="Let us know if you have any special requests or requirements"
                ></textarea>
              </div>

              {/* Price Summary */}
              {roomPrice > 0 && (
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
                  <h3 className="text-lg font-serif font-bold mb-2">Price Summary</h3>
                  <div className="flex justify-between mb-2">
                    <span>Room Rate:</span>
                    <span>${roomPrice} per night</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t border-gray-300 dark:border-gray-600 pt-2 mt-2">
                    <span>Total:</span>
                    <span>To be calculated</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    <FiInfo className="inline mr-1" /> Final price will be confirmed upon reservation confirmation.
                  </p>
                </div>
              )}

              {/* Terms and Conditions */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-medium text-gray-700 dark:text-gray-300">
                    I agree to the <a href="#" className="text-primary-600 hover:underline">terms and conditions</a>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <Button type="submit" variant="primary" size="lg">
                  <FiCheck className="mr-2" />
                  Request Reservation
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Section>

      {/* Policies Section */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Reservation Policies</h2>
          
          <div className="space-y-6">
            <PolicyItem 
              title="Check-in & Check-out"
              description="Check-in time is 2:00 PM and check-out time is 12:00 PM. Early check-in and late check-out can be arranged based on availability for an additional fee."
            />
            <PolicyItem 
              title="Cancellation Policy"
              description="Free cancellation up to 48 hours before check-in. Cancellations made less than 48 hours before check-in are subject to a charge equivalent to one night's stay."
            />
            <PolicyItem 
              title="Payment"
              description="A valid credit card is required to secure your reservation. Payment will be processed upon check-in or check-out based on your preference."
            />
            <PolicyItem 
              title="Children & Extra Beds"
              description="Children under 12 years stay free when using existing beds. Extra beds are available for an additional charge of $30 per night."
            />
            <PolicyItem 
              title="Pets"
              description="We welcome pets in designated pet-friendly rooms for an additional fee of $50 per stay. Please inform us in advance if you plan to bring a pet."
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" spacing="lg">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Need Help with Your Reservation?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our dedicated reservations team is available to assist you with any questions or special requests.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
            <Button href="tel:+8801234567890" variant="outline" size="lg">
              Call Reservations
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

// Policy Item Component
const PolicyItem = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
      <h3 className="text-xl font-serif font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default ReservationsPage;