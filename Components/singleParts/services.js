import { FiArrowRight } from 'react-icons/fi';

const services = () => {
    return (
        <div className="px-[140px] py-[80px] bg-[#0A2640] mt-[75px]">
            <p className="text-center text-[#F1F1F1] text-[20px] mb-[12px]">Our services</p>
            <p className="text-center text-[48px] text-white">Handshake infographic mass market crowdfunding iteration.</p>
            <div className='mt-[72px] flex justify-between gap-[70px]'>
                <div className=''>
                    <img src="/servicesImg1.png" alt="" />
                    <p className="text-[24px] text-white mt-[24px]">Cool feature title</p>
                    <p className="text-[20px] text-white mt-[28px] pb-[8px] w-[150px] border-b-[1px] border-white-600">Explore page <FiArrowRight className='inline ml-2' /></p>
                </div>
                <div className=''>
                    <img src="/servicesImg2.png" alt="" />
                    <p className="text-[24px] text-white mt-[24px]">Even cooler feature</p>
                    <p className="text-[20px] text-white mt-[28px] pb-[8px] w-[150px] border-b-[1px] border-white-600">Explore page <FiArrowRight className='inline ml-2' /></p>
                </div>
                <div className=''>
                    <img src="/servicesImg3.png" alt="" />
                    <p className="text-[24px] text-white mt-[24px]">Cool feature title</p>
                    <p className="text-[20px] text-white mt-[28px] pb-[8px] w-[150px] border-b-[1px] border-white-600">Explore page <FiArrowRight className='inline ml-2' /></p>
                </div>
            </div>
        </div>
    );
};

export default services;