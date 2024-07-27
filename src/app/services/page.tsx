import React from 'react';


const Feature = ({ title, description, image }:{title:string, description:string,image:string }) => {
  return (
    <div className="max-w-sm mx-auto bg-foreground border hover:shadow-lg border-gray-200 rounded-lg shadow-sm">
      <div className="relative">
        <img className="rounded-t-lg w-full h-56 object-cover" src={image} alt={title} />
        <div className="absolute inset-0 bg-black bg-opacity-25 rounded-t-lg"></div>
      </div>
      <div className="p-6 text-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary">{title}</h5>
        <p className="mb-3 font-normal">{description}</p>
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
