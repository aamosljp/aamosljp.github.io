import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const projects = [
        {
            name: 'aamOS',
            description: 'My small hobby OS.',
            link: 'https://github.com/aamosljp/aamOS',
        },
        {
            name: 'rsraytracer',
            description: 'A small ray tracer written in Rust.',
            link: 'https://github.com/aamosljp/rsraytracer',
        },
        {
            name: 'simplefprenderer',
            description: 'A very simple doom-like 3D renderer written in C++.',
            link: 'https://github.com/aamosljp/simplefprenderer',
        },
        {
            name: 'pngme',
            description: 'A program to encode messages into a PNG file.',
            link: 'https://github.com/aamosljp/pngme',
        },
        {
            name: 'nvim-rc',
            description: 'My neovim configs',
            link: 'https://github.com/aamosljp/nvim-rc',
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="mb-4">Portfolio</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <Link key={index} to={project.link} className="bg-blue-100 rounded-lg overflow-hidden shadow-md hover:bg-blue-200">
                        <div className="p-4">
                            <h3 className="mb-2">{project.name}</h3>
                            <p className="text-gray-700">{project.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
