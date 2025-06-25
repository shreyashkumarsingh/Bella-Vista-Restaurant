
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import About from '../components/About';
import Reservations from '../components/Reservations';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <Reservations />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
