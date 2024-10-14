'use client';

import React, { useState } from 'react';
import Image from "next/image";
import { X } from 'lucide-react';
import { ButtonGoogle, ButtonApple } from "./components/button";
import ModalLogin from './components/modal-login';

interface ModalRegisterProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalRegister: React.FC<ModalRegisterProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name, email, month, day, year);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-black text-white p-8 rounded-2xl w-full max-w-md'>
                <div className='flex justify-between items-center mb-6'>
                    <X className="w-6 h-6 cursor-pointer" onClick={onClose} />
                    <img src="/api/placeholder/100/50" alt="X logo" />
                    <div className='w-6'></div>
                </div>
                <h1 className='text-3xl font-bold mb-8'>Create your account</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <input 
                            type="text"
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='w-full bg-black border border-gray-600 rounded p-2 focus:outline-none focus:border-blue-500'
                            maxLength={50}
                        />
                        <div className='text-right text-sm text-gray-500'>{name.length}/50</div>
                    </div>
                    <div className='mb-6'>
                        <input 
                            type="email" 
                            placeholder='Email' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full bg-black border border-gray-600 rounded p-2 focus:outline-none focus:border-blue-500'
                        />
                    </div>
                    <div className='mb-6'>
                        <label className="block text-sm mb-2">Date of birth</label>
                        <p className="text-sm text-gray-500 mb-2">
                            This will not be shown publicly. Confirm your own age, 
                            even if this account is for business, a pet, or something else.
                        </p>
                        <div className='flex gap-4'>
                            <select 
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                                className='flex-1 bg-black border border-gray-600 rounded p-2 focus:outline-none focus:border-blue-500'
                            >
                                <option value="">Month</option>
                                {/* Add month options here */}
                            </select>
                            <select 
                                value={day}
                                onChange={(e) => setDay(e.target.value)}
                                className='w-1/4 bg-black border border-gray-600 rounded p-2 focus:outline-none focus:border-blue-500'
                            >
                                <option value="">Day</option>
                                {/* Add day options here */}
                            </select>
                            <select
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                className="w-1/3 bg-black border border-gray-600 rounded p-2 focus:outline-none focus:border-blue-500"
                            >
                                <option value="">Year</option>
                                
                            </select>
                        </div>
                    </div>
                    <button 
                        type='submit'
                        className='w-full bg-white text-black font-bold py-3 rounded-full hover:bg-gray-200 transition duration-200'
                    >
                        Next                   
                    </button>
                </form>
            </div>
        </div>
    ); 
};

export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      <ModalLogin isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      <ModalRegister isOpen={showRegisterModal} onClose={() => setShowRegisterModal(false)} />
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <Image
          src="/x-logo.png"
          alt="X Logo"
          width={150}
          height={150}
          className="md:w-[300px] md:h-[300px]"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Happening now</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Join today.</h2>
        
        <div className="space-y-4 w-full md:w-3/4">
          <ButtonGoogle />
          <ButtonApple />
          
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          
          <button 
            onClick={() => setShowRegisterModal(true)} 
            className="bg-blue-500 text-white rounded-full py-2 px-20 mb-4"
          >
            Create Account
          </button>
          
          <p className="text-xs text-gray-500 mt-2">
            By signing up, you agree to the{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Privacy Policy
            </a>
            , including{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Cookie Use
            </a>
          </p>
          
          <div className="mt-12">
            <p className="font-bold mb-4">Already have an account?</p>
            <button 
              onClick={() => setShowLoginModal(true)} 
              className="w-full bg-transparent border border-blue-400 text-blue-400 rounded-full py-2 px-4 
                hover:bg-blue-400 hover:bg-opacity-10 transition duration-200"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}