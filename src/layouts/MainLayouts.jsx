import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayouts = () => {
    return (
        <>
            <Navbar></Navbar> 
            <Outlet></Outlet>
        </>
    );
};

export default MainLayouts;