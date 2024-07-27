// components/Header.tsx
"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavbarLogo from "@/assets/Logo/NavbarLogo.svg";
import Sidebar from "@/components/sidebar/sidebar";

const Header: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        // Ekran o'lchamini tekshirish
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Scroll holatini kuzatish
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSidebarToggle = () => {
        if (isMobile) {
            setIsSidebarOpen(prev => !prev);
        }
    };

    return (
        <>
            <header className={`top-0 w-full py-4 transition-all ${isScrolled ? 'fixed top-0 w-full bg-white bg-opacity-50 shadow-md backdrop-blur-xl' : 'bg-transparent'}`}>
                <nav className="container mx-auto flex items-center justify-between gap-10 px-4 md:px-8 lg:px-20">
                    {/* Mobile menu button */}
                    <div className="flex flex-grow justify-start lg:hidden">
                        <button
                            aria-label="Open sidebar"
                            className="text-black"
                            onClick={handleSidebarToggle}
                        >
                            <svg
                                width="30"
                                height="22"
                                viewBox="0 0 18 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 1L13 1"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M1 8L17 8"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8 15L17 15"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href='/' className="block">
                            <Image
                                alt="AsiaAuto logo"
                                width={260}
                                height={30}
                                src={NavbarLogo}
                                className="block w-48 sm:w-60 md:w-80 lg:w-96"
                            />
                        </Link>
                    </div>

                    {/* Navigation list */}
                    <div className="hidden lg:flex lg:flex-grow lg:items-center z-50">
                        <ul className="flex items-center gap-4 md:gap-6 lg:gap-8">
                            <li>
                                <Link className="text-base font-medium text-black" href="/salon">
                                    Avtosalon
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium text-black" href="/cars">
                                    Avtomobillar
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium text-black" href="/contact">
                                    Aloqa
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Right menu button */}
                    <div className="flex flex-grow justify-end">
                        <button
                            aria-label="Open sidebar"
                            className="text-black"
                        >
                            <svg
                                width="30"
                                height="22"
                                viewBox="0 0 18 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 1L13 1"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M1 8L17 8"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8 15L17 15"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Blurred Background and Sidebar */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-30 bg-black bg-opacity-50 backdrop-blur-lg"></div>
            )}
            <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} />
        </>
    );
};

export default Header;
