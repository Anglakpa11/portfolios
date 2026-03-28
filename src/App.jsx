import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import SelectedWork from './sections/SelectedWork';
import About from './sections/About';
import Discovery from './sections/Discovery';
import Motivation from './sections/Motivation';
import ServicesExperience from './sections/ServicesExperience';
import TechStack from './sections/TechStack';
import Footer from './sections/Footer';
import ImageZoom from './sections/ImageZoom';

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ImageZoom />
        <SelectedWork />
        <About />
        <Discovery />
        <Motivation />
        <ServicesExperience />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}

export default App;