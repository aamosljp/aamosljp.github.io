import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleDarkMode }) => (
    <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl font-bold">Aamos Pernu</h1>
        <nav className="flex justify-between items-center">
            <Link className="mr-4" to="/">Home</Link>
            <Link className="mr-4" to="/blog">Blog</Link>
            <Link className="mr-4" to="/portfolio">Portfolio</Link>
            <Link className="mr-4" to="/contact">Contact</Link>
            <Link className="mr-4" to="/donate">Donate</Link>
            <button onClick={toggleDarkMode} className='dark:text-gray-600 text-gray-200 focus:outline-none ml-auto transiton duration-300'>
                Toggle Dark Mode
            </button>
        </nav>
    </header>
);

export default Header;

