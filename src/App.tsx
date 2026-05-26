import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
// import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
  return (
    <div className="page-shell">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(201,106,47,0.12),transparent_45%)]" />
      <div className="ambient-glow pointer-events-none absolute left-[-6rem] top-24 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
      <div className="ambient-drift pointer-events-none absolute right-[-4rem] top-[34rem] h-56 w-56 rounded-full bg-forest/10 blur-3xl" />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
