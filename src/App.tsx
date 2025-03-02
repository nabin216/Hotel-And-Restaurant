import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import PageTransition from './components/ui/PageTransition';
import ScrollToTop from './components/utils/ScrollToTop';
import HomePage from './pages/HomePage';
import AccommodationsPage from './pages/AccommodationsPage';
import DiningPage from './pages/DiningPage';
import FacilitiesPage from './pages/FacilitiesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import ReservationsPage from './pages/ReservationsPage';
import NotFoundPage from './pages/NotFoundPage';

// AnimatePresence requires the location from useLocation
// We need to wrap the Routes in a separate component
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <HomePage />
          </PageTransition>
        } />
        <Route path="/accommodations" element={
          <PageTransition>
            <AccommodationsPage />
          </PageTransition>
        } />
        <Route path="/dining" element={
          <PageTransition>
            <DiningPage />
          </PageTransition>
        } />
        <Route path="/facilities" element={
          <PageTransition>
            <FacilitiesPage />
          </PageTransition>
        } />
        <Route path="/gallery" element={
          <PageTransition>
            <GalleryPage />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <ContactPage />
          </PageTransition>
        } />
        <Route path="/reservations" element={
          <PageTransition>
            <ReservationsPage />
          </PageTransition>
        } />
        <Route path="*" element={
          <PageTransition>
            <NotFoundPage />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;
