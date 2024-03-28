import React from 'react'
import Img from '../../assets/image.jpg'
const TopNews = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="container max-w-[1000px]">
                    <p className='font-bold mt-8 text-[20px]'>Top News</p>
                    <div className='notify bg-[#F9F9F9] rounded-lg px-3 py-3 mt-12'>
                        <div className='flex gap-2 items-center'>
                            <div className=''>
                                <img src={Img} alt='rect' />
                            </div>
                            <div className=''>
                                <p className='text-[14px] font-bold'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </p>
                                <p className='text-[#708099] text-[12px]'> By Lorem ipsum</p>
                                <p className='text-[#1d848f] text-[12px] font-bold'>Real Estate <span className='text-[#708099] text-[12px]'>. 1m ago</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='notify bg-[#F9F9F9] rounded-lg px-3 py-3 mt-3'>
                        <div className='flex gap-2 items-center'>
                            <div className=''>
                                <img src={Img} alt='rect' />
                            </div>
                            <div className=''>
                                <p className='text-[14px] font-bold'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </p>
                                <p className='text-[#708099] text-[12px]'> By Lorem ipsum</p>
                                <p className='text-[#1d848f] text-[12px] font-bold'>Real Estate <span className='text-[#708099] text-[12px]'>. 1m ago</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNews