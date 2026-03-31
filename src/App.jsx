import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import SelectedWork from './sections/SelectedWork';
import About from './sections/About';
import Discovery from './sections/Discovery';
import Motivation from './sections/Motivation';
import Services from './sections/Services';
import Experience from './sections/Experience';
import TechStack from './sections/TechStack';
import Footer from './sections/Footer';
import ImageZoom from './sections/ImageZoom';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-background text-[#FFFFFF] min-h-screen font-sans selection:bg-[#6C3BFF] selection:text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }} 
          >
            <Navbar />
            <main>
              <Hero />
              <SelectedWork />
              <About />
              <Discovery />
              <Motivation />
              <Services />
              <ImageZoom />
              <Experience />
              <TechStack />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;