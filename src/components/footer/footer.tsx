import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import Logo from "@/assets/Logo/NavbarLogo.svg"
import { BsTelegram } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";//facebook
import { TbPhoneCall } from "react-icons/tb";//telefon
import { CgMail } from "react-icons/cg"; //sms
function Footer() {
    return (
        <div className='bg-slate-700 w-full lg:pl-32 lg:pr-44 pt-10 flex flex-row items-start justify-between pb-10 ' >
            <div className=' flex flex-col items-start  ' >
                <Image src={Logo} height={52} width={252} alt='Logo' />
                <p className='text-white text-xs mt-1 font-normal ' >MINIMAL IMKONIYATDAN MAKSIMAL NATIJA</p>
                <div className='flex flex-row items-center gap-5 mt-6 ' >
                    <Link href={"https://t.me/asiaautocredit"} className='text-white bg-white rounded-full  ' >
                        <BsTelegram className='bg-black text-4xl rounded-full text-white ' />
                    </Link>
                    <Link href={"https://www.instagram.com/asiaautocredit/"} className=' p-0.5 text-white bg-white rounded-full '  >
                        <FaInstagram className=' text-3xl bg-transparent text-black ' />
                    </Link>
                    <Link href={"https://www.facebook.com/asiaautocredituz/"} className=' rounded-full bg-white b   ' >
                        <FaFacebook className=' border-white text-4xl  rounded-full bg-black  text-white ' />
                    </Link >
                </div>
            </div>
            <div className=' hidden lg:flex flex-col items-start gap-y-4  ' >
                <Link href={"#"} className='text-white font-normal text-lg ' >Biz haqimizda</Link>
                <Link href={"#"} className='text-white font-normal text-lg ' >Bizning avtomobillar</Link>
                <Link href={"#"} className='text-white font-normal text-lg ' >Bizning yangliklar</Link>
                <Link href={"#"} className='text-white font-normal text-lg ' >Bizning aksiyalar</Link>
                <Link href={"#"} className='text-white font-normal text-lg ' >Biz bilan bog‘lanish</Link>
            </div>
            <div className='flex flex-col items-start gap-3 text-white   ' >
                <div className='flex gap-4 ' >
                    <TbPhoneCall className='text-white text-2xl' />
                    <Link href={"tel:+998555009191"} >+998 (55) 500-91-91  </Link>
                </div>
                <div className='flex gap-4 ' >
                    <TbPhoneCall className='text-white text-2xl' />
                    <Link href={"tel:+998712019191"} >+998 (71) 201-91-91  </Link>
                </div>
                <div className='flex gap-4 ' >
                    <CgMail className='text-white text-2xl' />
                    <p>Manzil:</p>
                </div>
                <div className='pl-10 flex'>
                    <p className='text-white' >O‘zbekiston, Toshkent shahri, Sirg‘ali tumani,<br />Navro‘z ko‘cha 3-uy</p>
                </div>

            </div>
        </div>
    )
}

export default Footer