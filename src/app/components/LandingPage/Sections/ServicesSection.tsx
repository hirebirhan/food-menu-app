"use client";
import React from 'react';

export const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-secondary">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-primary">Dine-In</h3>
            <p className="text-gray-700 dark:text-gray-300">Enjoy a luxurious dining experience with our top-notch service and ambiance.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-primary">Takeaway</h3>
            <p className="text-gray-700 dark:text-gray-300">Get your favorite dishes to go with our quick and convenient takeaway service.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-primary">Delivery</h3>
            <p className="text-gray-700 dark:text-gray-300">Have your meal delivered to your doorstep with our efficient delivery service.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
