// import React from 'react'
// import { ViewState } from '@devexpress/dx-react-scheduler';
// import {
//     Scheduler,
//     DayView,
//     Appointments,
//     Toolbar,
//     ViewSwitcher,
//     DateNavigator,
//     WeekView,
// } from '@devexpress/dx-react-scheduler-material-ui';
// import Img from '../../assets/Ellipse 191.png'


// const Schedulers = () => {
//     const currentDate = '2018-11-01';
//     const schedulerData = [
//         { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
//         { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
//     ];
//     return (
//         <>
//             <h1 className='font-bold pl-8 mt-8'>My Schedule</h1>
//             <div className="flex justify-center pb-6">
//                 <div className="container max-w-[1100px]">
//                     <div className='flex justify-between mt-6'>
//                         <div> <img src={Img} className=" h-12" /></div>
//                         <div>
//                             <button className="mt-2 bg-[#295DFA] text-white text-[12px] py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
//                                 Invite People
//                             </button>
//                         </div>

//                     </div>
//                     <div className=''>
//                         <div className='col-span-2 '>

//                             <div className='rounded-xl px-3 py-2 bg-[#f6faff] mt-12 border-[#d0dcff] border'>
//                                 <Scheduler
//                                     data={schedulerData}
//                                 >
//                                     <ViewState
//                                         currentDate={currentDate}
//                                     />
//                                     <WeekView
//                                         startDayHour={9}
//                                         endDayHour={14}
//                                     />
//                                     <Toolbar />
//                                     <ViewSwitcher />
//                                     <DateNavigator />
//                                     <Appointments />
//                                 </Scheduler>
//                             </div>

//                         </div>
//                     </div>
//                     <div className='card mt-12 flex gap-2'>
//                         <div className="max-w-xs mx-auto overflow-hidden bg-white  border-[#d0dcff] border-2 py-3 px-16 rounded-xl flex justify-center">
//                             <div>
//                                 {/* User Image */}
//                                 <div className='flex justify-center'>
//                                     <img src={Img} className=" " />
//                                 </div>


//                                 {/* Username */}
//                                 <div className="p-4">
//                                     <p className="text-lg font-semibold text-gray-800">User Name</p>

//                                     {/* View User Button */}
//                                     <button className="mt-2 bg-[#295DFA] text-white text-[12px] py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
//                                         View User
//                                     </button>
//                                 </div>
//                             </div>

//                         </div>
//                         <div className="max-w-xs mx-auto overflow-hidden bg-white  border-[#d0dcff] border-2 py-3 px-16 rounded-xl flex justify-center">
//                             <div>
//                                 {/* User Image */}
//                                 <div className='flex justify-center'>
//                                     <img src={Img} className=" " />
//                                 </div>


//                                 {/* Username */}
//                                 <div className="p-4">
//                                     <p className="text-lg font-semibold text-gray-800">User Name</p>

//                                     {/* View User Button */}
//                                     <button className="mt-2 bg-[#295DFA] text-white text-[12px] py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
//                                         View User
//                                     </button>
//                                 </div>
//                             </div>

//                         </div>
//                         <div className="max-w-xs mx-auto overflow-hidden bg-white  border-[#d0dcff] border-2 py-3 px-16 rounded-xl flex justify-center">
//                             <div>
//                                 {/* User Image */}
//                                 <div className='flex justify-center'>
//                                     <img src={Img} className=" " />
//                                 </div>


//                                 {/* Username */}
//                                 <div className="p-4">
//                                     <p className="text-lg font-semibold text-gray-800">User Name</p>

//                                     {/* View User Button */}
//                                     <button className="mt-2 bg-[#295DFA] text-white text-[12px] py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
//                                         View User
//                                     </button>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>

//     )
// }

// export default Schedulers;