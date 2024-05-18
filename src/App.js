import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Home from './components/Home';
import Project from './components/Project';

function App() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
    const toggleDarkMode = () => {
        if (localStorage.theme === 'dark') localStorage.theme = 'light';
        else if (localStorage.theme === 'light') localStorage.theme = 'dark';
        else localStorage.theme = 'dark';
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    };
    return (
        <Router>
            <div className='flex flex-col min-h-screen dark:bg-gray-900 transition duration-300'>
                <Header toggleDarkMode={toggleDarkMode} />
                <Routes>
                    <Route path="/" exact Component={Home} />
                    <Route path="/blog" exact Component={BlogList} />
                    <Route path="/blog/:id" Component={BlogPost} />
                    <Route path="/portfolio" Component={Portfolio} />
                    <Route path="/projects/:name" Component={Project} />
                    <Route path="/contact" Component={Contact} />
                    <Route path="/donate" Component={Donate} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;

