"use client";
import React, { useState } from 'react';

const menuCategories = [
  {
    category: "Starters",
    items: [
      {
        id: 1,
        name: "Chevrefrit au miel",
        price: 14,
        description: "Tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        vegan: false,
      },
      {
        id: 2,
        name: "Saumon Gravlax",
        price: 9,
        description: "Tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        vegan: true,
      },
      {
        id: 3,
        name: "Bruschetta",
        price: 8,
        description: "Tomatoes, basil, garlic, olive oil, bread.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        vegan: true,
      },
      {
        id: 4,
        name: "Stuffed Mushrooms",
        price: 10,
        description: "Mushrooms, cheese, breadcrumbs, garlic.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        vegan: false,
      },
      {
        id: 5,
        name: "Caprese Salad",
        price: 12,
        description: "Tomatoes, mozzarella, basil, olive oil.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        vegan: true,
      },
      {
        id: 6,
        name: "Garlic Bread",
        price: 7,
        description: "Bread, garlic, butter, parsley.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        vegan: false,
      },
    ],
  },
  {
    category: "Main Dishes",
    items: [
      {
        id: 7,
        name: "Carpaccio de bœuf",
        price: 14,
        description: "Tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        vegan: false,
      },
      {
        id: 8,
        name: "Stracciatella",
        price: 11,
        description: "Tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        vegan: false,
      },
      {
        id: 9,
        name: "Spaghetti Carbonara",
        price: 13,
        description: "Pasta, eggs, cheese, pancetta, pepper.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        vegan: false,
      },
      {
        id: 10,
        name: "Grilled Salmon",
        price: 18,
        description: "Salmon, lemon, dill, butter.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        vegan: false,
      },
      {
        id: 11,
        name: "Eggplant Parmesan",
        price: 15,
        description: "Eggplant, cheese, tomato sauce, breadcrumbs.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        vegan: true,
      },
      {
        id: 12,
        name: "Chicken Alfredo",
        price: 16,
        description: "Chicken, pasta, cream, cheese, garlic.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        vegan: false,
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        id: 13,
        name: "Tiramisu",
        price: 7,
        description: "Mascarpone cheese, coffee, ladyfingers, cocoa powder.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        vegan: false,
      },
      {
        id: 14,
        name: "Panna Cotta",
        price: 8,
        description: "Cream, sugar, vanilla, gelatin.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        vegan: false,
      },
      {
        id: 15,
        name: "Cheesecake",
        price: 9,
        description: "Cream cheese, biscuits, sugar, butter.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        vegan: false,
      },
      {
        id: 16,
        name: "Chocolate Fondant",
        price: 10,
        description: "Chocolate, butter, sugar, eggs, flour.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        vegan: false,
      },
      {
        id: 17,
        name: "Fruit Salad",
        price: 6,
        description: "Mixed fruits, honey, mint.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        vegan: true,
      },
      {
        id: 18,
        name: "Banoffee Pie",
        price: 9,
        description: "Bananas, cream, toffee, biscuits.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        vegan: false,
      },
    ],
  },
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? menuCategories.flatMap(category => category.items)
    : menuCategories.find(category => category.category === activeCategory)?.items || [];

  return (
    <section className="py-16 max-w-screen-xl mx-auto mt-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            className={`px-4 py-2 font-semibold ${activeCategory === 'All' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'} rounded`}
            onClick={() => setActiveCategory('All')}
          >
            All
          </button>
          {menuCategories.map((category) => (
            <button
              key={category.category}
              className={`px-4 py-2 font-semibold ${activeCategory === category.category ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'} rounded`}
              onClick={() => setActiveCategory(category.category)}
            >
              {category.category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <div className="flex justify-between items-center mb-2  p-2 rounded">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <span className="bg-secondary text-white text-lg font-semibold px-2 py-1 rounded">${item.price}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>
              {/* {item.vegan && <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">Vegan</span>} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
