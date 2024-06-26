import axios from 'axios';
import React from 'react'

const Signup = () => {
    const handleBotApi = async () => {
        try {
          let payLoad = {
            email: "admin@gmail.com",
            password: "12345678"
          };
      
          const response = await axios.post("/api/v1/users/login", payLoad);
      
          const data = response.data;
          console.log(data, "data");
          // setBot(data);
        } catch (error) {
          console.log(error);
        }
      };
    const shadow = '4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)';
    return (
        <div className="login" >
            <div className="flex justify-center" >
                <div className="container mt-16 rounded-xl pb-16 max-w-[800px]" style={{ boxShadow: shadow }}>
                    <div className='inputs max-w-md mx-auto mt-12 p-6 pb-12 bg-[#d0dcff] rounded-lg border border-[#295dfa]'>
                        <div className="flex justify-center mb-6">
                            <div>
                                <h1 className='font-bold text-center'>Hello </h1>
                                <h1 className='font-bold text-[13px]'>Sign Up to Get Started </h1>
                            </div>

                        </div>
                        <div className="mb-6 mt-6">
                            <label className="block text-[#1F5E7C] text-sm font-bold mb-2" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-3 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                                id="text"
                                type="text"
                                placeholder="Full Name"
                            />
                        </div>
                        <div className="mb-6 mt-6">
                            <label className="block text-[#1F5E7C] text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-3 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                                id="text"
                                type="email"
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-[#1F5E7C] text-sm font-bold mb-2" htmlFor="email">
                                Password
                            </label>
                            <input
                                className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-3 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="password"
                                placeholder="Password"
                            />
                        </div>


                        <button
                            className="bg-[#295dfa]  w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleBotApi}
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup