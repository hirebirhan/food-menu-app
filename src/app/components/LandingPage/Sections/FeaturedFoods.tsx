"use client";
import React from 'react';

export const FeaturedFoods = () => {
  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-secondary">Featured Foods</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" alt="Delicious Pasta" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-primary">Delicious Pasta</h3>
            <p className="text-gray-700 dark:text-gray-300">A mouth-watering pasta dish with a blend of rich flavors.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <img src="https://images.unsplash.com/photo-1604152135912-04a152f5c367" alt="Grilled Steak" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-primary">Grilled Steak</h3>
            <p className="text-gray-700 dark:text-gray-300">A perfectly grilled steak served with fresh vegetables.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <img src="https://images.unsplash.com/photo-1562967914-da57db0907ac" alt="Sushi Platter" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-primary">Sushi Platter</h3>
            <p className="text-gray-700 dark:text-gray-300">An exquisite sushi platter with a variety of fresh sushi.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
