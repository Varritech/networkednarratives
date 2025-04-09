import React from 'react';
import Navbar from "../components/navigation/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import HowItWorks from "../components/how-it-works/HowItWorks";
import Services from "../components/services/Services";
import GetStarted from "../components/contact/GetStarted";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Services />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
} 
