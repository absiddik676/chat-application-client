import React, { useState } from 'react';
import { BsFillChatDotsFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { RiEyeFill, RiEyeCloseFill } from "react-icons/ri";
const Login = () => {
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
            <h1 className="text-3xl font-semibold mb-9 my-9">Login</h1>
            <div className='w-full'>
                <div className="max-w-md mx-auto bg-white p-8 rounded shadow-sm">
                   
                    <form >

                        <div className="mb-4">
                            
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-stone-200 outline-none border rounded px-3 py-2"
                                required
                                placeholder='Email'
                                {...register("password")}
                            />
                        </div>
                        <div className='mb-4'>
                            <div className="flex items-center">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    className="w-full shrink-0 bg-stone-200 outline-none border rounded px-3 py-2 pr-10"
                                    required
                                    placeholder="Password"
                                    {...register("password")}
                                />
                                
                                <button
                                    type="button"
                                    className="cursor-pointer relative right-8"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <RiEyeCloseFill /> : <RiEyeFill />}
                                </button>
                            </div>
                            <small className='text-gray-400 '>Forget Password</small>
                        </div>

                        <button
                            type="submit"
                            className="bg-gradient-to-tr from-rose-400 to-red-500 text-white px-4 w-full py-2 rounded"
                        >
                            Login
                        </button>
                    </form>
                   
                    <p className='mt-2 font-semibold'>Don't have an account yet? <Link to='/signup' className=" font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-tr from-rose-400 to-red-500">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;