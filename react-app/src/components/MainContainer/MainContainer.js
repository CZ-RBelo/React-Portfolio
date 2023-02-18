import React from 'react';
import { Anchor } from 'antd';

import About from "../About/About";
import KeySkills from "../KeySkills/KeySkills";
import ProjectGallery from "../ProjectGallery/ProjectGallery";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function MainContainer() {
    return (
        <>
            <div style={{ padding: '20px' }}>
                <Anchor
                    direction="horizontal"
                    items={[
                        {
                            key: 'part-1',
                            href: '#part-1',
                            title: 'About me',
                        },
                        {
                            key: 'part-2',
                            href: '#part-2',
                            title: 'Skills',
                        },
                        {
                            key: 'part-3',
                            href: '#part-3',
                            title: 'Projects',
                        },
                        {
                            key: 'part-4',
                            href: '#part-4',
                            title: 'Contact me',
                        }                
                    ]}
                />
            </div>
            <div>
                <div id="part-1" />
                <div className="container-fluid" style={{ maxWidth: '1040px'}}><About /></div>
                <div id="part-2" />
                <div className="container-fluid" style={{ maxWidth: '1040px'}}><KeySkills /></div>
                <div id="part-3" />
                <div className="container-fluid" style={{ maxWidth: '1040px'}}><ProjectGallery /></div>
                <div id="part-4" />
                <div className="container-fluid" style={{ maxWidth: '1040px'}}><Contact /></div>                
            </div>
            <div className="container-fluid"><Footer /></div>
        </>
    );
}

export default MainContainer;