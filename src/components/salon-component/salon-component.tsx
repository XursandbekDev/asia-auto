import React from 'react';
import Link from 'next/link';
import { LuMinus } from "react-icons/lu";
import Image from 'next/image';
import PlayVideo from "@/assets/play-icon/play-first.svg"
function SalonComponent() {
    return (
        <div className="relative mt-20 hidden lg:block -z-50  bg-black lg:px-36">
            <span className="absolute inset-0 block salon_overlay__JZA39"></span>
            <div className="container relative lg:py-20">
                <div className="relative video-container">
                    <Image
                        alt="Play Icon"
                        loading="lazy"
                        width={160}
                        height={160}
                        decoding="async"
                        className="play-icon -translate-y-1/5 absolute inset-1/2 left-[85%] -translate-x-1/2 cursor-pointer transition-transform duration-300 ease-in-out scale-110"
                        src={PlayVideo}
                        style={{ color: 'transparent' }}
                    />
                </div>
                <h2 className="font-sans text-[32px] font-bold text-white">
                    Bizni tanlashingizga sabab
                </h2>
                <ul className="mt-4 grid gap-[15px]">
                    <li className="list-inside font-sans text-base font-normal text-white">
                        <div className="flex gap-1 items-center">
                            <LuMinus />
                            <p>Professional jamoa</p>
                        </div>
                    </li>
                    <li className="list-inside font-sans text-base font-normal text-white">
                        <div className="flex gap-1 items-center">
                            <LuMinus />
                            <p>Keng assortiment</p>
                        </div>
                    </li>
                    <li className="list-inside font-sans text-base font-normal text-white">
                        <div className="flex gap-1 items-center">
                            <LuMinus />
                            <p>Professional jamoa</p>
                        </div>
                    </li>
                    <li className="list-inside font-sans text-base font-normal text-white">
                        <div className="flex gap-1 items-center">
                            <LuMinus />
                            <p>Keng assortiment</p>
                        </div>
                    </li>
                    <li className="list-inside font-sans text-base font-normal text-white">
                        <div className="flex gap-1 items-center">
                            <LuMinus />
                            <p>Professional jamoa</p>
                        </div>
                    </li>
                    <li className="list-inside font-sans text-base font-normal text-white">
                        <div className="flex gap-1 items-center">
                            <LuMinus />
                            <p>Keng assortiment</p>
                        </div>
                    </li>
                </ul>
                <button className="rounded-[27px] bg-white px-[30px] py-[15px] shadow-sm">
                    <Link href="/contact" className="font-sans text-base font-normal text-[#040405]">
                        Biz bilan bog‘lanish
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default SalonComponent;
