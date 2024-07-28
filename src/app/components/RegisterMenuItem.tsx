// src/components/RegisterMenuItem.tsx
'use client';

import { useState } from 'react';

// src/components/RegisterMenuItem.tsx
export const RegisterMenuItem = () => {

  // Inside your component  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageStyle, setMessageStyle] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !image) {
      setMessage('All fields are required.');      
      return;
    }

    setIsLoading(true);
    setMessage('');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const newItem = {
        title,
        description,
        image: imagePreview, // Assuming imagePreview holds the base64 string or URL of the image
      };
    
      const response = await fetch('https://localhost:44358/featuredItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });

      if (response.ok) {
        setMessage('Menu item registered successfully!');
        setMessageStyle('text-green-500');
        setTitle('');
        setDescription('');
        setImage(null);
        setImagePreview('');
      } else {        
        setMessage('Failed to register menu item.');
        setMessageStyle('text-red-500');
      }
    } catch (error) {     
      setMessage('An error occurred. Please try again.<br/>' + error);
      setMessageStyle('text-red-500');      
    }finally {
      setIsLoading(false);
      setTimeout(() => {       
          setImagePreview(''); 
         window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
      }, 500);   
      setImagePreview('');               
    }    
  };

  return (
    <div className="max-w-md mx-auto mt-0 py-1 flex-1">
      <h2 className="text-3xl font-semibold mb-6 text-center">Register New Menu Item</h2>
      {message && <p className={`mb-4 text-center ${messageStyle}`} dangerouslySetInnerHTML={{ __html: message }} />}      
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 dark:text-gray-300 mb-2">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div className="mb-4 inline-flex items-center">
        <label htmlFor="isFeatured" className="text-gray-700 dark:text-gray-300 mr-2">Is Featured</label>
        <input 
          type="checkbox" 
          id="isFeatured" 
          checked={isFeatured} 
          onChange={(e) => setIsFeatured(e.target.checked)} 
          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
        />        
      </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 dark:text-gray-300 mb-2">Image</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {imagePreview && (
          <div className="mb-4">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-80 h-36 object-cover rounded-lg"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-primary text-white rounded-lg focus:outline-none"
          disabled={isLoading}
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};
