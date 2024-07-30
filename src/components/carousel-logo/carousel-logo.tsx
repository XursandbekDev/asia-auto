// pages/index.js
"use client"
import { useState, useEffect } from 'react';

export default function CarouselLogo() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const images = [
        'https://asiaauto.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbmwlogo.2463f588.png&w=640&q=75',//bmw
        'https://asiaauto.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmercedeslogo.d806f033.png&w=1200&q=75',//mers
        'https://asiaauto.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnissan.b50f2675.png&w=256&q=75',//nissan
        'https://asiaauto.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftayota.7efc2d3b.png&w=256&q=75', //toyota
        'https://asiaauto.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdodge.41e5e2ee.png&w=256&q=75',//doge
        'https://asiaauto.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhyundai.75777f37.png&w=256&q=75',// hyundai
        'https://asiaauto.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjeep.f2ded1a8.png&w=128&q=75',//jeep
        'https://asiaauto.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchevrolet.e5f3e3b3.png&w=96&q=75',//chevrolet
        'https://asiaauto.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fford.bc071339.png&w=256&q=75'//ford
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex === images.length) {
                setTransitionEnabled(false);
                setCurrentIndex(0);
            } else {
                setTransitionEnabled(true);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }
        }, 2000); // 2 soniyada bir marta o'zgaradi

        return () => clearInterval(interval);
    }, [currentIndex]);

    const transitionClass = transitionEnabled ? 'transition-transform duration-500' : '';

    return (
        <div className='bg-white md:px-32  ' >
            <div className=' flex flex-col items-start w-full' >
                <h1 className='text-2xl font-semibold '> 20 dan ziyod </h1>
                <p className='text-red-600 font-semibold text-2xl' > brand mahsulotlar </p>
                <div className=" flex  w-full  ">
                    <div className=" w-full overflow-hidden">
                        <div
                            className={`flex  gap-6 ${transitionClass}`}
                            style={{ transform: `translateX(-${currentIndex * 10}%)` }}
                            onTransitionEnd={() => {
                                if (currentIndex === images.length) {
                                    setTransitionEnabled(false);
                                    setCurrentIndex(0);
                                }
                            }}
                        >
                            {images.concat(images).map((src, index) => (
                                <div className="min-w-[14.28%] object-cover   " key={index}>
                                    <img src={src} alt={`Image ${index + 1}`} className="w-2/3 h-44 object-contain  " />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
