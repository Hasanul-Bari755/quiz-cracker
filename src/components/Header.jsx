import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div class="bg-gray-500">
            <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div class="relative flex items-center justify-between">
                    <NavLink
                        to="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                    >
                       
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                            Shotgun
                            
                        </span>
                    </NavLink>
                    <ul class="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <NavLink
                                to="/"
                                aria-label="Our product"
                                title="Our product"
                                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                aria-label="Our product"
                                title="Our product"
                                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                aria-label="Product pricing"
                                title="Product pricing"
                                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Statistics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                aria-label="About us"
                                title="About us"
                                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                About us
                            </NavLink>
                        </li>
            
                    </ul>
          
                </div>
            </div>
        </div>
    );
}

export default Header;