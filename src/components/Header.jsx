import React from 'react';

const Header = () => {
    return (
        <div class="bg-gray-900">
            <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div class="relative flex items-center justify-between">
                    <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                    >
                        <svg
                            class="w-8 text-teal-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                        >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                            Shotgun
                            
                        </span>
                    </a>
                    <ul class="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <a
                                href="/"
                                aria-label="Our product"
                                title="Our product"
                                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                aria-label="Our product"
                                title="Our product"
                                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                aria-label="Product pricing"
                                title="Product pricing"
                                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Statistics
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                aria-label="About us"
                                title="About us"
                                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                About us
                            </a>
                        </li>
            
                    </ul>
          
                </div>
            </div>
        </div>
    );
}

export default Header;