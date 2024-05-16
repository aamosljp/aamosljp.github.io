import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">Your Name</h1>
      <nav className="space-x-4">
        <Link className="hover:underline" to="/">Home</Link>
        <Link className="hover:underline" to="/blog">Blog</Link>
        <Link className="hover:underline" to="/portfolio">Portfolio</Link>
        <Link className="hover:underline" to="/about">About</Link>
        <Link className="hover:underline" to="/contact">Contact</Link>
      </nav>
    </div>
  </header>
);

export default Header;

