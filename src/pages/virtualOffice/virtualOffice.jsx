import React from 'react'
import Img from '../../assets/Group 158.png'
const VirtualOffice = () => {
    return (
        <div className="flex justify-center">
            <div className="container max-w-[1000px]">
                <p className='font-bold mt-8 text-[20px]'>Virtual Office</p>
                <div className='notify bg-[#F9F9F9] rounded-lg px-3 py-3 mt-12'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <div className=''>
                                <img src={Img} alt='rect' />
                            </div>
                            <div className=''>
                                <p className='text-[14px] font-bold'>Company Name
                                </p>
                                <div class="star-rating flex text-[12px] items-center">
                                    <svg class="star-icon w-3 h-3 " fill="#f7c300" viewBox="0 0 20 20">
                                        <path d="M10 2l2.5 6h6l-5 4.5 2 6-5.5-4.5-5.5 4.5 2-6-5-4.5h6z" />
                                    </svg>
                                    <span class="rating-text text-[#617c9d]">4.5 (415 reviews)</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div>
                                <button className='rounded py-2 px-6 bg-[#295dfa] text-white font-thin'>Disable</button>
                            </div>
                            <div>
                                <button className='rounded py-2 px-6 bg-[#295dfa] text-white font-thin'>View</button>
                            </div>
                            <div>
                                <button className='rounded py-2 px-6 bg-[#295dfa] text-white font-thin'>Delete</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='notify bg-[#F9F9F9] rounded-lg px-3 py-3 mt-3'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <div className=''>
                                <img src={Img} alt='rect' />
                            </div>
                            <div className=''>
                                <p className='text-[14px] font-bold'>Company Name
                                </p>
                                <div class="star-rating flex text-[12px] items-center">
                                    <svg class="star-icon w-3 h-3 " fill="#f7c300" viewBox="0 0 20 20">
                                        <path d="M10 2l2.5 6h6l-5 4.5 2 6-5.5-4.5-5.5 4.5 2-6-5-4.5h6z" />
                                    </svg>
                                    <span class="rating-text text-[#617c9d]">4.5 (415 reviews)</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div>
                                <button className='rounded py-2 px-6 bg-[#295dfa] text-white font-thin'>Disable</button>
                            </div>
                            <div>
                                <button className='rounded py-2 px-6 bg-[#295dfa] text-white font-thin'>View</button>
                            </div>
                            <div>
                                <button className='rounded py-2 px-6 bg-[#295dfa] text-white font-thin'>Delete</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default VirtualOffice