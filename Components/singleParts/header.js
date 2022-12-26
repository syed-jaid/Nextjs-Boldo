import React from 'react';

const header = () => {
    return (
        <header>
            <div className='flex justify-between items-center mt-[50px]'>
                <div>
                    <p className='text-[48px] font-normal'>Save time by building  fast <br /> with Boldo Template</p>
                    <p className='text-[#777777] text-[16px] mt-[16px]'>Funding handshake buyer business-to-business metrics iPad partnership. First<br /> mover advantage innovator success deployment non-disclosure.</p>
                    <div className='mt-[50px]'>
                        <button className='text-white text-[20px] font-bold bg-[#0A2640] px-[56px] py-[16px] border-2 rounded-full border-[#0A2640] mr-[28px]'>Buy template</button>
                        <button className=' text-[20px] font-bold px-[56px] py-[16px] border-2 rounded-full border-[#0A2640]'>Explore</button>
                    </div>
                </div>
                <div>
                    <img src="/HeroGraphics.png" alt="" />
                </div>
            </div>
            <div className='flex justify-between items-center mt-[100px]'>
                <img className='w-[144px]' src='/Logo.png' alt="" />
                <img className='w-[145px]' src='/Logo2.png' alt="" />
                <img className='w-[144px]' src='/Logo.png' alt="" />
                <img className='w-[145px]' src='/Logo2.png' alt="" />
                <img className='w-[144px]' src='/Logo.png' alt="" />
                <img className='w-[145px]' src='/Logo2.png' alt="" />
            </div>
        </header>
    );
};

export default header;