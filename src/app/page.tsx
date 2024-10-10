import Image from "next/image";
import {ButtonGoogle} from "./components/button";
import {ButtonApple} from "./components/button";
import {ButtonCreateAccount} from "./components/button";


export default function Home() {
  return (
    <>
    
      <Image
        src="/x-logo.png"
        alt="Vercel Logo"
        width={72}
        height={16}
        priority
      />
      
      <div>
        <div className="w-1/2 flex flex-col justify-center px-16">
          <h1 className="text-6xl font-bold mb-12">Happening now</h1>
          <h2 className="text-3xl font-bold mb-8">Join today.</h2>

          
      </div>

      </div>

      
      <ButtonGoogle/>
      <ButtonApple/>
      <ButtonCreateAccount/>

      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-600"></div>
        <span className="px-4 text-gray-400 text-sm">or</span>
        <div className="flex-grow border-t border-gray-600"></div>

      </div>

      <p className="text-xs text-gray-500 mb-8 ">
        by joining, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a> including
        <a href="#" className="text-blue-500">Cookie Use</a>
      </p>

      <p className="mb-4">Already have an account?</p>
      <button className="bg-transparent border border-gray-600 text-blue-500
      rounded-full py-2 px-4">
        Sign In
      </button>
      
    </>
    
  );
};

