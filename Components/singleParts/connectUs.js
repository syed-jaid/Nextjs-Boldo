
const connectUs = () => {
    return (
        <div className="px-[100px] py-[130px]">
            <div className="w-[1200px] h-[400px] bg-[#0A2640] rounded-[12px] text-center p-[72px]" style={{ backgroundImage: `url("/connectUsBN.png")` }}>
                <p className="text-[48px] text-white">An enterprise template to ramp <br /> up your company website</p>
                <div className="flex justify-center mt-[50px]">
                    <input className="px-[24px] w-[300px] mr-[20px] rounded-full" type="text" placeholder="Your email address" name="" id="" />
                    <button className='text-[20px] text-white font-semibold px-[56px] py-[15px] border-2 rounded-full bg-[#65E4A3] border-[#65E4A3]'>Load more</button>
                </div>
            </div>
        </div>
    );
};

export default connectUs;