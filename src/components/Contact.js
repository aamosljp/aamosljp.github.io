import React from 'react';

const Contact = () => (
  <div className="container mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4">Contact</h2>
    <form className="space-y-4">
      <div>
        <label className="block text-gray-700">Name:</label>
        <input type="text" name="name" className="w-full border border-gray-300 p-2" />
      </div>
      <div>
        <label className="block text-gray-700">Email:</label>
        <input type="email" name="email" className="w-full border border-gray-300 p-2" />
      </div>
      <div>
        <label className="block text-gray-700">Message:</label>
        <textarea name="message" className="w-full border border-gray-300 p-2" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Submit</button>
    </form>
  </div>
);

export default Contact;

