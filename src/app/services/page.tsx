import React from 'react';

const Feature = ({ title, description, image }: { title: string, description: string, image: string }) => {
  return (
    <div className="relative max-w-xs mx-auto bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105 overflow-hidden">
      <div className="relative">
        <img className="w-full h-56 object-cover rounded-t-xl" src={image} alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
          <h5 className="text-2xl font-semibold text-primary mb-2">{title}</h5>
          <p className="text-sm text-secondary">{description}</p>
        </div>
      </div>
      <div className="p-4">
        <button className="w-full py-2 px-4 text-base font-medium text-white bg-primary rounded-lg shadow-sm hover:bg-primary-dark transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};





const FeaturesServices = () => {
  return (
    <section className=" pt-24 pb-16">
      <div className="max-w-screen-xl mx-auto px-6 md:px-0">
        <h2 className="text-4xl font-semibold text-primary">Services</h2>
        <p className="mt-2 text-lg">A wide range of dining options to cater to your every need.</p>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* Card for Dine-In */}
        <Feature title="Dine-In" description="Enjoy a luxurious dining experience in our elegantly designed restaurant, complete with exceptional service and ambiance." image="https://via.placeholder.com/300" />

        {/* Card for Delivery */}
        <Feature title="Take away & Delivery" description="Get your meals delivered to your doorstep with our fast and reliable delivery service." image="https://via.placeholder.com/300" />

        {/* Card for Curbside Pickup */}
        <Feature title="Curbside Pickup" description="Conveniently pick up your order without leaving your car. Simply place your order online and we’ll bring it out to you." image="https://via.placeholder.com/300" />

      </div>
    </div>
    </section>
  );
};

export default FeaturesServices;
