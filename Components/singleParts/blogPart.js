
const blogPart = () => {
    return (
        <div className="mt-[100px]">
            <p className="text-[20px] text-center text-[#777777]">Our Blog</p>
            <p className="text-[48px] text-center mt-[12px]">Value proposition accelerator product <br /> management venture</p>
            <div className="max-w-[1000px] mx-auto flex justify-between  mt-[80px] pb-[80px]">
                <div className="w-[300px] h-[420px] relative ">
                    <div>
                        <img src="/blog1.png" alt="" />
                        <p className="text-[16px] mt-[24px]">Category <span className="ml-[10px] text-[#777777]">November 22, 2021</span></p>
                        <p className="text-[20px] mt-[12px]">Pitch termsheet backing validation focus release.</p>
                    </div>
                    <div className="flex items-center gap-[10px] absolute bottom-0 left-0">
                        <img src="/b1.png" alt="" />
                        <p className="text-[16px]">Chandler Bing</p>
                    </div>
                </div>
                <div className="w-[300px] h-[420px] relative ">
                    <div>
                        <img src="/blog1.png" alt="" />
                        <p className="text-[16px] mt-[24px]">Category <span className="ml-[10px] text-[#777777]">November 22, 2021</span></p>
                        <p className="text-[20px] mt-[12px]">Pitch termsheet backing validation focus release.</p>
                    </div>
                    <div className="flex items-center gap-[10px] absolute bottom-0 left-0">
                        <img src="/b1.png" alt="" />
                        <p className="text-[16px]">Chandler Bing</p>
                    </div>
                </div>
                <div className="w-[300px] h-[420px] relative ">
                    <div>
                        <img src="/blog2.png" alt="" />
                        <p className="text-[16px] mt-[24px]">Category <span className="ml-[10px] text-[#777777]">November 22, 2021</span></p>
                        <p className="text-[20px] mt-[12px]">Pitch termsheet backing validation focus release.</p>
                    </div>
                    <div className="flex items-center gap-[10px] absolute bottom-0 left-0">
                        <img src="/b3.png" alt="" />
                        <p className="text-[16px]">Chandler Bing</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className='text-[20px] font-bold px-[56px] py-[16px] border-2 rounded-full border-[#0A2640]'>Load more</button>
            </div>
        </div>
    );
};

export default blogPart;