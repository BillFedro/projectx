'use client';
import React, { useState } from 'react';
import Image from "next/image";
import { ButtonGoogle } from "./components/button";
import { ButtonApple } from "./components/button";
import { ButtonCreateAccount } from "./components/button";
import ModalLogin from './components/modal-login';


  export default function Home() {

    const [showModal, setShowModal] = useState(false);

    return (
      <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
        <ModalLogin isOpen={showModal} onClose={() => setShowModal(false)}/>
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

            <ButtonCreateAccount />

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
              <button onClick={() => setShowModal(true)} className="w-full bg-transparent border border-blue-400 text-blue-400 rounded-full py-2 px-4 
               hover:bg-blue-400 hover:bg-opacity-10 transition duration-200">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
