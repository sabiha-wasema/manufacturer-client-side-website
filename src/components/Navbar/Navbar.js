import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">

                <div class="w-full navbar bg-base-100 lg:px-16">
                    <div class="flex-1 px-2 mx-2 text-2xl font-bold text-yellow-500"><span className='text-rose-600 text-3xl'>Brush</span>Waremag</div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal gap-x-2 my-2">

                            <li><NavLink to="/" className="rounded-lg font-bold ">Home</NavLink></li>
                            <li><NavLink to="/tools" className="rounded-lg font-bold">Tools</NavLink></li>
                            <li><NavLink to="/reviews" className="rounded-lg font-bold">Reviews</NavLink></li>
                            <li><NavLink to="/businesssummary" className="rounded-lg font-bold">Business Summary</NavLink></li>
                            <li><NavLink to="/about" className="rounded-lg font-bold">About</NavLink></li>
                            <li><NavLink to="/login" className="rounded-lg font-bold">Login</NavLink></li>

                        </ul>
                    </div>
                </div>

                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">

                    <li><NavLink to="/" className="rounded-lg font-bold">Home</NavLink></li>
                    <li><NavLink to="/tools" className="rounded-lg font-bold">Tools</NavLink></li>
                    <li><NavLink to="/reviews" className="rounded-lg font-bold">Reviews</NavLink></li>
                    <li><NavLink to="/businesssummary" className="rounded-lg font-bold">Business Summary</NavLink></li>
                    <li><NavLink to="/about" className="rounded-lg font-bold">About</NavLink></li>
                    <li><NavLink to="/login" className="rounded-lg font-bold">Login</NavLink></li>

                </ul>

            </div>
        </div >
    );
};

export default Navbar;