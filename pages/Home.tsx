import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Experience from '../components/Sections/Experience';
import Projects from '../components/Sections/Projects';
import Footer from '../components/Layout/Footer';
const Home = () => {
  return <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>;
};
export default Home;