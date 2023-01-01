import React from 'react';

const imagegrid = () => {
    return (
        <div>
            <div className='flex justify-between px-[50px] gap-[50px] pb-[100px]'>
                <div>
                    <img className='mb-[50px]' src="/sl1.png" alt="" />
                    <img src="/sl2.png" alt="" />
                </div>
                <img src="/sm.png" alt="" />
                <div>
                    <img className='mb-[50px]' src="/sr1.png" alt="" />
                    <img src="/sr2.png" alt="" />
                </div>
            </div>
            <div className='max-w-[800px] mx-auto mb-[90px]'>
                <p className='text-start text-[20px]'>Our story</p>
                <h1 className='text-start text-[48px] my-[20px]'>Handshake infographic mass market crowdfunding iteration.</h1>
                <p className='text-start text-[20px] text-justify'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. </p>
            </div>
        </div>
    );
};

export default imagegrid;