import { useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import CustomCursor from './components/CustomCursor';

import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Hero from './pages/Hero';
import Navbar from './pages/Navbar';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Preloader from './components/Preloader';

// Console Easter Egg
const ConsoleEasterEgg = () => {
  useEffect(() => {
    console.log(
      '%c👋 Hey there, curious developer!',
      'color: #3b82f6; font-size: 16px; font-weight: bold;'
    );
    console.log(
      '%cLooking for the source code? Check out: github.com/rsayyed591',
      'color: #64748b; font-size: 12px;'
    );
    console.log(
      '%c🎨 Theme: Soft Cloud / Midnight Navy\n🔤 Fonts: Satoshi + Geist Mono',
      'color: #10b981; font-size: 12px;'
    );
  }, []);
  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAssetsLoaded, setIsAssetsLoaded] = useState(false);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isLoading]);

  useEffect(() => {
    const handleLoad = () => setIsAssetsLoaded(true);
    
    if (document.readyState === 'complete') {
      setIsAssetsLoaded(true);
    } else {
      window.addEventListener('load', handleLoad);
    }
    
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  // Simple native scroll to section
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <ThemeProvider>
      <ConsoleEasterEgg />
      
      {/* Custom Cursor - Desktop Only */}
      {/* <CustomCursor /> */}

      {/* Preloader */}
      {isLoading && (
        <Preloader 
          assetsLoaded={isAssetsLoaded}
          onComplete={() => setIsLoading(false)} 
        />
      )}

      {!isLoading && (
        <div className="relative min-h-screen bg-theme-primary text-theme-primary transition-colors duration-300">
          {/* Navbar */}
          <Navbar onNavigate={scrollToSection} />
          
          {/* Main Content */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </main>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;