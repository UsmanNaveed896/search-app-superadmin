import React from 'react'

const AddNews = () => {
    return (
        <>
            <div className='addNews flex justify-center flex-col items-center pb-8'>
                <div className='mt-8 container max-w-[80%] rounded-xl border-[#d0dcff] border  bg-[#f6faff]  px-3 py-2 pb-16'>
                    <h1 className='font-bold '>News</h1>
                    <div className='flex justify-center gap-3 items-start '>
                        <div className='bg-[#d7e7fa] py-12 px-12 rounded-xl mt-4'>
                            <h1 className='font-bold '>Photos</h1>
                            <div className=' rounded-xl py-3 px-3 pl-5 bg-[#ffffff]'>
                                <i className='fa fa-plus'></i>
                            </div>
                        </div>

                        <div className= 'rounded-xl mt-4'>
                            <div>
                                <input className='py-3 w-full pl-2 rounded-full bg-[#d7e7fa]' placeholder='Title' type='text' />
                                <textarea className='pb-8 pt-2 w-full  pl-2 rounded-xl mt-6 bg-[#d7e7fa]' placeholder='News' rows={7}></textarea>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='mt-8 container max-w-[80%] rounded-xl border-[#d0dcff] border  bg-[#f6faff]  px-3 py-2 pb-16'>
                    <h1 className='font-bold '>News</h1>
                    <div className='flex justify-center gap-3 items-start '>
                        <div className='bg-[#d7e7fa] py-12 px-12 rounded-xl mt-4'>
                            <h1 className='font-bold '>Photos</h1>
                            <div className=' rounded-xl py-3 px-3 pl-5 bg-[#ffffff]'>
                                <i className='fa fa-plus'></i>
                            </div>
                        </div>

                        <div className= 'rounded-xl mt-4'>
                            <div>
                                <input className='py-3 w-full pl-2 rounded-full bg-[#d7e7fa]' placeholder='Title' type='text' />
                                <textarea className='pb-8 pt-2 w-full  pl-2 rounded-xl mt-6 bg-[#d7e7fa]' placeholder='News' rows={7}></textarea>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='mt-8 container max-w-[80%] rounded-xl border-[#d0dcff] border  bg-[#f6faff]  px-3 py-2 pb-16'>
                    <h1 className='font-bold '>News</h1>
                    <div className='flex justify-center gap-3 items-start '>
                        <div className='bg-[#d7e7fa] py-12 px-12 rounded-xl mt-4'>
                            <h1 className='font-bold '>Photos</h1>
                            <div className=' rounded-xl py-3 px-3 pl-5 bg-[#ffffff]'>
                                <i className='fa fa-plus'></i>
                            </div>
                        </div>

                        <div className= 'rounded-xl mt-4'>
                            <div>
                                <input className='py-3 w-full pl-2 rounded-full bg-[#d7e7fa]' placeholder='Title' type='text' />
                                <textarea className='pb-8 pt-2 w-full  pl-2 rounded-xl mt-6 bg-[#d7e7fa]' placeholder='News' rows={7}></textarea>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNews