import React from 'react';
import bannerBg from '../../assets/bg-shadow.png'

const Banner = () => {
    return (
        <div
        style={{
            backgroundImage: `url(${bannerBg})`
        }}
         className='flex flex-col justify-center items-center my-10 border border-gray-300 p-5 md:p-20  rounded-2xl bg-cover bg-center space-y-5'>
            
            <div className='text-center space-y-2'>
                <h1 className='text-xl md:text-2xl lg:text-[40px] font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h4 className='text-[16px] md:text-lg lg:text-2xl font-medium'>Beyond Boundaries Beyond Limits</h4>
            </div>
            <button className='btn bg-[#E7FE29] border border-black'>Claim Free Credit</button>
        </div>
    );
};

export default Banner;