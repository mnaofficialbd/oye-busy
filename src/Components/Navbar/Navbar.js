import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar bg-yellow-600 shadow-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-circle swap swap-rotate mx-2 lg:hidden">
                            <input type="checkbox" />
                            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='rounded-lg text-xl '>Home</li>
                            <li className='rounded-lg text-xl '>Dashboard</li>
                            <li className='rounded-lg text-xl '>My Portfolio</li>
                            <li className='rounded-lg text-xl '>Blogs</li>
                            <li>
                                <button className='btn btn-NavLink btn-outline  text-decoration-none fs-5'>Download APP</button>
                            </li>

                        </ul>
                    </div>
                    <a href="home" className="font-bold text-2xl">MNA Computer Manufacturer</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal gap-x-2 p-0">
                        <li className='rounded-lg text-xl '>Home</li>
                        <li className='rounded-lg text-xl '>Dashboard</li>
                        <li className='rounded-lg text-xl '>My Portfolio</li>
                        <li className='rounded-lg text-xl '>Blogs</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;