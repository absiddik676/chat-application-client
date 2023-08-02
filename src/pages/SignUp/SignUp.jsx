import React from 'react';
import { BsFillChatDotsFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <div className=' w-20 h-16 rounded-lg flex justify-center items-center bg-gradient-to-tr from-rose-400 to-red-500'>
                <BsFillChatDotsFill className='text-white' size={50} />
            </div>
            <h1 className="text-2xl font-bold mb-9 my-9">Sign Up</h1>
            <div className='w-full'>
                <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
                   
                    <form >
                        <div className="mb-4">
                            
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-stone-200 outline-none border rounded px-3 py-2"
                                required
                                placeholder='Name'
                            />
                        </div>

                        <div className="mb-4">
                            
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-stone-200 outline-none border rounded px-3 py-2"
                                required
                                placeholder='Email'
                            />
                        </div>

                        <div className="mb-4">
                            
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full bg-stone-200 outline-none border rounded px-3 py-2"
                                required
                                placeholder='Phone'
                            />
                        </div>

                        <div className="mb-4">
                            
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="w-full bg-stone-200 outline-none border rounded px-3 py-2"
                                required
                                placeholder='Address'
                            />
                        </div>
                        <div className="mb-4">
                            
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="w-full bg-stone-200 outline-none border rounded px-3 py-2"
                                required
                                placeholder='Password'
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-gradient-to-tr from-rose-400 to-red-500 text-white px-4 w-full py-2 rounded"
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className='mt-2 font-semibold'>Already have an account? <Link className='text-blue-600'>Login Now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;