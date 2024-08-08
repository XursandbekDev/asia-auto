import React from 'react'
import Image from 'next/image'
function CarsText() {
    return (
        <div className=" mt-10 flex items-center overflow-hidden">
            <h2 className="sr-only">BIZNING AVTOMOBILLAR</h2>
            <div className="font-poppins text-4xl font-bold text-black">
                BIZNING <br />
                <span className="text-[#E31E24]">MAHSULOTLAR</span>
            </div>
            <Image
                alt="Pattern"
                width={1062}
                height={54}
                decoding="async"
                data-nimg="1"
                className="pointer-events-none hidden w-full select-none lg:block"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falso.9e1e16db.png&amp;w=3840&amp;q=75"
                style={{ color: 'transparent' }}
            />
        </div>

    )
}

export default CarsText