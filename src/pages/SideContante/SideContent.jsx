import React from 'react';
import { BsFillChatDotsFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { FaRegCalendarCheck } from "react-icons/fa";
const SideContent = () => {
    return (
        <div className='p-5'>
            <div className=' w-16 h-12 rounded-lg flex justify-center items-center bg-gradient-to-tr from-rose-400 to-red-500'>
                <BsFillChatDotsFill className='text-white' size={40} />
            </div>
            <div>
                <BiSolidUser className='my-6' size={40} />
            </div>
            <div>
                <AiFillStar className='mb-6 ' size={40} />
            </div>
            <div>
                <FaRegCalendarCheck size={40} />
            </div>
        </div>
    );
};

export default SideContent;