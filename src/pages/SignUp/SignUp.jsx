import React, { useState } from 'react';
import { BsFillChatDotsFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { RiEyeFill, RiEyeCloseFill } from "react-icons/ri";
const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <div className=' w-20 h-16 rounded-lg flex justify-center items-center bg-gradient-to-tr from-rose-400 to-red-500'>
                <BsFillChatDotsFill className='text-white' size={50} />
            </div>
            <h1 className="text-3xl font-semibold mb-9 my-9">Sign Up</h1>
            <div className='w-full'>
                <div className="max-w-md mx-auto bg-white p-8 rounded shadow">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">

                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-stone-200 outline-none border rounded px-3 py-2"
                                
                                placeholder='Name'
                                {...register("name", { required: true })}
                            />
                            {errors.name?.type === 'required' && <p className='text-red-500'>Name is required</p>}
                        </div>

                        <div className="mb-4">

                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-stone-200 outline-none border rounded px-3 py-2"
                                
                                placeholder='Email'
                                {...register("email", { required: true })}
                                
                            />
                                  {errors.email?.type === 'required' && <p className='text-red-500 '>Email is required</p>}
                        </div>

                        <div className="mb-4">

                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full bg-stone-200 outline-none border rounded px-3 py-2"
                                
                                placeholder='Phone'
                                {...register("phone")}
                            />
                        </div>

                        <div className="mb-4">

                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="w-full bg-stone-200 outline-none border rounded px-3 py-2"
                                
                                placeholder='Address'
                                {...register("address")}
                            />
                        </div>
                        <div className='mb-4'>
                            <div className="flex items-center">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    className="w-full shrink-0 bg-stone-200 outline-none border rounded px-3 py-2 pr-10"
                                    
                                    placeholder="Password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                          value: 8,
                                          message: "Password must be at least 8 characters",
                                        },
                                        pattern: {
                                          value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                          message: "Password must contain at least one letter and one number",
                                        },
                                      })}
                                
                                />
                                <button
                                    type="button"
                                    className="cursor-pointer relative right-8"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <RiEyeCloseFill /> : <RiEyeFill />}
                                </button>
                            </div>
                        
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="bg-gradient-to-tr from-rose-400 to-red-500 text-white px-4 w-full py-2 rounded"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className='mt-2 font-semibold'>Already have an account? <Link to='/login' className=" font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-tr from-rose-400 to-red-500">Login Now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;