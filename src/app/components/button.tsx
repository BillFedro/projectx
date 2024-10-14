import React, {useState} from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";







export const ButtonGoogle = () => {
    return (
        <button className="flex items-center justify-center bg-white text-black rounded-full py-2 px-6 mb-4">
            <Image src="/google-icon.png" alt="Google Logo" width={20} height={20} className="mr-3"/>
            <FcGoogle className="mr-2" size={20}/>
            <span>Sign in Muhammad Bill Fedro</span>
          </button>

        
    )
}   

export const ButtonApple = () => {
    return (
        <button className="flex items-center justify-center bg-white text-black rounded-full py-2 px-20 mb-4 ">
            <FaApple className="mr-2" size={20}/>
            <span>Sign up with Apple</span>

          </button>

        
    )      
}









