import React from 'react'
import Image from 'next/image'
import Malibu from "@/assets/background-image/MalibuSvg.svg"
import { Mali } from 'next/font/google'
import Link from 'next/link'
function CarsAll() {
    return (
        <div className=' lg:px-36' >

            <div className='gap-6 mb-20 mt-10 grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3' >

                <div className="bg-white space-y-4 shadow-lg p-xl rounded-lg grid h-full place-content-center">
                    <div>
                        <div className="grid gap-4">
                            <h3 className="text-xl font-semibold">BMW - M3</h3>
                            <Image alt="auto" loading="lazy" width={640} height={480} decoding="async" data-nImage="1"
                                src={Malibu}
                                className="w-full h-auto object-cover" />
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-y-6">
                        <div className="flex w-1/2 items-center gap-4 font-montserrat text-base font-medium text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 10.8333C16.6667 12.6742 15.9206 14.3409 14.7142 15.5474L15.8927 16.7259C17.4007 15.2178 18.3334 13.1345 18.3334 10.8333C18.3334 6.23096 14.6024 2.5 10.0001 2.5C5.39771 2.5 1.66675 6.23096 1.66675 10.8333C1.66675 13.1345 2.59949 15.2178 4.10752 16.7259L5.28604 15.5474C4.07961 14.3409 3.33341 12.6742 3.33341 10.8333C3.33341 7.15143 6.31818 4.16667 10.0001 4.16667C13.682 4.16667 16.6667 7.15143 16.6667 10.8333ZM12.7442 6.91081L8.75008 10.4167L10.4167 12.0833L13.9227 8.08932L12.7442 6.91081Z" fill="black" />
                            </svg>
                            <p>123</p>
                        </div>
                        <div className="flex w-1/2 items-center gap-4 font-montserrat text-base font-medium text-black">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2C5.582 2 2 5.582 2 10C2 14.418 5.582 18 10 18C14.418 18 18 14.418 18 10C18 5.582 14.418 2 10 2ZM14 9.6666C14 10.2189 13.5523 10.6666 13 10.6666H11.6666C11.1143 10.6666 10.6666 11.1143 10.6666 11.6666V13.3334C10.6666 13.7016 10.3682 14 10 14C9.63185 14 9.3334 13.7016 9.3334 13.3334V11.6666C9.3334 11.1143 8.88568 10.6666 8.3334 10.6666C7.78112 10.6666 7.3334 11.1143 7.3334 11.6666V13.3333C7.3334 13.7015 7.03491 14 6.6667 14C6.29849 14 6 13.7015 6 13.3333V6.6667C6 6.29849 6.29849 6 6.6667 6C7.03491 6 7.3334 6.29849 7.3334 6.6667V8.3334C7.3334 8.88568 7.78112 9.3334 8.3334 9.3334C8.88568 9.3334 9.3334 8.88568 9.3334 8.3334V6.6666C9.3334 6.29845 9.63185 6 10 6C10.3682 6 10.6666 6.29845 10.6666 6.6666V8.3334C10.6666 8.88568 11.1143 9.3334 11.6666 9.3334C12.2189 9.3334 12.6666 8.88568 12.6666 8.3334V6.6667C12.6666 6.29849 12.9651 6 13.3333 6C13.7015 6 14 6.29849 14 6.6667V9.6666Z" fill="black" />
                            </svg>
                            <p>mexanika</p>
                        </div>
                        <div className="flex w-1/2 items-center gap-4 font-montserrat text-base font-medium text-black">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Frame">
                                    <path id="Vector" d="M10.0001 1.66667C14.6019 1.66667 18.3334 4.98148 18.3334 9.07408C18.3334 11.6297 16.2593 13.7037 13.7037 13.7037H12.0649C11.2964 13.7037 10.676 14.3241 10.676 15.0926C10.676 15.4444 10.8149 15.7685 11.0278 16.0092C11.2501 16.2592 11.389 16.5833 11.389 16.9444C11.389 17.713 10.7501 18.3333 10.0001 18.3333C5.39823 18.3333 1.66675 14.6018 1.66675 10C1.66675 5.39815 5.39823 1.66667 10.0001 1.66667ZM6.25008 10C6.94044 10 7.50008 9.44033 7.50008 8.75C7.50008 8.05964 6.94044 7.5 6.25008 7.5C5.55972 7.5 5.00008 8.05964 5.00008 8.75C5.00008 9.44033 5.55972 10 6.25008 10ZM13.7501 10C14.4404 10 15.0001 9.44033 15.0001 8.75C15.0001 8.05964 14.4404 7.5 13.7501 7.5C13.0597 7.5 12.5001 8.05964 12.5001 8.75C12.5001 9.44033 13.0597 10 13.7501 10ZM10.0001 7.5C10.6904 7.5 11.2501 6.94036 11.2501 6.25C11.2501 5.55964 10.6904 5 10.0001 5C9.30975 5 8.75008 5.55964 8.75008 6.25C8.75008 6.94036 9.30975 7.5 10.0001 7.5Z" fill="black" />
                                </g>
                            </svg>
                            <p>blue</p>
                        </div>
                        <div className="flex w-1/2 items-center gap-4 font-montserrat text-base font-medium text-black">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 11.55C15 14.491 12.6215 16.8751 9.6875 16.8751C6.75349 16.8751 4.375 14.491 4.375 11.55C4.375 8.60904 9.6875 3.12506 9.6875 3.12506C9.6875 3.12506 15 8.60904 15 11.55Z" fill="black" />
                            </svg>
                            <p>benzin</p>
                        </div>
                    </div>
                    <div>
                        <Link className="flex w-full justify-center rounded-xl border border-red-600 border-opacity-30 bg-white py-4 text-center font-sans text-base font-semibold uppercase text-red-600 hover:bg-red-600 hover:text-white xl:px-12" href="/cars/19">NARXLAR VA SPETSIFIKATSIYA</Link>
                    </div>
                </div>
                <div className="bg-white space-y-4 shadow-lg p-xl rounded-lg grid h-full place-content-center">
                    <div>
                        <div className="grid gap-4">
                            <h3 className="text-xl font-semibold">BMW - M3</h3>
                            <Image alt="auto" loading="lazy" width={640} height={480} decoding="async" data-nImage="1"
                                src={Malibu}
                                className="w-full h-auto object-cover" />
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-y-6">
                        <div className="flex w-1/2 items-center gap-4 font-montserrat text-base font-medium text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 10.8333C16.6667 12.6742 15.9206 14.3409 14.7142 15.5474L15.8927 16.7259C17.4007 15.2178 18.3334 13.1345 18.3334 10.8333C18.3334 6.23096 14.6024 2.5 10.0001 2.5C5.39771 2.5 1.66675 6.23096 1.66675 10.8333C1.66675 13.1345 2.59949 15.2178 4.10752 16.7259L5.28604 15.5474C4.07961 14.3409 3.33341 12.6742 3.33341 10.8333C3.33341 7.15143 6.31818 4.16667 10.0001 4.16667C13.682 4.16667 16.6667 7.15143 16.6667 10.8333ZM12.7442 6.91081L8.75008 10.4167L10.4167 12.0833L13.9227 8.08932L12.7442 6.91081Z" fill="black" />
                            </svg>
                            <p>123</p>
                        </div>
                        <div className="flex w-1/2 items-center gap-4 font-montserrat text-base font-medium text-black">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2C5.582 2 2 5.582 2 10C2 14.418 5.582 18 10 18C14.418 18 18 14.418 18 10C18 5.582 14.418 2 10 2ZM14 9.6666C14 10.2189 13.5523 10.6666 13 10.6666H11.6666C11.1143 10.6666 10.6666 11.1143 10.6666 11.6666V13.3334C10.6666 13.7016 10.3682 14 10 14C9.63185 14 9.3334 13.7016 9.3334 13.3334V11.6666C9.3334 11.1143 8.88568 10.6666 8.3334 10.6666C7.78112 10.6666 7.3334 11.1143 7.3334 11.6666V13.3333C7.3334 13.7015 7.03491 14 6.6667 14C6.29849 14 6 13.7015 6 13.3333V6.6667C6 6.29849 6.29849 6 6.6667 6C7.03491 6 7.3334 6.29849 7.3334 6.6667V8.3334C7.3334 8.88568 7.78112 9.3334 8.3334 9.3334C8.88568 9.3334 9.3334 8.88568 9.3334 8.3334V6.6666C9.3334 6.29845 9.63185 6 10 6C10.3682 6 10.6666 6.29845 10.6666 6.6666V8.3334C10.6666 8.88568 11.1143 9.3334 11.6666 9.3334C12.2189 9.3334 12.6666 8.88568 12.6666 8.3334V6.6667C12.6666 6.29849 12.9651 6 13.3333 6C13.7015 6 14 6.29849 14 6.6667V9.6666Z" fill="black" />
                            </svg>
                            <p>mexanika</p>
                        </div>
                        <div className="flex w-1/2 items-center gap-4 font-montserrat text-base font-medium text-black">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Frame">
                                    <path id="Vector" d="M10.0001 1.66667C14.6019 1.66667 18.3334 4.98148 18.3334 9.07408C18.3334 11.6297 16.2593 13.7037 13.7037 13.7037H12.0649C11.2964 13.7037 10.676 14.3241 10.676 15.0926C10.676 15.4444 10.8149 15.7685 11.0278 16.0092C11.2501 16.2592 11.389 16.5833 11.389 16.9444C11.389 17.713 10.7501 18.3333 10.0001 18.3333C5.39823 18.3333 1.66675 14.6018 1.66675 10C1.66675 5.39815 5.39823 1.66667 10.0001 1.66667ZM6.25008 10C6.94044 10 7.50008 9.44033 7.50008 8.75C7.50008 8.05964 6.94044 7.5 6.25008 7.5C5.55972 7.5 5.00008 8.05964 5.00008 8.75C5.00008 9.44033 5.55972 10 6.25008 10ZM13.7501 10C14.4404 10 15.0001 9.44033 15.0001 8.75C15.0001 8.05964 14.4404 7.5 13.7501 7.5C13.0597 7.5 12.5001 8.05964 12.5001 8.75C12.5001 9.44033 13.0597 10 13.7501 10ZM10.0001 7.5C10.6904 7.5 11.2501 6.94036 11.2501 6.25C11.2501 5.55964 10.6904 5 10.0001 5C9.30975 5 8.75008 5.55964 8.75008 6.25C8.75008 6.94036 9.30975 7.5 10.0001 7.5Z" fill="black" />
                                </g>
                            </svg>
                            <p>blue</p>
                        </div>
                        <div className="flex w-1/2 items-center gap-4 font-montserrat text-base font-medium text-black">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 11.55C15 14.491 12.6215 16.8751 9.6875 16.8751C6.75349 16.8751 4.375 14.491 4.375 11.55C4.375 8.60904 9.6875 3.12506 9.6875 3.12506C9.6875 3.12506 15 8.60904 15 11.55Z" fill="black" />
                            </svg>
                            <p>benzin</p>
                        </div>
                    </div>
                    <div>
                        <Link className="flex w-full justify-center rounded-xl border border-red-600 border-opacity-30 bg-white py-4 text-center font-sans text-base font-semibold uppercase text-red-600 hover:bg-red-600 hover:text-white xl:px-12" href="/cars/19">NARXLAR VA SPETSIFIKATSIYA</Link>
                    </div>
                </div>
                <div className="bg-white space-y-4 shadow-lg p-xl rounded-lg grid h-full place-content-center">
                    <div>
                        <div className="grid gap-4">
                            <h3 className="text-xl font-semibold">BMW - M3</h3>
                            <Image alt="auto" loading="lazy" width={640} height={480} decoding="async" data-nImage="1"
                                src={Malibu}
                                className="w-full h-auto object-cover" />
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-y-6">
                        <div className="flex w-1/2 items-center gap-4 font-montserrat text-base font-medium text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 10.8333C16.6667 12.6742 15.9206 14.3409 14.7142 15.5474L15.8927 16.7259C17.4007 15.2178 18.3334 13.1345 18.3334 10.8333C18.3334 6.23096 14.6024 2.5 10.0001 2.5C5.39771 2.5 1.66675 6.23096 1.66675 10.8333C1.66675 13.1345 2.59949 15.2178 4.10752 16.7259L5.28604 15.5474C4.07961 14.3409 3.33341 12.6742 3.33341 10.8333C3.33341 7.15143 6.31818 4.16667 10.0001 4.16667C13.682 4.16667 16.6667 7.15143 16.6667 10.8333ZM12.7442 6.91081L8.75008 10.4167L10.4167 12.0833L13.9227 8.08932L12.7442 6.91081Z" fill="black" />
                            </svg>
                            <p>123</p>
                        </div>
                        <div className="flex w-1/2 items-center gap-4 font-montserrat text-base font-medium text-black">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2C5.582 2 2 5.582 2 10C2 14.418 5.582 18 10 18C14.418 18 18 14.418 18 10C18 5.582 14.418 2 10 2ZM14 9.6666C14 10.2189 13.5523 10.6666 13 10.6666H11.6666C11.1143 10.6666 10.6666 11.1143 10.6666 11.6666V13.3334C10.6666 13.7016 10.3682 14 10 14C9.63185 14 9.3334 13.7016 9.3334 13.3334V11.6666C9.3334 11.1143 8.88568 10.6666 8.3334 10.6666C7.78112 10.6666 7.3334 11.1143 7.3334 11.6666V13.3333C7.3334 13.7015 7.03491 14 6.6667 14C6.29849 14 6 13.7015 6 13.3333V6.6667C6 6.29849 6.29849 6 6.6667 6C7.03491 6 7.3334 6.29849 7.3334 6.6667V8.3334C7.3334 8.88568 7.78112 9.3334 8.3334 9.3334C8.88568 9.3334 9.3334 8.88568 9.3334 8.3334V6.6666C9.3334 6.29845 9.63185 6 10 6C10.3682 6 10.6666 6.29845 10.6666 6.6666V8.3334C10.6666 8.88568 11.1143 9.3334 11.6666 9.3334C12.2189 9.3334 12.6666 8.88568 12.6666 8.3334V6.6667C12.6666 6.29849 12.9651 6 13.3333 6C13.7015 6 14 6.29849 14 6.6667V9.6666Z" fill="black" />
                            </svg>
                            <p>mexanika</p>
                        </div>
                        <div className="flex w-1/2 items-center gap-4 font-montserrat text-base font-medium text-black">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Frame">
                                    <path id="Vector" d="M10.0001 1.66667C14.6019 1.66667 18.3334 4.98148 18.3334 9.07408C18.3334 11.6297 16.2593 13.7037 13.7037 13.7037H12.0649C11.2964 13.7037 10.676 14.3241 10.676 15.0926C10.676 15.4444 10.8149 15.7685 11.0278 16.0092C11.2501 16.2592 11.389 16.5833 11.389 16.9444C11.389 17.713 10.7501 18.3333 10.0001 18.3333C5.39823 18.3333 1.66675 14.6018 1.66675 10C1.66675 5.39815 5.39823 1.66667 10.0001 1.66667ZM6.25008 10C6.94044 10 7.50008 9.44033 7.50008 8.75C7.50008 8.05964 6.94044 7.5 6.25008 7.5C5.55972 7.5 5.00008 8.05964 5.00008 8.75C5.00008 9.44033 5.55972 10 6.25008 10ZM13.7501 10C14.4404 10 15.0001 9.44033 15.0001 8.75C15.0001 8.05964 14.4404 7.5 13.7501 7.5C13.0597 7.5 12.5001 8.05964 12.5001 8.75C12.5001 9.44033 13.0597 10 13.7501 10ZM10.0001 7.5C10.6904 7.5 11.2501 6.94036 11.2501 6.25C11.2501 5.55964 10.6904 5 10.0001 5C9.30975 5 8.75008 5.55964 8.75008 6.25C8.75008 6.94036 9.30975 7.5 10.0001 7.5Z" fill="black" />
                                </g>
                            </svg>
                            <p>blue</p>
                        </div>
                        <div className="flex w-1/2 items-center gap-4 font-montserrat text-base font-medium text-black">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 11.55C15 14.491 12.6215 16.8751 9.6875 16.8751C6.75349 16.8751 4.375 14.491 4.375 11.55C4.375 8.60904 9.6875 3.12506 9.6875 3.12506C9.6875 3.12506 15 8.60904 15 11.55Z" fill="black" />
                            </svg>
                            <p>benzin</p>
                        </div>
                    </div>
                    <div>
                        <Link className="flex w-full justify-center rounded-xl border border-red-600 border-opacity-30 bg-white py-4 text-center font-sans text-base font-semibold uppercase text-red-600 hover:bg-red-600 hover:text-white xl:px-12" href="/cars/19">NARXLAR VA SPETSIFIKATSIYA</Link>
                    </div>
                </div>
                <div className="bg-white space-y-4 shadow-lg p-xl rounded-lg grid h-full place-content-center">
                    <div>
                        <div className="grid gap-4">
                            <h3 className="text-xl font-semibold">BMW - M3</h3>
                            <Image alt="auto" loading="lazy" width={640} height={480} decoding="async" data-nImage="1"
                                src={Malibu}
                                className="w-full h-auto object-cover" />
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-y-6">
                        <div className="flex w-1/2 items-center gap-4 font-montserrat text-base font-medium text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 10.8333C16.6667 12.6742 15.9206 14.3409 14.7142 15.5474L15.8927 16.7259C17.4007 15.2178 18.3334 13.1345 18.3334 10.8333C18.3334 6.23096 14.6024 2.5 10.0001 2.5C5.39771 2.5 1.66675 6.23096 1.66675 10.8333C1.66675 13.1345 2.59949 15.2178 4.10752 16.7259L5.28604 15.5474C4.07961 14.3409 3.33341 12.6742 3.33341 10.8333C3.33341 7.15143 6.31818 4.16667 10.0001 4.16667C13.682 4.16667 16.6667 7.15143 16.6667 10.8333ZM12.7442 6.91081L8.75008 10.4167L10.4167 12.0833L13.9227 8.08932L12.7442 6.91081Z" fill="black" />
                            </svg>
                            <p>123</p>
                        </div>
                        <div className="flex w-1/2 items-center gap-4 font-montserrat text-base font-medium text-black">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2C5.582 2 2 5.582 2 10C2 14.418 5.582 18 10 18C14.418 18 18 14.418 18 10C18 5.582 14.418 2 10 2ZM14 9.6666C14 10.2189 13.5523 10.6666 13 10.6666H11.6666C11.1143 10.6666 10.6666 11.1143 10.6666 11.6666V13.3334C10.6666 13.7016 10.3682 14 10 14C9.63185 14 9.3334 13.7016 9.3334 13.3334V11.6666C9.3334 11.1143 8.88568 10.6666 8.3334 10.6666C7.78112 10.6666 7.3334 11.1143 7.3334 11.6666V13.3333C7.3334 13.7015 7.03491 14 6.6667 14C6.29849 14 6 13.7015 6 13.3333V6.6667C6 6.29849 6.29849 6 6.6667 6C7.03491 6 7.3334 6.29849 7.3334 6.6667V8.3334C7.3334 8.88568 7.78112 9.3334 8.3334 9.3334C8.88568 9.3334 9.3334 8.88568 9.3334 8.3334V6.6666C9.3334 6.29845 9.63185 6 10 6C10.3682 6 10.6666 6.29845 10.6666 6.6666V8.3334C10.6666 8.88568 11.1143 9.3334 11.6666 9.3334C12.2189 9.3334 12.6666 8.88568 12.6666 8.3334V6.6667C12.6666 6.29849 12.9651 6 13.3333 6C13.7015 6 14 6.29849 14 6.6667V9.6666Z" fill="black" />
                            </svg>
                            <p>mexanika</p>
                        </div>
                        <div className="flex w-1/2 items-center gap-4 font-montserrat text-base font-medium text-black">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Frame">
                                    <path id="Vector" d="M10.0001 1.66667C14.6019 1.66667 18.3334 4.98148 18.3334 9.07408C18.3334 11.6297 16.2593 13.7037 13.7037 13.7037H12.0649C11.2964 13.7037 10.676 14.3241 10.676 15.0926C10.676 15.4444 10.8149 15.7685 11.0278 16.0092C11.2501 16.2592 11.389 16.5833 11.389 16.9444C11.389 17.713 10.7501 18.3333 10.0001 18.3333C5.39823 18.3333 1.66675 14.6018 1.66675 10C1.66675 5.39815 5.39823 1.66667 10.0001 1.66667ZM6.25008 10C6.94044 10 7.50008 9.44033 7.50008 8.75C7.50008 8.05964 6.94044 7.5 6.25008 7.5C5.55972 7.5 5.00008 8.05964 5.00008 8.75C5.00008 9.44033 5.55972 10 6.25008 10ZM13.7501 10C14.4404 10 15.0001 9.44033 15.0001 8.75C15.0001 8.05964 14.4404 7.5 13.7501 7.5C13.0597 7.5 12.5001 8.05964 12.5001 8.75C12.5001 9.44033 13.0597 10 13.7501 10ZM10.0001 7.5C10.6904 7.5 11.2501 6.94036 11.2501 6.25C11.2501 5.55964 10.6904 5 10.0001 5C9.30975 5 8.75008 5.55964 8.75008 6.25C8.75008 6.94036 9.30975 7.5 10.0001 7.5Z" fill="black" />
                                </g>
                            </svg>
                            <p>blue</p>
                        </div>
                        <div className="flex w-1/2 items-center gap-4 font-montserrat text-base font-medium text-black">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 11.55C15 14.491 12.6215 16.8751 9.6875 16.8751C6.75349 16.8751 4.375 14.491 4.375 11.55C4.375 8.60904 9.6875 3.12506 9.6875 3.12506C9.6875 3.12506 15 8.60904 15 11.55Z" fill="black" />
                            </svg>
                            <p>benzin</p>
                        </div>
                    </div>
                    <div>
                        <Link className="flex w-full justify-center rounded-xl border border-red-600 border-opacity-30 bg-white py-4 text-center font-sans text-base font-semibold uppercase text-red-600 hover:bg-red-600 hover:text-white xl:px-12" href="/cars/19">NARXLAR VA SPETSIFIKATSIYA</Link>
                    </div>
                </div>
                <div className="bg-white space-y-4 shadow-lg p-xl rounded-lg grid h-full place-content-center">
                    <div>
                        <div className="grid gap-4">
                            <h3 className="text-xl font-semibold">BMW - M3</h3>
                            <Image alt="auto" loading="lazy" width={640} height={480} decoding="async" data-nImage="1"
                                src={Malibu}
                                className="w-full h-auto object-cover" />
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-y-6">
                        <div className="flex w-1/2 items-center gap-4 font-montserrat text-base font-medium text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6667 10.8333C16.6667 12.6742 15.9206 14.3409 14.7142 15.5474L15.8927 16.7259C17.4007 15.2178 18.3334 13.1345 18.3334 10.8333C18.3334 6.23096 14.6024 2.5 10.0001 2.5C5.39771 2.5 1.66675 6.23096 1.66675 10.8333C1.66675 13.1345 2.59949 15.2178 4.10752 16.7259L5.28604 15.5474C4.07961 14.3409 3.33341 12.6742 3.33341 10.8333C3.33341 7.15143 6.31818 4.16667 10.0001 4.16667C13.682 4.16667 16.6667 7.15143 16.6667 10.8333ZM12.7442 6.91081L8.75008 10.4167L10.4167 12.0833L13.9227 8.08932L12.7442 6.91081Z" fill="black" />
                            </svg>
                            <p>123</p>
                        </div>
                        <div className="flex w-1/2 items-center gap-4 font-montserrat text-base font-medium text-black">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2C5.582 2 2 5.582 2 10C2 14.418 5.582 18 10 18C14.418 18 18 14.418 18 10C18 5.582 14.418 2 10 2ZM14 9.6666C14 10.2189 13.5523 10.6666 13 10.6666H11.6666C11.1143 10.6666 10.6666 11.1143 10.6666 11.6666V13.3334C10.6666 13.7016 10.3682 14 10 14C9.63185 14 9.3334 13.7016 9.3334 13.3334V11.6666C9.3334 11.1143 8.88568 10.6666 8.3334 10.6666C7.78112 10.6666 7.3334 11.1143 7.3334 11.6666V13.3333C7.3334 13.7015 7.03491 14 6.6667 14C6.29849 14 6 13.7015 6 13.3333V6.6667C6 6.29849 6.29849 6 6.6667 6C7.03491 6 7.3334 6.29849 7.3334 6.6667V8.3334C7.3334 8.88568 7.78112 9.3334 8.3334 9.3334C8.88568 9.3334 9.3334 8.88568 9.3334 8.3334V6.6666C9.3334 6.29845 9.63185 6 10 6C10.3682 6 10.6666 6.29845 10.6666 6.6666V8.3334C10.6666 8.88568 11.1143 9.3334 11.6666 9.3334C12.2189 9.3334 12.6666 8.88568 12.6666 8.3334V6.6667C12.6666 6.29849 12.9651 6 13.3333 6C13.7015 6 14 6.29849 14 6.6667V9.6666Z" fill="black" />
                            </svg>
                            <p>mexanika</p>
                        </div>
                        <div className="flex w-1/2 items-center gap-4 font-montserrat text-base font-medium text-black">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Frame">
                                    <path id="Vector" d="M10.0001 1.66667C14.6019 1.66667 18.3334 4.98148 18.3334 9.07408C18.3334 11.6297 16.2593 13.7037 13.7037 13.7037H12.0649C11.2964 13.7037 10.676 14.3241 10.676 15.0926C10.676 15.4444 10.8149 15.7685 11.0278 16.0092C11.2501 16.2592 11.389 16.5833 11.389 16.9444C11.389 17.713 10.7501 18.3333 10.0001 18.3333C5.39823 18.3333 1.66675 14.6018 1.66675 10C1.66675 5.39815 5.39823 1.66667 10.0001 1.66667ZM6.25008 10C6.94044 10 7.50008 9.44033 7.50008 8.75C7.50008 8.05964 6.94044 7.5 6.25008 7.5C5.55972 7.5 5.00008 8.05964 5.00008 8.75C5.00008 9.44033 5.55972 10 6.25008 10ZM13.7501 10C14.4404 10 15.0001 9.44033 15.0001 8.75C15.0001 8.05964 14.4404 7.5 13.7501 7.5C13.0597 7.5 12.5001 8.05964 12.5001 8.75C12.5001 9.44033 13.0597 10 13.7501 10ZM10.0001 7.5C10.6904 7.5 11.2501 6.94036 11.2501 6.25C11.2501 5.55964 10.6904 5 10.0001 5C9.30975 5 8.75008 5.55964 8.75008 6.25C8.75008 6.94036 9.30975 7.5 10.0001 7.5Z" fill="black" />
                                </g>
                            </svg>
                            <p>blue</p>
                        </div>
                        <div className="flex w-1/2 items-center gap-4 font-montserrat text-base font-medium text-black">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 11.55C15 14.491 12.6215 16.8751 9.6875 16.8751C6.75349 16.8751 4.375 14.491 4.375 11.55C4.375 8.60904 9.6875 3.12506 9.6875 3.12506C9.6875 3.12506 15 8.60904 15 11.55Z" fill="black" />
                            </svg>
                            <p>benzin</p>
                        </div>
                    </div>
                    <div>
                        <Link className="flex w-full justify-center rounded-xl border border-red-600 border-opacity-30 bg-white py-4 text-center font-sans text-base font-semibold uppercase text-red-600 hover:bg-red-600 hover:text-white xl:px-12" href="/cars/19">NARXLAR VA SPETSIFIKATSIYA</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CarsAll