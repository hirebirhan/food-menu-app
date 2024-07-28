"use client";
import React from 'react';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section
    className="bg-gradient-to-r from-primary to-primary-light text-neutral-cream pt-24 pb-16"
    style={{
      backgroundImage: 'url(/images/hira-bg-2.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Welcome to Hira Restaurant</h1>
      <p className="text-lg md:text-xl mb-8">Experience the best food in town with a touch of elegance</p>
      <Link href="/menu">
        <span className="bg-tertiary text-primary px-6 py-3 rounded-full shadow-md hover:bg-tertiary-dark transition-transform transform hover:scale-105 cursor-pointer">
          Order Now
        </span>
      </Link>
    </div>
  </section>
  );
};
