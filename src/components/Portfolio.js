import React from 'react';

const Portfolio = () => {
    const projects = [
        {
            name: 'aamOS',
            description: 'My small hobby OS.',
            githubLink: 'https://github.com/aamosljp/aamOS',
        },
        {
            name: 'rsraytracer',
            description: 'A small ray tracer written in Rust.',
            githubLink: 'https://github.com/aamosljp/rsraytracer',
        },
        {
            name: 'simplefprenderer',
            description: 'A very simple doom-like 3D renderer written in C++.',
            githubLink: 'https://github.com/aamosljp/simplefprenderer',
        },
        {
            name: 'pngme',
            description: 'A program to encode messages into a PNG file.',
            githubLink: 'https://github.com/aamosljp/pngme',
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="dark:text-blue-200 text-2xl font-bold mb-4 transition duration-300">Portfolio</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <a key={index} href={project.githubLink} target="_blank" rel="noopener noreferrer" className="dark:bg-gray-600 bg-blue-100 rounded-lg overflow-hidden shadow-md dark:hover:bg-gray-700 hover:bg-blue-200 transition duration-300">
                        <div className="p-4">
                            <h3 className="dark:text-blue-300 text-xl font-bold mb-2 transition duration-300">{project.name}</h3>
                            <p className="dark:text-blue-200 text-gray-700 transition duration-300">{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
