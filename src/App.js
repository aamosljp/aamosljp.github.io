import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Home from './components/Home';
import Project from './components/Project';

function App() {
    return (
        <>
        <Router>
            <div className='flex flex-col min-h-screen'>
                <Header />
                <Routes>
                    <Route path="/" exact Component={Home} />
                    <Route path="/blog" exact Component={Blog} />
                    <Route path="/portfolio" Component={Portfolio} />
                    <Route path="/projects/:name" Component={Project} />
                    <Route path="/contact" Component={Contact} />
                    <Route path="/donate" Component={Donate} />
                </Routes>
            </div>
            <Footer />
        </Router>
        </>
    );
}

export default App;

