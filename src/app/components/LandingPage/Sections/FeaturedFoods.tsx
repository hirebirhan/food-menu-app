// src/components/FeaturedFoods.tsx
'use client';

import { useEffect, useState } from 'react';

interface MenuItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const FeaturedFoods = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://localhost:44358/featuredItems');
      const data = await response.json();
      setMenuItems(data);
    };

    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentPage((prevPage) => 
      prevPage + 1 >= Math.ceil(menuItems.length / itemsPerPage) ? 0 : prevPage + 1
    );
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => 
      prevPage - 1 < 0 ? Math.ceil(menuItems.length / itemsPerPage) - 1 : prevPage - 1
    );
  };

  const startIndex = currentPage * itemsPerPage;
  const displayedItems = menuItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-secondary">Today's Special</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedItems.map(item => (
            <div key={item.id} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-primary">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <button onClick={handlePrev} className="px-4 py-2 mx-2 bg-primary text-white rounded-lg">Prev</button>
          <button onClick={handleNext} className="px-4 py-2 mx-2 bg-primary text-white rounded-lg">Next</button>
        </div>
      </div>
    </section>
  );
};
