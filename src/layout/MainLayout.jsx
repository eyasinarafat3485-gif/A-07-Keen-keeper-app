import React from 'react';
import Navbar from '../components/shared/navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router';
import Footer from '../components/homepage/footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </div>
    );
};

export default MainLayout;