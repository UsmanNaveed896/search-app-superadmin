import React from 'react'
import { useRegisterHook } from '../hooks/useRegisterHook';
import { useForm } from 'react-hook-form';

const Login = () => {
    const registerHook = useRegisterHook();
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    const shadow = '4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)';

    const onSubmit =(data)=>{
        registerHook.handleLogin(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login" >
            <div className="flex justify-center" >
                <div className="container mt-16 rounded-xl pb-16 max-w-[800px]" style={{ boxShadow: shadow }}>
                    <div className='inputs max-w-md mx-auto mt-12 p-6 pb-12 bg-[#d0dcff] rounded-lg border border-[#295dfa]'>
                        <div className="flex justify-center mb-6">
                            <h1 className='font-bold'>Sign In </h1>
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
                                style={
                                    errors.email
                                      ? { border: "1px solid red" }
                                      : { border: "1px solid #8A8AA033" }
                                  }
                                  {...register("email", { required: true })}
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
                                style={
                                    errors.password
                                      ? { border: "1px solid red" }
                                      : { border: "1px solid #8A8AA033" }
                                  }
                                  {...register("password", { required: true })}
                            />
                        </div>


                        <button
                            className="bg-[#295dfa]  w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                           {registerHook.loading ? "Sigining In..." : "Login"} 
                        </button>
                    </div>
                </div>
            </div>

        </div>
        </form>
    )
}

export default Login