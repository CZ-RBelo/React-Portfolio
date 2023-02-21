import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import About from '../About/About';
import Home from '../Home/Home';
import KeySkills from '../KeySkills/KeySkills';
import ProjectGallery from '../ProjectGallery/ProjectGallery';
import Contact from '../Contact/Contact';

// /dist/framer-motion

import{AnimatePresence} from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
        <Routes location = {location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Skills" element={<KeySkills />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Projects" element={<ProjectGallery />} />
        </Routes>
        </AnimatePresence>
    )

}

export default AnimatedRoutes