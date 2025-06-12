import React from 'react';

import Header from '../../components/authen-template/Header';
import Hero from '../../components/authen-template/Hero';
import AboutSection from '../../components/authen-template/AboutSection';
import EventsSection from '../../components/authen-template/EventsSection';
import TestimonialsSection from '../../components/authen-template/TestimonialsSection';
import FAQSection from '../../components/authen-template/FAQSection';
import BlogSection from '../../components/authen-template/BlogSection';
import Footer from '../../components/authen-template/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <BlogSection/>
      <EventsSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default HomePage;
