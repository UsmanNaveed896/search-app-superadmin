import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style.css'
import Img from '../../assets/Group 48095862.png'
import Img2 from '../../assets/Group 48095788.png'
import Img3 from '../../assets/Group 48095863.png'
import Img4 from '../../assets/Layout.png'
import Img5 from '../../assets/Rectangle 22.png'
import Charts from '../../components/dashboardCharts/charts';
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Dashboard = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const barChartData = {
        labels: ["06", "07", "08", "09", "10", "11", "12", "13", '14', '15', "16", "17", "18", "19", '20', '21'],
        datasets: [{ values: [0, 200, 600, 800,] }],
    };

    const data = [
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', packagename: 'Basic', wallet: '$100' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '987-654-3210', packagename: 'Premium', wallet: '$200' },
        // Add more data as needed
    ];
    const percentage = 66;
    const shadow = '4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)';
    return (
        <>
            <div className="flex justify-center">
                <div className="container max-w-[1100px]">
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='column1'>
                            <div className='rounded-xl px-3 py-2 bg-[#f6faff] mt-12 border-[#d0dcff] border'>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h1 className='font-bold text-[18px]'>Total User</h1>
                                        <h1 className='text-[#295DFA] mt-2 font-bold'>684</h1>
                                    </div>
                                    <div >
                                        <div style={{ width: '100px', height: '100px', }}>
                                            <CircularProgressbar
                                                styles={buildStyles({
                                                    rotation: 0,
                                                    textSize: '16px',
                                                    pathTransitionDuration: 0.5,
                                                    pathTransition: 'none',
                                                    // Colors
                                                    pathColor: `#f6faff, ${percentage / 100})`,
                                                    textColor: '#f6faff',
                                                    trailColor: '#295DFA',
                                                    backgroundColor: '#f6faff',
                                                })}
                                                value={percentage} text={`${percentage}%`} />
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='column2'>
                            <div className='rounded-xl px-3 py-2 bg-[#f6faff] mt-12 border-[#d0dcff] border'>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h1 className='font-bold text-[18px]'>Total Seller</h1>
                                        <h1 className='text-[#295DFA] mt-2 font-bold'>544</h1>
                                    </div>
                                    <div >
                                        <div style={{ width: '100px', height: '100px', }}>
                                            <CircularProgressbar
                                                styles={buildStyles({
                                                    rotation: 0,
                                                    textSize: '16px',
                                                    pathTransitionDuration: 0.5,
                                                    pathTransition: 'none',
                                                    // Colors
                                                    pathColor: `#f6faff, ${percentage / 100})`,
                                                    textColor: '#f6faff',
                                                    trailColor: '#295DFA',
                                                    backgroundColor: '#f6faff',
                                                })}
                                                value={percentage} text={`${percentage}%`} />
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='column3'>
                            <div className='rounded-xl px-3 py-2 bg-[#f6faff] mt-12 border-[#d0dcff] border'>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h1 className='font-bold text-[18px]'>Total Customer</h1>
                                        <h1 className='text-[#295DFA] mt-2 font-bold'>1254</h1>
                                    </div>
                                    <div >
                                        <div style={{ width: '100px', height: '100px', }}>
                                            <CircularProgressbar
                                                styles={buildStyles({
                                                    rotation: 0,
                                                    textSize: '16px',
                                                    pathTransitionDuration: 0.5,
                                                    pathTransition: 'none',
                                                    // Colors
                                                    pathColor: `#f6faff, ${percentage / 100})`,
                                                    textColor: '#f6faff',
                                                    trailColor: '#295DFA',
                                                    backgroundColor: '#f6faff',
                                                })}
                                                value={percentage} text={`${percentage}%`} />
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 mt-6 gap-4'>
                        <div className='column1 col-span-2'>
                            <div className='flex gap-4 justify-between'>
                                <div className='rating w-full'>
                                    <div className='rounded-xl px-3 py-2 bg-[#f6faff] mt-12 border-[#d0dcff] border'>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <h1 className='font-bold text-[18px]'>Total User</h1>
                                                <h1 className='text-[#295DFA] mt-2 font-bold'>684</h1>
                                            </div>
                                            <div >
                                                <div style={{ width: '100px', height: '100px', }}>
                                                    <CircularProgressbar
                                                        styles={buildStyles({
                                                            rotation: 0,
                                                            textSize: '16px',
                                                            pathTransitionDuration: 0.5,
                                                            pathTransition: 'none',
                                                            // Colors
                                                            pathColor: `#f6faff, ${percentage / 100})`,
                                                            textColor: '#f6faff',
                                                            trailColor: '#295DFA',
                                                            backgroundColor: '#f6faff',
                                                        })}
                                                        value={percentage} text={`${percentage}%`} />
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='rating w-full'>
                                    <div className='rounded-xl px-3 py-2 bg-[#f6faff] mt-12 border-[#d0dcff] border'>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <h1 className='font-bold text-[18px]'>Total User</h1>
                                                <h1 className='text-[#295DFA] mt-2 font-bold'>684</h1>
                                            </div>
                                            <div >
                                                <div style={{ width: '100px', height: '100px', }}>
                                                    <CircularProgressbar
                                                        styles={buildStyles({
                                                            rotation: 0,
                                                            textSize: '16px',
                                                            pathTransitionDuration: 0.5,
                                                            pathTransition: 'none',
                                                            // Colors
                                                            pathColor: `#f6faff, ${percentage / 100})`,
                                                            textColor: '#f6faff',
                                                            trailColor: '#295DFA',
                                                            backgroundColor: '#f6faff',
                                                        })}
                                                        value={percentage} text={`${percentage}%`} />
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='graph rounded-xl px-3 py-2 bg-[#f6faff] mt-12 border-[#d0dcff] border'>
                                <h1 className='font-bold'>Total Revenue</h1>
                                <div className='flex gap-2 items-center'>
                                    <h1 className='font-bold text-[#295DFA] text-[16px]'>$5122422</h1>
                                    <div className='flex items-center gap-4 my-4'>
                                        <i class="fa fa-arrow-up text-[#295DFA]" aria-hidden="true"></i>
                                        <div className='text-[12px]'>
                                            <h1>0.8</h1>
                                            <p>Than Last Day</p>
                                        </div>
                                    </div>
                                </div>
                                <Charts chartType="bar" barChartData={barChartData} />
                            </div>
                        </div>
                        <div className='rounded-xl px-3 py-2 bg-[#f6faff] mt-12 border-[#d0dcff] border pb-8'>
                            <h1 className='font-bold text-[16px p-3]'>Payment</h1>
                            <div className=" py-3 px-4 mt-6 rounded-xl "
                                style={{ boxShadow: shadow }}
                            >
                                <div className="flex justify-center">
                                    <img src={Img} alt="abc" />
                                </div>
                            </div>
                            <div className=" py-3 px-4  rounded-xl mt-5"
                                style={{ boxShadow: shadow }}
                            >
                                <div className="flex justify-center">
                                    <img src={Img2} alt="abc" />
                                </div>
                            </div>
                            <div className=" py-3 px-4  rounded-xl mt-5"
                                style={{ boxShadow: shadow }}
                            >
                                <div className="flex justify-center">
                                    <img src={Img3} alt="abc" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-3 mt-6 gap-4'>
                        <div className='col-span-2 rounded-xl px-3 py-2 bg-[#f6faff] mt-12 border-[#d0dcff] border'>
                            <img src={Img4} alt='location' />
                        </div>
                        <div className='rounded-xl px-3 py-2 bg-[#f6faff] mt-12 border-[#d0dcff] border'>
                            <div>
                                <MultiCarousel responsive={responsive} showDots={true} removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}>
                                    <div className='relative'>
                                        <div className='absolute'>
                                            <div className='head  px-3 w-[100px] rounded-full bg-white border border-[#1E8E94] text-[#1E8E94] mt-1 ml-1'>
                                                <h1 className='text-[12px] '>Limited Time</h1>
                                            </div>
                                            <h1 className='font-semibold text-[14px] mt-1 ml-1'>Get Special Offer <br></br> up to
                                                <span className='text-[16px] font-bold font-semibold '>40 %</span> </h1>
                                            <h1 className='text-[12px] mt-6  font-semibold ml-1'>All washing services available</h1>
                                            <div className='bg-[#1F5E7C] rounded-full h-6 w-6 text-white text-center absolute bottom-[-1.5rem] right-[-5rem]'>
                                                <span className='pt-[-6px] font-bold'>+</span>
                                            </div>
                                        </div>
                                        <img src={Img5} alt='abc' />
                                    </div>
                                    <div className='relative'>
                                        <div className='absolute'>
                                            <div className='head  px-3 w-[100px] rounded-full bg-white border border-[#1E8E94] text-[#1E8E94] mt-1 ml-1'>
                                                <h1 className='text-[12px] '>Limited Time</h1>
                                            </div>
                                            <h1 className='font-semibold text-[14px] mt-1 ml-1'>Get Special Offer <br></br> up to
                                                <span className='text-[16px] font-bold font-semibold '>40 %</span> </h1>
                                            <h1 className='text-[12px] mt-6  font-semibold ml-1'>All washing services available</h1>
                                            <div className='bg-[#1F5E7C] rounded-full h-6 w-6 text-white text-center absolute bottom-[-1.5rem] right-[-5rem]'>
                                                <span className='pt-[-6px] font-bold'>+</span>
                                            </div>
                                        </div>
                                        <img src={Img5} alt='abc' />
                                    </div>
                                    <div className='relative'>
                                        <div className='absolute'>
                                            <div className='head  px-3 w-[100px] rounded-full bg-white border border-[#1E8E94] text-[#1E8E94] mt-1 ml-1'>
                                                <h1 className='text-[12px] '>Limited Time</h1>
                                            </div>
                                            <h1 className='font-semibold text-[14px] mt-1 ml-1'>Get Special Offer <br></br> up to
                                                <span className='text-[16px] font-bold font-semibold '>40 %</span> </h1>
                                            <h1 className='text-[12px] mt-6  font-semibold ml-1'>All washing services available</h1>
                                            <div className='bg-[#1F5E7C] rounded-full h-6 w-6 text-white text-center absolute bottom-[-1.5rem] right-[-5rem]'>
                                                <span className='pt-[-6px] font-bold'>+</span>
                                            </div>
                                        </div>
                                        <img src={Img5} alt='abc' />
                                    </div>
                                    <div className='relative'>
                                        <div className='absolute'>
                                            <div className='head  px-3 w-[100px] rounded-full bg-white border border-[#1E8E94] text-[#1E8E94] mt-1 ml-1'>
                                                <h1 className='text-[12px] '>Limited Time</h1>
                                            </div>
                                            <h1 className='font-semibold text-[14px] mt-1 ml-1'>Get Special Offer <br></br> up to
                                                <span className='text-[16px] font-bold font-semibold '>40 %</span> </h1>
                                            <h1 className='text-[12px] mt-6  font-semibold ml-1'>All washing services available</h1>
                                            <div className='bg-[#1F5E7C] rounded-full h-6 w-6 text-white text-center absolute bottom-[-1.5rem] right-[-5rem]'>
                                                <span className='pt-[-6px] font-bold'>+</span>
                                            </div>
                                        </div>
                                        <img src={Img5} alt='abc' />
                                    </div>

                                    <div className='relative'>
                                        <div className='absolute'>
                                            <div className='head  px-3 w-[100px] rounded-full bg-white border border-[#1E8E94] text-[#1E8E94] mt-1 ml-1'>
                                                <h1 className='text-[12px] '>Limited Time</h1>
                                            </div>
                                            <h1 className='font-semibold text-[14px] mt-1 ml-1'>Get Special Offer <br></br> up to
                                                <span className='text-[16px] font-bold font-semibold '>40 %</span> </h1>
                                            <h1 className='text-[12px] mt-6  font-semibold ml-1'>All washing services available</h1>
                                            <div className='bg-[#1F5E7C] rounded-full h-6 w-6 text-white text-center absolute bottom-[-1.5rem] right-[-5rem]'>
                                                <span className='pt-[-6px] font-bold'>+</span>
                                            </div>
                                        </div>
                                        <img src={Img5} alt='abc' />
                                    </div>
                                </MultiCarousel>
                            </div>

                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='graph rounded-xl px-3 py-2 bg-[#f6faff] mt-12 border-[#d0dcff] border col-span-2'>
                            <h1 className='font-bold'>Customer Insights</h1>

                            <Charts chartType="line" barChartData={barChartData} />
                        </div>
                        <div className='column2  '>
                            <h1 className='font-bold mt-4'>Customer Insights</h1>
                            <div className='rounded-xl mt-3 px-3 py-2 bg-[#f6faff]  border-[#d0dcff] border'>
                                <h1 className='font-bold '>Real Estate</h1>
                                <Charts chartType="line" barChartData={barChartData} />
                            </div>
                        </div>
                    </div>
                    <div className='mt-8 max-w-[66%] rounded-xl border-[#d0dcff] border  bg-[#f6faff]  px-3 py-2'>
                        <h1 className='font-bold '>Recent Signup</h1>
                        <table className="min-w-full  text-[12px]">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 ">ID</th>
                                    <th className="py-2 px-4 ">Name</th>
                                    <th className="py-2 px-4 ">Email</th>
                                    <th className="py-2 px-4 ">Phone</th>
                                    <th className="py-2 px-4 ">Package Name</th>
                                    <th className="py-2 px-4 ">Wallet</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row) => (
                                    <tr key={row.id}>
                                        <td className="py-2 px-4 ">{row.id}</td>
                                        <td className="py-2 px-4 ">{row.name}</td>
                                        <td className="py-2 px-4 ">{row.email}</td>
                                        <td className="py-2 px-4 ">{row.phone}</td>
                                        <td className="py-2 px-4 ">{row.packagename}</td>
                                        <td className="py-2 px-4 ">{row.wallet}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className='mt-8 max-w-[66%] rounded-xl border-[#d0dcff] border  bg-[#f6faff]  px-3 py-2 pb-16'>
                        <h1 className='font-bold '>News</h1>

                        <div className='flex justify-center gap-3'>
                            <div className='bg-[#d7e7fa] py-12 px-12 rounded-xl mt-4'>
                                <h1 className='font-bold '>Photos</h1>
                                <div className=' rounded-xl py-3 px-3 pl-5 bg-[#ffffff]'>
                                    <i className='fa fa-plus'></i>
                                </div>
                            </div>

                            <div className='  rounded-xl mt-4'>
                                <div>
                                    <input className='py-3 pr-32 pl-2 rounded-full bg-[#d7e7fa]' placeholder='Title' type='text' />
                                    <textarea className='pb-8 pt-2 pr-36 pl-2 rounded-xl mt-6 bg-[#d7e7fa]' placeholder='News'></textarea>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='mt-8 max-w-[66%] rounded-xl border-[#d0dcff] border  bg-[#f6faff]  px-3 py-2'>
                    <h1 className='font-bold '>Live</h1>
                    <div className='flex justify-center pb-16'>
                        <button className='rounded-full bg-[#295dfa] py-2 px-16 text-white mt-12 '>Go Live</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard