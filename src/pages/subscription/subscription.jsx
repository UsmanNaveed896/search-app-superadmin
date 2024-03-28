import React from 'react'

const Subscription = () => {
    return (
        <>
            <div className="flex justify-center mt-12">
                <div className="container max-w-[1000px]">
                    <div class="text-center text-black mt-16">
                        <h1 class="text-3xl font-bold mb-4">Choose Your Plan</h1>
                        <p class="text-gray-600 mb-6">14 days unlimited free trial.No Contract or Credit Card required.</p>
                        <div class="flex items-center justify-center space-x-4">
                            <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div class="w-9 h-5 bg-[#1f5e7c] peer-focus:outline-none  rounded-full peer dark:bg-[#1f5e7c] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span class="text-[black] font-bold text-[16px] mt-[-3px] ml-3">Monthly</span>
                            </label>


                            <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div class="w-9 h-5 bg-[#1f5e7c] peer-focus:outline-none  rounded-full peer dark:bg-[#1f5e7c] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span class="text-[black] font-bold text-[16px] mt-[-3px] ml-3">Yearly</span>
                            </label>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 mt-8 gap-8 pb-6'>
                        <div className='column1'>
                            <div className='rounded-xl bg-[#1f5e7c] text-[#a4b7bf]'>
                                <div className=' px-8 py-4 '>
                                    <div className='content'>
                                        <h1 className='text-white font-bold'>lorem Ipsum</h1>
                                        <h1 className='mt-3 text-[12px]'>lorem Ipsum lorem Ipsum</h1>
                                        <p className='font-bold text-[40px] text-white'>$15 
                                        <span className='text-[12px] text-[#a4b7bf]'>per seat/month</span></p>
                                        <div className='btn flex justify-center mt-6'>
                                            <button className='rounded bg-white text-[#1f5e7c] text-[12px] py-2 px-5 font-bold'>Create a Free Account</button>
                                        </div>
                                        <div className='list font-bold text-[12px] pb-12 mt-6'>
                                            <ul>
                                                <li className='py-3 '><span className=''>
                                                    <i className='fa fa-check text-[#3ccaf6] mr-2'></i></span>lorem Ipsum lorem Ipsum</li>
                                                    <li className='py-3'><span className=''>
                                                    <i className='fa fa-check text-[#3ccaf6] mr-2'></i></span>lorem Ipsum lorem Ipsum</li>
                                                 <li className='py-3'><span className=''>
                                                    <i className='fa fa-check text-[#3ccaf6] mr-2'></i></span>lorem Ipsum </li>
                                                 <li className='py-3'><span className=''>
                                                    <i className='fa fa-check text-[#3ccaf6] mr-2'></i></span> lorem Ipsum</li>
                                                 <li className='py-3'><span className=''>
                                                    <i className='fa fa-check text-[#3ccaf6] mr-2'></i></span>lorem Ipsum </li>
                                                 <li className='py-3'><span className=''>
                                                    <i className='fa fa-check text-[#3ccaf6] mr-2'></i></span> lorem Ipsum</li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                   
                                </div>
                                <button className='w-full bg-[#1e4aca] py-3 text-white rounded-xl'>Add</button>
                            </div>
                           
                        </div>
                        <div className='column2'>
                            <div className='rounded-xl bg-[white] shadow-xl text-[#a4b7bf]'>
                                <div className=' px-8 py-4 '>
                                    <div className='content'>
                                        <h1 className='text-white font-bold'>lorem Ipsum</h1>
                                        <h1 className='mt-3 text-[12px]'>lorem Ipsum lorem Ipsum</h1>
                                        <p className='font-bold text-[40px] text-black'>$10 
                                        <span className='text-[12px] text-[#a4b7bf]'>per seat/month</span></p>
                                        <div className='btn flex justify-center mt-6'>
                                            <button className='rounded bg-white text-[#1f5e7c] text-[12px] py-2 px-5 font-bold'>Create a Free Account</button>
                                        </div>
                                        <div className='list font-bold text-[12px] pb-12 mt-6'>
                                            <ul>
                                                <li className='py-3 '><span className=''>
                                                    <i className='fa fa-check text-[#3ccaf6] mr-2'></i></span>lorem Ipsum lorem Ipsum</li>
                                                    <li className='py-3'><span className=''>
                                                    <i className='fa fa-check text-[#3ccaf6] mr-2'></i></span>lorem Ipsum lorem Ipsum</li>
                                                 <li className='py-3'><span className=''>
                                                    <i className='fa fa-check text-[#3ccaf6] mr-2'></i></span>lorem Ipsum </li>
                                                 <li className='py-3'><span className=''>
                                                    <i className='fa fa-check text-[#3ccaf6] mr-2'></i></span> lorem Ipsum</li>
                                                 <li className='py-3'><span className=''>
                                                    <i className='fa fa-check text-[#3ccaf6] mr-2'></i></span>lorem Ipsum </li>
                                                 <li className='py-3'><span className=''>
                                                    <i className='fa fa-check text-[#3ccaf6] mr-2'></i></span> lorem Ipsum</li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                   
                                </div>
                                <button className='w-full bg-[#f2f2f2]   py-3 text-[#1e4aca] rounded-xl'>Add</button>
                            </div>
                           
                        </div>
                        <div className='column3'>
                            <div className='rounded-xl bg-[white] shadow-xl text-[#a4b7bf]'>
                                <div className=' px-8 py-4 '>
                                    <div className='content'>
                                        <h1 className='text-white font-bold'>lorem Ipsum</h1>
                                        <h1 className='mt-3 text-[12px]'>lorem Ipsum lorem Ipsum</h1>
                                        <p className='font-bold text-[40px] text-black'>$05 
                                        <span className='text-[12px] text-[#a4b7bf]'>per seat/month</span></p>
                                        <div className='btn flex justify-center mt-6'>
                                            <button className='rounded bg-white text-[#1f5e7c] text-[12px] py-2 px-5 font-bold'>Create a Free Account</button>
                                        </div>
                                        <div className='list font-bold text-[12px] pb-12 mt-6'>
                                            <ul>
                                                <li className='py-3 '><span className=''>
                                                    <i className='fa fa-check text-[#3ccaf6] mr-2'></i></span>lorem Ipsum lorem Ipsum</li>
                                                    <li className='py-3'><span className=''>
                                                    <i className='fa fa-check text-[#3ccaf6] mr-2'></i></span>lorem Ipsum lorem Ipsum</li>
                                                 <li className='py-3'><span className=''>
                                                    <i className='fa fa-check text-[#3ccaf6] mr-2'></i></span>lorem Ipsum </li>
                                                 <li className='py-3'><span className=''>
                                                    <i className='fa fa-check text-[#3ccaf6] mr-2'></i></span> lorem Ipsum</li>
                                                 <li className='py-3'><span className=''>
                                                    <i className='fa fa-check text-[#3ccaf6] mr-2'></i></span>lorem Ipsum </li>
                                                 <li className='py-3'><span className=''>
                                                    <i className='fa fa-check text-[#3ccaf6] mr-2'></i></span> lorem Ipsum</li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                   
                                </div>
                                <button className='w-full bg-[#f2f2f2]   py-3 text-[#1e4aca] rounded-xl'>Add</button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscription