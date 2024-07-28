"use client";
import React from 'react';
import Image from 'next/image';

export const HeroSection = () => {
  const heroImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLq3cZIicrL3yJ6_SS1C4wtJ2BQgXIUyVkZQ&s'
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-bg-[#0f4350] via-bg-[#eda324] to-bg-secondary">
    <div className="absolute inset-0 z-0">
      <Image
        src={heroImage}
        alt="Ethiopian Dish"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
    <div className="container mx-auto relative z-20 flex flex-col items-center justify-center h-full text-center px-4 md:px-0">
      <div className="text-left max-w-2xl animate-fade-in">
        <span className="text-yellow-300 text-sm uppercase tracking-widest mb-2 inline-block">Hello, Food Lover!</span>
        <h1 className="text-white text-6xl font-extrabold mb-4 drop-shadow-md">Welcome to Hira Restaurant</h1>
        <p className="text-white text-lg mb-8 drop-shadow-md">Experience the best of Ethiopian cuisine right at your doorstep.</p>
        <div className="flex space-x-4">
          <a href="#order" className="bg-yellow-500 text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:bg-yellow-600 transition duration-300">Order Us</a>
          <a href="#menu" className="border border-white text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:bg-white hover:text-black transition duration-300">View Menu</a>
        </div>
      </div>
      <div className="absolute bottom-8 flex space-x-2">
        <span className="h-3 w-3 bg-white rounded-full"></span>
        <span className="h-3 w-3 bg-yellow-400 rounded-full"></span>
        <span className="h-3 w-3 bg-white rounded-full"></span>
      </div>
    </div>
  </section>
  );
};
