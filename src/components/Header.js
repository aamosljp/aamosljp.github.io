import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="bg-blue-900 text-white p-4">
        <h1>aamosljp</h1>
        <nav className="flex justify-left items-center">
            <Link className="mr-4" to="/">Home</Link>
            <Link className="mr-4" to="/blog">Blog</Link>
            <Link className="mr-4" to="/portfolio">Portfolio</Link>
            <Link className="mr-4" to="/contact">Contact</Link>
            <Link className="mr-4" to="/donate">Donate</Link>
        </nav>
    </header>
);

export default Header;

