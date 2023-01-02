import Nav from '../Components/singleParts/nav'

export default function about() {
    return (
        <div>
            <Nav />
            <div className='bg-[#0A2640] py-[96px]'>
                <div className='max-w-[1000px] mx-auto'>
                    <p className='text-center text-white text-[20px]'>Our numbers</p>
                    <p className='text-center text-white text-[48px]'>Handshake infographic mass market crowdfunding iteration.</p>
                    <div className='mt-[50px] flex justify-between'>
                        <div>
                            <h1 className='text-[96px] text-[#4FE9A4]'>120m</h1>
                            <p className='text-start text-white text-[24px]'>Cool feature title</p>
                        </div>
                        <div>
                            <h1 className='text-[96px] text-[#4FE9A4]'>10.000</h1>
                            <p className='text-start text-white text-[24px]'>Cool feature title</p>
                        </div>
                        <div>
                            <h1 className='text-[96px] text-[#4FE9A4]'>240</h1>
                            <p className='text-start text-white text-[24px]'>Cool feature title</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-[96px]'>
                <div className='max-w-[800px] mx-auto pb-[60px]'>
                    <p className='text-start text-[20px]'>Our team</p>
                    <h1 className='text-start text-[48px] my-[20px]'>The leadership team</h1>
                    <p className='text-start text-[20px] text-justify'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </p>
                </div>
                <div className='max-w-[1000px] mx-auto flex justify-between'>
                    <div>
                        <img src="/team1.png" alt="" />
                        <p className='text-start text-[28px] mt-[20px]'>Michael Scott</p>
                        <p className='text-start text-[20px] text-[#777777] mt-[12px]'>General Manager</p>
                    </div>
                    <div>
                        <img src="/team2.png" alt="" />
                        <p className='text-start text-[28px] mt-[20px]'>Dwight Schrute</p>
                        <p className='text-start text-[20px] text-[#777777] mt-[12px]'>General Manager</p>
                    </div>
                    <div>
                        <img src="/team3.png" alt="" />
                        <p className='text-start text-[28px] mt-[20px]'>Pam Beetsley</p>
                        <p className='text-start text-[20px] text-[#777777] mt-[12px]'>General Manager</p>
                    </div>
                </div>
                <div className='max-w-[1000px] mx-auto flex justify-between mt-[50px]'>
                    <div>
                        <img src="/team3.png" alt="" />
                        <p className='text-start text-[28px] mt-[20px]'>Michael Scott</p>
                        <p className='text-start text-[20px] text-[#777777] mt-[12px]'>General Manager</p>
                    </div>
                    <div>
                        <img src="/team1.png" alt="" />
                        <p className='text-start text-[28px] mt-[20px]'>Dwight Schrute</p>
                        <p className='text-start text-[20px] text-[#777777] mt-[12px]'>General Manager</p>
                    </div>
                    <div>
                        <img src="/team1.png" alt="" />
                        <p className='text-start text-[28px] mt-[20px]'>Pam Beetsley</p>
                        <p className='text-start text-[20px] text-[#777777] mt-[12px]'>General Manager</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
