"use client";
import React from 'react';
import { ServicesSection } from './components/LandingPage/Sections/ServicesSection';
import { HeroSection } from './components/LandingPage/Sections/HeroSection';
import { FeaturedFoods } from './components/LandingPage/Sections/FeaturedFoods';
import { CTA } from './components/LandingPage/Sections/CTA';
import { CustomerFeedbacks } from './components/LandingPage/Sections/CustomerFeedbacks';
import { PhotoGallery } from './components/LandingPage/Sections/PhotoGallery';
import { Recommendations } from './components/LandingPage/Sections/Recommendations';


const LandingPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <HeroSection />
      <ServicesSection />
      <FeaturedFoods />
      <CTA />
      <CustomerFeedbacks />
      <PhotoGallery />
      <Recommendations />
    </div>
  );
};

export default LandingPage;
