import React from 'react';
import Image from 'next/image';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Cars from "@/assets/background-image/MalibuSvg.svg"
function HomeSection() {
    return (
        <div>
            <div className="bg-gray-100">
                <div className="container hidden lg:block px-20 pt-48">
                    <div className="relative flex">
                        <div className="pl-20 pt-48">
                            <h1 className="mb-5 max-w-xs text-4xl font-extrabold">Pasport evaziga avto kredit</h1>
                            <p className="mb-10 max-w-xs text-base font-normal text-gray-600">Bizning 'Asia Auto' avtosalonida eng zamonaviy avtomobillar uchun avtokreditlar beriladi</p>
                            <button className="rounded-full bg-white px-8 py-4 text-base font-normal">Biz bilan bog‘lanish</button>
                        </div>
                        <div className="relative ml-auto">
                            <div className="swiper absolute left-1/3 top-40 max-w-xs rotate-90 text-right">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide w-72">
                                        <div className="grid w-56 rotate-180">
                                            <span className="text-4xl font-extrabold text-red-600">MALIBU</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper swiper-3d max-w-4xl pt-24">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide w-700">
                                        <Image className="h-100 object-cover" src={Cars} alt="Malibu" width={700} height={100} />
                                    </div>
                                </div>
                            </div>
                            <div className="ml-auto mr-48 hidden max-w-xs items-center rounded-2xl bg-white lg:flex">
                                <div className="swiper w-16 h-9">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide w-16">
                                            <Image src={Cars} alt="Malibu" width={64} height={36} />
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper w-16">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide text-base font-medium">Malibu</div>
                                    </div>
                                </div>
                                <div className="flex rounded-2xl bg-red-600">
                                    <span className="py-6 px-8"> <GrPrevious className='text-white w-[19px] h-[18px] font-bold ' /></span>
                                    <span className="py-6 px-8"> <GrNext className='text-white w-[19px] h-[18px] font-bold ' /> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container block lg:hidden">
                        <div className="flex h-screen flex-col justify-between pb-20 pt-32">
                            <div className="flex flex-col gap-5">
                                <h2 className="text-3xl font-extrabold text-white">Pasport evaziga avto kredit</h2>
                                <p className="text-base font-normal text-gray-300">Bizning 'Asia Auto' avtosalonida eng zamonaviy avtomobillar uchun avtokreditlar beriladi</p>
                            </div>
                            <div className="flex justify-center">
                                <a className="w-48 justify-center rounded-full bg-white px-8 py-4 text-base font-no">
                                    Biz bilan bog‘lanish
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeSection;
