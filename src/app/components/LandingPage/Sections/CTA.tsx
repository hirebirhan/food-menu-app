"use client";
import React from 'react';
import Link from 'next/link';

export const CTA = () => {
  return (
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
  );
};
