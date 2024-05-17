import React from 'react';

const Contact = () => (
  <div className="container mx-auto p-4">
    <h2 className="dark:text-blue-200 text-2xl font-bold mb-4 transition duration-300">Contact</h2>
    <form className="space-y-4">
      <div>
        <label className="dark:text-blue-300 block text-gray-700 transition duration-300">Name:</label>
        <input type="text" name="name" className="dark:border-gray-700 dark:bg-gray-600 w-full border border-gray-300 p-2 transition duration-300" />
      </div>
      <div>
        <label className="dark:text-blue-300 block text-gray-700 transition duration-300">Email:</label>
        <input type="email" name="email" className="dark:border-gray-700 dark:bg-gray-600 w-full border border-gray-300 p-2 transition duration-300" />
      </div>
      <div>
        <label className="dark:text-blue-300 block text-gray-700 transition duration-300">Message:</label>
        <textarea name="message" className="dark:border-gray-700 dark:bg-gray-600 w-full border border-gray-300 p-2 transition duration-300" />
      </div>
      <button type="submit" className="dark:bg-blue-800 bg-blue-500 text-white px-4 py-2 transition duration-300">Submit</button>
    </form>
  </div>
);

export default Contact;

