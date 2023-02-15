import React from 'react';
import { Anchor } from 'antd';

import About from "./About";
import ProjectGallery from "./ProjectGallery";
import Contact from "./Contact";
import Footer from "./Footer";

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
                            title: 'Part 1',
                        },
                        {
                            key: 'part-2',
                            href: '#part-2',
                            title: 'Part 2',
                        },
                        {
                            key: 'part-3',
                            href: '#part-3',
                            title: 'Part 3',
                        },
                        {
                            key: 'part-4',
                            href: '#part-4',
                            title: 'Part 4',
                        },
                        {
                            key: 'part-5',
                            href: '#part-5',
                            title: 'Part 5',
                        },
                        {
                            key: 'part-6',
                            href: '#part-6',
                            title: 'Part 6',
                        },
                    ]}
                />
            </div>
            <div>
                <div
                    id="part-1"
                    style={{ width: '100vw', textAlign: 'center', background: 'rgba(0,255,0,0.02)' }}
                />
                <div className="container-fluid"><About /></div>
                <div
                    id="part-2"
                    style={{
                        width: '100vw',
                        textAlign: 'center',
                        background: 'rgba(0,0,255,0.02)',
                    }}
                />
                <div className="container-fluid"><ProjectGallery /></div>
                <div
                    id="part-3"
                    style={{ width: '100vw', textAlign: 'center', background: '#FFFBE9' }}
                />
                <div className="container-fluid"><Contact /></div>
                <div
                    id="part-4"
                    style={{ width: '100vw', height: '100vh', textAlign: 'center', background: '#F4EAD5' }}
                />
                <div
                    id="part-5"
                    style={{ width: '100vw', height: '100vh', textAlign: 'center', background: '#DAE2B6' }}
                />
                <div
                    id="part-6"
                    style={{ width: '100vw', height: '100vh', textAlign: 'center', background: '#CCD6A6' }}
                />
            </div>
            <div className="container-fluid"><Footer /></div>
        </>
    );
}

export default MainContainer;