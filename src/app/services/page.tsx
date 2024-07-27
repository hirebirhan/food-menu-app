import Head from 'next/head';

export default function Services() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Our Services | Gourmet Haven</title>
      </Head>

      {/* Introduction Section */}
      <section className="text-center my-12">
        <h1 className="text-5xl font-bold text-gray-800">Our Services</h1>
        <p className="mt-4 text-lg text-gray-600">Discover the exceptional services offered at Gourmet Haven, where culinary excellence meets unparalleled hospitality.</p>
      </section>

{/* Dining Options */}
<section className="my-12">
  <h2 className="text-4xl font-semibold text-gray-800 text-center">Dining Options</h2>
  <p className="mt-2 text-lg text-gray-600 text-center">Experience our diverse dining options designed to cater to your every need. Whether you prefer to dine in, take away, or have your meal delivered, we have something for everyone.</p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
    {/* Card for Dine-In */}
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
      <img className="rounded-t-lg" src="https://via.placeholder.com/400" alt="Dine-In" />
      <div className="p-6">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Dine-In</h5>
        <p className="mb-3 font-normal text-gray-700">Enjoy a luxurious dining experience in our elegantly designed restaurant, complete with exceptional service and ambiance.</p>
      </div>
    </div>

    {/* Card for Takeaway */}
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
      <img className="rounded-t-lg" src="https://via.placeholder.com/400" alt="Takeaway" />
      <div className="p-6">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Takeaway</h5>
        <p className="mb-3 font-normal text-gray-700">Order your favorite dishes to-go and enjoy Gourmet Haven's flavors in the comfort of your home.</p>
      </div>
    </div>

    {/* Card for Delivery */}
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
      <img className="rounded-t-lg" src="https://via.placeholder.com/400" alt="Delivery" />
      <div className="p-6">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Delivery</h5>
        <p className="mb-3 font-normal text-gray-700">Get your meals delivered to your doorstep with our fast and reliable delivery service.</p>
      </div>
    </div>

    {/* Card for Curbside Pickup */}
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
      <img className="rounded-t-lg" src="https://via.placeholder.com/400" alt="Curbside Pickup" />
      <div className="p-6">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Curbside Pickup</h5>
        <p className="mb-3 font-normal text-gray-700">Conveniently pick up your order without leaving your car. Simply place your order online and we’ll bring it out to you.</p>
      </div>
    </div>
  </div>
</section>




{/* Special Events and Catering */}
<section className="my-12">
  <h2 className="text-4xl font-semibold text-gray-800 text-center">Special Events and Catering</h2>
  <p className="mt-2 text-lg text-gray-600 text-center">Make your special occasions unforgettable with our bespoke catering services. Whether you're planning a wedding, corporate event, or private party, our team at Gourmet Haven will provide an exceptional culinary experience tailored to your needs.</p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
    {/* Card for Weddings */}
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="https://via.placeholder.com/400" alt="Weddings" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Weddings</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Celebrate your big day with exquisite culinary creations and impeccable service, tailored to your vision.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Learn More
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>

    {/* Card for Corporate Events */}
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="https://via.placeholder.com/400" alt="Corporate Events" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Corporate Events</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Host successful corporate events with our professional catering services, perfect for meetings, conferences, and parties.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Learn More
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>

    {/* Card for Private Parties */}
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="https://via.placeholder.com/400" alt="Private Parties" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Private Parties</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Whether it’s a birthday, anniversary, or any special celebration, our catering team will ensure your event is memorable.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Learn More
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>

    {/* Card for Custom Menus */}
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="https://via.placeholder.com/400" alt="Custom Menus" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Custom Menus</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Create a personalized menu that reflects your tastes and preferences, crafted by our expert chefs.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Learn More
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>



      {/* Menu Highlights */}
      <section className="my-12">
        <h2 className="text-4xl font-semibold text-gray-800">Menu Highlights</h2>
        <p className="mt-2 text-lg text-gray-600">Discover our most popular and signature dishes, crafted with the finest ingredients and culinary expertise.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Example dish */}
          <div className="text-center">
            <img src="https://via.placeholder.com/300" alt="Signature Dish" className="w-full h-64 object-cover rounded-lg" />
            <h3 className="text-2xl font-semibold text-gray-700 mt-4">Truffle Mushroom Risotto</h3>
            <p className="text-lg text-gray-600 mt-2">A creamy risotto with wild mushrooms, finished with truffle oil and Parmesan cheese.</p>
          </div>
          {/* Add more dishes similarly */}
        </div>
      </section>

      {/* Chef's Specialties */}
      <section className="my-12">
        <h2 className="text-4xl font-semibold text-gray-800">Chef's Specialties</h2>
        <p className="mt-2 text-lg text-gray-600">Indulge in our chef’s carefully curated specialties, showcasing culinary artistry and innovation.</p>
        <div className="flex flex-col md:flex-row items-center md:space-x-8 mt-8">
          <img src="https://via.placeholder.com/300" alt="Chef's Special" className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
          <div className="mt-4 md:mt-0">
            <h3 className="text-3xl font-semibold text-gray-700">Chef's Tasting Menu</h3>
            <p className="text-lg text-gray-600 mt-2">Experience a multi-course tasting menu featuring the finest seasonal ingredients and innovative culinary techniques.</p>
          </div>
        </div>
      </section>

      {/* Event Hosting */}
      <section className="my-12">
        <h2 className="text-4xl font-semibold text-gray-800">Event Hosting</h2>
        <p className="mt-2 text-lg text-gray-600">Host your events in style at Gourmet Haven, where exceptional service and exquisite cuisine create unforgettable experiences.</p>
        <ul className="mt-4 space-y-4">
          <li>
            <h3 className="text-2xl font-semibold text-gray-700">Private Rooms</h3>
            <p className="text-lg text-gray-600">Enjoy exclusive use of our private dining rooms, perfect for intimate gatherings and special occasions.</p>
          </li>
          <li>
            <h3 className="text-2xl font-semibold text-gray-700">Customizable Packages</h3>
            <p className="text-lg text-gray-600">Choose from our range of event packages, or work with our team to create a custom package that suits your needs.</p>
          </li>
          <li>
            <h3 className="text-2xl font-semibold text-gray-700">Personalized Service</h3>
            <p className="text-lg text-gray-600">Our dedicated event planners will ensure every detail of your event is perfect, from start to finish.</p>
          </li>
        </ul>
      </section>

      {/* Promotions and Deals */}
      <section className="my-12">
        <h2 className="text-4xl font-semibold text-gray-800">Promotions and Deals</h2>
        <p className="mt-2 text-lg text-gray-600">Take advantage of our current promotions and special deals to enjoy more of what you love at Gourmet Haven.</p>
        <ul className="mt-4 space-y-4">
          <li>
            <h3 className="text-2xl font-semibold text-gray-700">Happy Hour</h3>
            <p className="text-lg text-gray-600">Join us for Happy Hour and enjoy discounts on selected drinks and appetizers, Monday to Friday from 4 PM to 6 PM.</p>
          </li>
          <li>
            <h3 className="text-2xl font-semibold text-gray-700">Loyalty Program</h3>
            <p className="text-lg text-gray-600">Sign up for our loyalty program and earn points with every visit, redeemable for exclusive rewards and discounts.</p>
          </li>
          <li>
            <h3 className="text-2xl font-semibold text-gray-700">Seasonal Specials</h3>
            <p className="text-lg text-gray-600">Enjoy our seasonal specials, featuring the freshest ingredients and flavors of the season.</p>
          </li>
        </ul>
      </section>





      {/* Contact Information */}
      <section className="my-12 text-center">
        <h2 className="text-4xl font-semibold text-gray-800">Contact Us</h2>
        <p className="mt-2 text-lg text-gray-600">For reservations and inquiries, reach us at:</p>
        <p className="mt-2 text-lg text-gray-600">Phone: (123) 456-7890</p>
        <p className="mt-2 text-lg text-gray-600">Email: contact@gourmethaven.com</p>
        <div className="mt-4">
          <a href="https://www.facebook.com/gourmethaven" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mx-2">Facebook</a>
          <a href="https://www.instagram.com/gourmethaven" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline mx-2">Instagram</a>
          <a href="https://www.twitter.com/gourmethaven" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mx-2">Twitter</a>
        </div>
      </section>

      {/* FAQs */}
      <section className="my-12">
        <h2 className="text-4xl font-semibold text-gray-800">Frequently Asked Questions</h2>
        <ul className="mt-4 space-y-4">
          <li>
            <h3 className="text-2xl font-semibold text-gray-700">What are your opening hours?</h3>
            <p className="text-lg text-gray-600">We are open from 11 AM to 10 PM from Monday to Saturday, and from 11 AM to 8 PM on Sundays.</p>
          </li>
          <li>
            <h3 className="text-2xl font-semibold text-gray-700">Do you offer vegetarian and vegan options?</h3>
            <p className="text-lg text-gray-600">Yes, we have a variety of vegetarian and vegan dishes available on our menu.</p>
          </li>
          <li>
            <h3 className="text-2xl font-semibold text-gray-700">Can I customize my order?</h3>
            <p className="text-lg text-gray-600">Absolutely! Our chefs are happy to accommodate any special requests or dietary restrictions you may have.</p>
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="my-12 text-center">
        <h2 className="text-4xl font-semibold text-gray-800">Ready to Dine with Us?</h2>
        <p className="mt-2 text-lg text-gray-600">Book your table or order online to enjoy the finest dining experience at Gourmet Haven.</p>
        <div className="mt-8 space-x-4">
          <a href="/reservation" className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700">Make a Reservation</a>
          <a href="/order" className="bg-yellow-600 text-white px-6 py-3 rounded-full hover:bg-yellow-700">Order Online</a>
        </div>
      </section>
    </div>
  );
}
