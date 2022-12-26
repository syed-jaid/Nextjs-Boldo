import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';

const review = () => {
    return (
        <div className="bg-[#0A2640] py-[100px] px-[120px]">
            <div className='flex justify-between items-end'>
                <p className="text-[48px] text-white">An enterprise template to ramp <br /> up your company website</p>
                <div className='flex'>
                    <div className='p-[20px] bg-white text-[black] rounded-full mr-[20px]'>
                        <BiLeftArrowAlt className='text-[30px]' />
                    </div>
                    <div className='p-[20px] bg-white text-[black] rounded-full'>
                        <BiRightArrowAlt className='text-[30px]' />
                    </div>
                </div>
            </div>
            <div className='mt-[70px] flex justify-between'>
                <div className='bg-white p-[40px] w-[350px] rounded-[12px] h-[322px]'>
                    <p className='text-[24px]'>“Buyer buzz partner network disruptive non-disclosure agreement business”</p>
                    <div className='flex gap-[16px] mt-[40px]'>
                        <img src="/person1.png" alt="" />
                        <div>
                            <p className='font-semibold text-[16px]'>Albus Dumbledore</p>
                            <small>Manager @ Howarts</small>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-[40px] w-[350px] rounded-[12px]'>
                    <p className='text-[24px]'>“Learning curve infrastructure value proposition <br /> advisor strategy user experience hypotheses investor.”</p>
                    <div className='flex gap-[16px] mt-[40px]'>
                        <img src="/person2.png" alt="" />
                        <div>
                            <p className='font-semibold text-[16px]'>Severus Snape</p>
                            <small>Manager @ Slytherin</small>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-[40px] w-[350px] rounded-[12px] h-[358px]'>
                    <p className='text-[24px]'>“Release facebook responsive web design business model canvas seed money monetization.”</p>
                    <div className='flex gap-[16px] mt-[40px]'>
                        <img src="/person3.png" alt="" />
                        <div>
                            <p className='font-semibold text-[16px]'>Harry Potter</p>
                            <small>Team Leader @ Gryffindor</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default review;