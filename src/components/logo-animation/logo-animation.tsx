import React from 'react'
import Image from 'next/image'
import CarLogo from "@/assets/background-image/MalibuSvg.svg"
function LogoAnimation() {
    return (
        <div className="overflow-x-hidden bg-white">
            <div className="container mx-auto">
                <div className="hidden lg:flex justify-between">
                    <h2 className="pt-10 text-2xl font-bold text-black">
                        20 dan ziyod <br />
                        <span className="text-[#E31E24]">brand mahsulotlar</span>
                    </h2>
                    <Image
                        src={CarLogo}
                        alt=""
                        width={296}
                        height={72}
                        loading="lazy"
                        className="text-transparent"
                    />
                </div>
                <div className="py-2">
                    <div className="swiper swiper-initialized swiper-horizontal z-10 overflow-visible lg:overflow-hidden">
                        <div className="swiper-wrapper">
                            {/* Slide 1 */}
                            <div className="swiper-slide" style={{ width: '98.8571px', marginRight: '50px' }}>
                                <Image
                                    src={CarLogo}
                                    alt=""
                                    width={134}
                                    height={38}
                                    loading="lazy"
                                    className="object-contain"
                                />
                            </div>
                            {/* Slide 2 */}
                            <div className="swiper-slide" style={{ width: '98.8571px', marginRight: '50px' }}>
                                <Image
                                    src={CarLogo}
                                    alt=""
                                    width={141}
                                    height={40}
                                    loading="lazy"
                                    className="object-contain"
                                />
                            </div>
                            {/* Continue with other slides */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoAnimation