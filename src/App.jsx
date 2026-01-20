import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experirence';
import Hero from './pages/Hero';
import Navbar from './pages/Navbar';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Preloader from './components/Preloader';

const App = () => {
  // 1. Loading state controls the visibility of the Preloader
  const [isLoading, setIsLoading] = useState(true);
  
  // 2. Asset state tracks if the browser has actually finished downloading (images/fonts)
  const [isAssetsLoaded, setIsAssetsLoaded] = useState(false);

  // Lock scroll during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  // Check for asset loading
  useEffect(() => {
    const handleLoad = () => setIsAssetsLoaded(true);

    // If the page is already loaded (cached or fast connection), set true immediately
    if (document.readyState === 'complete') {
      setIsAssetsLoaded(true);
    } else {
      // Otherwise, wait for the native 'load' event
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <>
      <AnimatePresence mode='wait'>
        {isLoading && (
          <Preloader 
            // We pass the asset status down to the Preloader
            assetsLoaded={isAssetsLoaded}
            // Preloader calls this ONLY when Animation AND Assets are ready
            onComplete={() => setIsLoading(false)} 
          />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-screen"
        >
          {/* Cursor is typically global, better placed here */}
          <Navbar />
          
          <main className="transition-all duration-300">
            <Hero />
            <About />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </main>
        </motion.div>
      )}
    </>
  );
};

export default App;