import React from 'react'
import Image from 'next/image'
import CarsImage from '@/assets/background-image/MalibuSvg.svg'
function Section() {
    return (
        <section className="overflow-x-hidden gap-10 px-4 md:px-8 lg:px-20 mt-10 ">
            <div className="container mt-[calc(var(--header-height)+16px)]">
                <div className="grid items-center gap-5 lg:flex lg:flex-row  lg:gap-[90px]">
                    <div className="lg:w-1/2">
                        <h2 className="font-sans text-2xl font-semibold text-black">Avtosalon haqida</h2>
                        <p className="pr-[24px] text-start font-sans text-base font-normal text-black lg:px-0">
                            Asia Auto — har bir fuqaroning shaxsiy mashina egasi boʻlish imkoniyati. Chunki bizda avtokredit
                            rasmiylashtirish uchun passportining oʻzi kifoya. Biz avtomobil bozorini batafsil oʻrgangan holda eng qulay
                            takliflarni ishlab chiqdik. Mavjud muammolarga bergan yechimlarimiz bilan 4 yilda minglab mijozlarimizga ega
                            boʻldik. Sizni ham ular orasida koʻrishdan mamnun boʻlamiz!
                        </p>
                        <Image
                            src={CarsImage}
                            alt="cars"
                            loading="lazy"
                            width={727}
                            height={399}
                            decoding="async"
                            className="lg:ml-16 object-cover "
                            style={{ color: 'transparent' }}
                            sizes="(max-width: 750px) 100vw, 50vw"
                        />

                    </div>
                    <ul className="flex flex-col justify-center gap-10 lg:w-[40%]">
                        <li className="rounded-md bg-white px-[30px] py-[25px] shadow-sm lg:mr-6 lg:shadow-lg ">
                            <h2 className="flex items-center gap-4 font-poppins text-xl font-semibold text-black">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.1" width="50" height="50" rx="10" fill="#E31E24"></rect>
                                    <g clip-path="url(#clip0_125_180)">
                                        <path
                                            d="M23.92 10.8133L14.5867 14.96C13.6267 15.3867 13 16.3467 13 17.4V23.6667C13 31.0667 18.12 37.9867 25 39.6667C31.88 37.9867 37 31.0667 37 23.6667V17.4C37 16.3467 36.3733 15.3867 35.4133 14.96L26.08 10.8133C25.4 10.5067 24.6 10.5067 23.92 10.8133ZM21.3867 30.72L17.9333 27.2667C17.4133 26.7467 17.4133 25.9067 17.9333 25.3867C18.4533 24.8667 19.2933 24.8667 19.8133 25.3867L22.3333 27.8933L30.1733 20.0533C30.6933 19.5333 31.5333 19.5333 32.0533 20.0533C32.5733 20.5733 32.5733 21.4133 32.0533 21.9333L23.2667 30.72C22.76 31.24 21.9067 31.24 21.3867 30.72Z"
                                            fill="#E31E24"
                                        ></path>
                                    </g>
                                </svg>
                                Kalitni qo‘lga olguningizgacha
                            </h2>
                            <p className="pt-4 font-sans text-base font-normal text-[#2A2A2B]">
                                Mashina olish fikridan to rasmiylashtirishgacha boʻlgan xizmatlarning barchasi bizda
                            </p>
                        </li>
                        <li className="rounded-md bg-white px-[30px] py-[25px] shadow-sm lg:ml-4 lg:shadow-lg ">
                            <h2 className="flex items-center gap-4 font-poppins text-xl font-semibold text-black">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.1" width="50" height="50" rx="10" fill="#E31E24"></rect>
                                    <g clip-path="url(#clip0_125_181)">
                                        <path
                                            d="M25 26.275L22.1241 29.1083C21.4725 29.76 20.9625 30.5675 20.8066 31.4742C20.3816 34.0808 22.4216 36.3333 25 36.3333C27.5783 36.3333 29.6183 34.0808 29.1933 31.4883C29.0375 30.5817 28.5416 29.76 27.8758 29.1225L25 26.275Z"
                                            fill="#E31E24"
                                        ></path>
                                        <path
                                            d="M30.0433 17.2792C28.3716 19.3617 25 18.1858 25 15.5083V13.3408C25 12.2075 23.7391 11.5275 22.8041 12.1508C19.5033 14.3608 13.6666 19.2908 13.6666 26.4167C13.6666 30.5533 15.8766 34.1658 19.1775 36.135C18.1716 34.69 17.6758 32.8625 18.03 30.9217C18.2991 29.4483 19.0925 28.1167 20.1691 27.0683L24.0083 23.2858C24.5608 22.7475 25.4391 22.7475 25.9916 23.2858L29.8591 27.0967C30.9075 28.1308 31.7008 29.4342 31.9558 30.8933C32.31 32.82 31.8566 34.6333 30.865 36.0783C33.5425 34.4492 35.5258 31.7433 36.1208 28.57C36.985 23.9375 34.9733 19.5458 31.5591 17.095C31.0916 16.7408 30.4258 16.8117 30.0433 17.2792Z"
                                            fill="#E31E24"
                                        ></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_125_181">
                                            <rect width="34" height="34" fill="white" transform="translate(8 8)"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                                Zamonaviy avtoulovlar
                            </h2>
                            <p className="pt-4 font-sans text-base font-normal text-[#2A2A2B]">
                                Avtosalomizda eng soʻnggi rusumdagi mashinalarni ham kreditga olishingiz mumkin
                            </p>
                        </li>
                        <li className="rounded-md bg-white px-[30px] py-[25px] shadow-sm lg:mr-6 lg:shadow-lg ">
                            <h2 className="flex items-center gap-4 font-poppins text-xl font-semibold text-black">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.1" width="50" height="50" rx="10" fill="#E31E24"></rect>
                                    <g clip-path="url(#clip0_125_189)">
                                        <path
                                            d="M26.3066 13.4033L19.8433 19.8667C19.4116 20.2983 19.1616 20.8833 19.1333 21.5033V30.0533C19.1333 30.9833 19.8833 31.8333 20.8333 31.8333H29.1666C30.0966 31.8333 30.8666 30.9833 30.8666 30.0533V21.4867C30.83 20.8833 30.56 20.2983 30.1266 19.8667L23.6633 13.4033C23.1033 12.8433 22.1966 12.8433 21.6366 13.4033ZM25 28.6667C24.2533 28.6667 23.5333 28.3933 22.9916 27.8583C22.4466 27.3233 22.1666 26.5833 22.1966 25.83C22.2533 24.5067 23.3333 23.5 24.6666 23.5C25.3684 23.5 26.0419 23.7638 26.5258 24.2482C27.0097 24.7325 27.2733 25.4067 27.2733 26.1083C27.2733 26.845 26.9906 27.554 26.4883 28.0563C25.986 28.5587 25.277 28.8413 24.5403 28.8413L25 28.6667ZM25.8333 16.6533V19.8333H24.1666V16.6533H25.8333Z"
                                            fill="#E31E24"
                                        ></path>

                                    </g>
                                    <defs>
                                        <clipPath id="clip0_125_189">
                                            <rect width="34" height="34" fill="white" transform="translate(8 8)"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                                Kafolatli xavfsizlik
                            </h2>
                            <p className="pt-4 font-sans text-base font-normal text-[#2A2A2B]">
                                Mashinalarimiz xammasi xavfsizlik va sifat boʻyicha yuqori standartlarga javob beradi
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    )
}

export default Section