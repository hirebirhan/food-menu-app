"use client";
import React from 'react';
import Link from 'next/link';
import { FaQuoteLeft } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-neutral-cream pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Welcome to Hira Restaurant</h1>
          <p className="text-lg md:text-xl mb-8">Experience the best food in town with a touch of elegance</p>
          <Link href="#order">
            <span className="bg-tertiary text-primary px-6 py-3 rounded-full shadow-md hover:bg-tertiary-dark transition-transform transform hover:scale-105 cursor-pointer">
              Place an Order
            </span>
          </Link>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Featured Foods Menu */}
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

      {/* Call to Action */}
      <section className="bg-primary text-neutral-cream py-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Ready to Order?</h2>
          <Link href="#order">
            <span className="bg-tertiary text-primary px-6 py-3 rounded-full shadow-md hover:bg-tertiary-dark transition-transform transform hover:scale-105 cursor-pointer">
              Place an Order Now
            </span>
          </Link>
        </div>
      </section>

      {/* Customer Feedbacks */}
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

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-secondary">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1543353071-087092ec393a" alt="Gallery 1" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src="https://images.unsplash.com/photo-1523986371872-9d3ba2e2e108" alt="Gallery 2" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" alt="Gallery 3" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" alt="Gallery 4" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src="https://images.unsplash.com/photo-1516685304081-de7947d419d5" alt="Gallery 5" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="Gallery 6" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src="https://images.unsplash.com/photo-1556911073-52527ac43713" alt="Gallery 7" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" alt="Gallery 8" className="w-full h-48 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Recommendations */}
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
    </div>
  );
};

export default LandingPage;
