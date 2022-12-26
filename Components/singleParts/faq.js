import { AiFillDownCircle } from 'react-icons/ai';

const faq = () => {
    return (
        <div className="px-[150px] py-[100px]">
            <img src="/FAQ.png" alt="" />
            <div className='flex justify-between mt-[56px]'>
                <p className="text-[35px] max-w-[470px]">We connect our customers with the best, and help them keep up-and stay open.</p>
                <div>
                    <div className='flex justify-between max-w-[460px] border-b-[1px] border-[#C4C4C4] py-[16px]'>
                        <p className='text-[20px]'>We connect our customers with the best?</p><AiFillDownCircle className='text-[30px]' />
                    </div>
                    <div className='flex justify-between max-w-[460px] border-b-[1px] border-[#C4C4C4] py-[16px] mt-2'>
                        <p className='text-[20px]'>Android research & development rockstar? </p><AiFillDownCircle className='text-[30px]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default faq;