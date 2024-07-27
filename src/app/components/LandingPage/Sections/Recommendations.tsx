"use client";
import React from 'react';

export const Recommendations = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-secondary">Our Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <img src="https://images.unsplash.com/photo-1571091718768-9bcbf1c798af" alt="Recommendation 1" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-primary">Chef's Special</h3>
            <p className="text-gray-700 dark:text-gray-300">A special dish prepared by our chef with unique flavors.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <img src="https://images.unsplash.com/photo-1576618148400-ecfcee6ee586" alt="Recommendation 2" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-primary">Signature Dessert</h3>
            <p className="text-gray-700 dark:text-gray-300">Our signature dessert that is a favorite among our customers.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b" alt="Recommendation 3" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-primary">House Wine</h3>
            <p className="text-gray-700 dark:text-gray-300">A selection of our finest house wines to complement your meal.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
