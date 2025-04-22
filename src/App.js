import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import SaleSection from './components/Sales';
import FAQComponent from './components/FAQComponent';
import Footer from './components/Footer';
import TeamSection from './components/TeamSection';
function App() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <SaleSection/>
      <FAQComponent/>
      <TeamSection/>
      <Footer/>
    </div>
  );
}

export default App;
