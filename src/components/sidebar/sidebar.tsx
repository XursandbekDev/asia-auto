// components/Sidebar.tsx
import Image from 'next/image';
import Link from 'next/link';
import NavbarLogo from '@/assets/Logo/NavbarLogo.svg';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    return (
        <div
            className={`fixed inset-0 transition-transform transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                } z-50 lg:hidden`}
        >
            <div className="absolute inset-0 bg-black bg-opacity-75" onClick={onClose}></div>
            <div className="relative flex flex-col w-full h-full bg-white p-4">
                <button
                    aria-label="Close sidebar"
                    className="self-end p-2 text-black"
                    onClick={onClose}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 18L18 6M6 6L18 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <div>
                    <Image
                        alt="AsiaAuto logo"
                        width={283}
                        height={36}
                        src={NavbarLogo}
                        className="block w-48 sm:w-60 md:w-80 lg:w-96"
                    />
                    <ul className="flex flex-col mt-4 space-y-4">
                        <li>
                            <Link href="/salon" className="text-base font-medium text-black">
                                Avtosalon
                            </Link>
                        </li>
                        <li>
                            <Link href="/cars" className="text-base font-medium text-black">
                                Avtomobillar
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-base font-medium text-black">
                                Aloqa
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

