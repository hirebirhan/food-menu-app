"use client";
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

export const CustomerFeedbacks = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-secondary">Customer Feedbacks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <FaQuoteLeft className="text-primary text-3xl mb-4" />
            <p className="text-gray-700 dark:text-gray-300 mb-4">"The food was absolutely amazing! The best dining experience I've ever had."</p>
            <p className="font-bold text-tertiary">John Doe</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <FaQuoteLeft className="text-primary text-3xl mb-4" />
            <p className="text-gray-700 dark:text-gray-300 mb-4">"Excellent service and the ambiance was perfect for a romantic dinner."</p>
            <p className="font-bold text-tertiary">Jane Smith</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <FaQuoteLeft className="text-primary text-3xl mb-4" />
            <p className="text-gray-700 dark:text-gray-300 mb-4">"I loved the variety on the menu. Everything was fresh and delicious."</p>
            <p className="font-bold text-tertiary">Alice Johnson</p>
          </div>
        </div>
      </div>
    </section>
  );
};
