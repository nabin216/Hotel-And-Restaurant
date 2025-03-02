import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your API
      console.log(`Subscribed with email: ${email}`);
      setSubscribed(true);
      setEmail('');
      
      // Reset the subscribed state after 3 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              UTTARA
              <span className="text-accent-500"> HOTEL</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Experience luxury and comfort in the heart of the city. Our hotel offers exceptional service, elegant accommodations, and world-class dining.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<FiFacebook />} href="https://facebook.com" label="Facebook" />
              <SocialIcon icon={<FiTwitter />} href="https://twitter.com" label="Twitter" />
              <SocialIcon icon={<FiInstagram />} href="https://instagram.com" label="Instagram" />
              <SocialIcon icon={<FiLinkedin />} href="https://linkedin.com" label="LinkedIn" />
              <SocialIcon icon={<FiYoutube />} href="https://youtube.com" label="YouTube" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/about" text="About Us" />
              <FooterLink href="/accommodations" text="Accommodations" />
              <FooterLink href="/dining" text="Dining" />
              <FooterLink href="/facilities" text="Facilities" />
              <FooterLink href="/gallery" text="Gallery" />
              <FooterLink href="/contact" text="Contact" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-400 space-y-2">
              <p>123 Hotel Street, Uttara</p>
              <p>Dhaka, Bangladesh</p>
              <p>Phone: +880 1234 567890</p>
              <p>Email: info@uttarahotel.com</p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest offers and news.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary-500 hover:text-primary-400 transition-colors"
                aria-label="Subscribe"
              >
                <FiSend size={18} />
              </button>
            </form>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-500 mt-2 text-sm"
              >
                Thank you for subscribing!
              </motion.p>
            )}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Uttara Hotel & Restaurant. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="hover:text-primary-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Social Icon Component
const SocialIcon = ({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
  >
    {icon}
  </a>
);

// Footer Link Component
const FooterLink = ({ href, text }: { href: string, text: string }) => (
  <li>
    <Link
      to={href}
      className="text-gray-400 hover:text-primary-400 transition-colors"
    >
      {text}
    </Link>
  </li>
);

export default Footer; 