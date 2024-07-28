import React from 'react';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

function HomeCars() {
    return (
        <>

            <div className="flex items-end justify-between">
                <div>
                    <h3 className="font-poppins text-4xl font-bold text-black">
                        BIZNING <br />
                        <span className="text-red-500">MAHSULOTLAR</span>
                    </h3>
                </div>
                <div className="lg:flex items-center gap-7 cursor-pointer hidden  ">
                    <div className="cursor-pointer rounded-full bg-slate-300  p-2  ">
                        <GrLinkPrevious className='w-6 h-6 text-red-500' />
                    </div>
                    <div className="cursor-pointer  rounded-full bg-slate-400 p-2">
                        <GrLinkNext className='w-6 h-6 text-red-500' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeCars;
