import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../layouts/Header/Header';
import Footer from '../layouts/Footer/Footer';

export default function MainLayout() {
    return (
        <div className="flex flex-col lg:h-[1600px] sm:h-[1450px] bg-black text-white"> 
            <Header />

            <div className="main-content flex-1 pt-6">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
}
