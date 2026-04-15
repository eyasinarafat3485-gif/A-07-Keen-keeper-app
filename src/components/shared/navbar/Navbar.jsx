import React from 'react';
import { NavLink } from 'react-router';
import logoImg from '../../../assets/logo.png'
import { IoHomeOutline } from 'react-icons/io5';
import { IoMdTime } from 'react-icons/io';
import { ImStatsDots } from 'react-icons/im';

const Navbar = () => {
    const links = (
        <>
            <li>
                <NavLink to="/" className={({ isActive }) => `font-semibold md:mr-2 ${isActive ? "text-orange-600 border-2 border-orange-600" : ""}`}>
                    <IoHomeOutline />
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/timeline" className={({ isActive }) => `font-semibold md:mr-2 ${isActive ? "text-orange-600 border-2 border-orange-600" : ""}`}>
                    <IoMdTime /> Timeline
                </NavLink>
            </li>
            <li>
                <NavLink to="/stats" className={({ isActive }) => `font-semibold md:mr-2 ${isActive ? "text-orange-600 border-2 border-orange-600" : ""}`}><ImStatsDots />
                    Stats
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm px-2 md:px-15">
            <div className="navbar-start">
                <img src={logoImg} alt="" />
            </div>

            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-30 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;