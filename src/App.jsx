import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import Clarity from './components/Clarity.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Awards from './sections/Awards.jsx';
import Skills from './sections/Skills.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Awards />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
      <Clarity />
    </>
  );
}
