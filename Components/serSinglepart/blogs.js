import React from 'react';

const blogs = () => {
    return (
        <div className='py-[120px] bg-[#0A2640] mt-[120px]'>
            <div className='max-w-[800px] mx-auto'>
                <p className='text-start text-white text-[20px]'>Our values</p>
                <h1 className='text-start text-white text-[48px] my-[20px]'>Things in we believe</h1>
                <p className='text-start text-white text-[20px] text-justify'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </p>
                <div>
                    <div className='mt-[70px] flex'>
                        <img className='mr-[50px]' src="/value1.png" alt="" />
                        <div>
                            <p className='text-white text-[28px] text-start'>We are commited.</p>
                            <p className='text-white text-[20px] text-start'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
                        </div>
                    </div>
                    <div className='mt-[70px] flex'>
                        <img className='mr-[50px]' src="/value2.png" alt="" />
                        <div>
                            <p className='text-white text-[28px] text-start'>We are commited.</p>
                            <p className='text-white text-[20px] text-start'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
                        </div>
                    </div>
                    <div className='mt-[70px] flex'>
                        <img className='mr-[50px]' src="/value3.png" alt="" />
                        <div>
                            <p className='text-white text-[28px] text-start'>We are commited.</p>
                            <p className='text-white text-[20px] text-start'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default blogs;