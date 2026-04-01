import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import SelectedWork from './sections/SelectedWork';
import About from './sections/About';
import Discovery from './sections/Discovery';
import Motivation from './sections/Motivation';
import Services from './sections/Services';
import Experience from './sections/Experience';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ImageZoom from './sections/ImageZoom';
import Preloader from './components/Preloader';

const ScrollBanner = ({ src }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1.1]); // 1.3 to 1.1 for subtle zoom

  return (
    <div ref={containerRef} className="w-full h-[60vh] md:h-screen overflow-hidden relative">
      <motion.div style={{ scale }} className="w-full h-full">
        <img 
          src={src} 
          alt="End Banner" 
          className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-700" 
        />
      </motion.div>
    </div>
  );
};

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
              <ImageZoom />
              <SelectedWork />
              <About />
              <Discovery />
              <Motivation />
              <Services />
              <Experience />
              <TechStack />

              {/* Full Size Image Banner (Outside Stack) */}
              <ScrollBanner src="/assets/work6.png" />
              
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;