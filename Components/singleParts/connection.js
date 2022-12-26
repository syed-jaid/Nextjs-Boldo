import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaLeaf } from 'react-icons/fa';
import { MdOutlineLightMode } from 'react-icons/md';

const connection = () => {
    return (
        <div className='p-[120px]'>
            <div className='flex justify-between items-center'>
                <img src="/sectionConnect1.png" alt="" />
                <div>
                    <p className='text-[36px] mb-[40px]'>We connect our customers <br /> with the best, and help them <br />keep up-and stay open.</p>
                    <p><AiOutlineCheckCircle className='text-[40px] inline mr-[10px] mb-[20px]' /> We connect our customers with the best.</p>
                    <p><AiOutlineCheckCircle className='text-[40px] inline mr-[10px] mb-[20px]' /> Advisor success customer launch party.</p>
                    <p><AiOutlineCheckCircle className='text-[40px] inline mr-[10px] mb-[20px]' /> Business-to-consumer long tail.</p>
                    <button className='text-[20px] text-white bg-black font-semibold bg-[#0A2640] px-[56px] py-[15px] border-2 rounded-full mt-[30px]'>Start now</button>
                </div>
            </div>
            <div className='flex justify-between items-center mt-[100px]'>
                <div>
                    <p className='text-[36px] mb-[40px]'>We connect our customers <br /> with the best, and help them <br />keep up-and stay open.</p>
                    <div className='flex items-center shadow-md bg-[#0A2640] text-white px-[20px] py-[16px] rounded-[5px] mb-[30px]'>
                        <FaLeaf className='text-[20px] inline mr-[10px] mr-[20px]' /><p> We connect our customers with the best.</p>
                    </div>
                    <div className='flex items-center shadow-md px-[20px] py-[16px] rounded-[5px] mb-[30px]'>
                        <FaLeaf className='text-[20px] inline mr-[10px] mr-[20px]' /><p> Advisor success customer launch party.</p>
                    </div>
                    <div className='flex items-center shadow-md px-[20px] py-[16px] rounded-[5px] '>
                        <MdOutlineLightMode className='text-[20px] inline mr-[10px] mr-[20px]' /><p> Business-to-consumer long tail.</p>
                    </div>
                </div>
                <img className='mr-[20px]' src="/sectionAssig2.png" alt="" />

            </div>
        </div>
    );
};

export default connection;