import React from 'react';
import navIcon from '../../assets/logo.png'
import icon from '../../assets/dollar-1.png'

const Navbar = ({coin}) => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            
                            <li><a>Teams</a></li>
                        </ul>
                    </div>
                    <a className=""><img width={60} src={navIcon} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                        <li><a>Home</a></li>
                        
                        <li><a>Teams</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn border-green-300 bg-white font-bold">{coin} Coins 
                        <img src={icon} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;