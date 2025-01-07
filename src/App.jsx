import About from './pages/About'
import Education from './pages/Education'
import Experience from './pages/Experirence'
import Hero from './pages/Hero'
import Navbar from './pages/Navbar'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      {/* <Projects /> */}
    </>
  )
}

export default App
