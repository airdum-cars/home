import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <main>
        <ProductGrid />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
