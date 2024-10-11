import Image from "next/image";
import {ButtonGoogle} from "./components/button";
import {ButtonApple} from "./components/button";
import {ButtonCreateAccount} from "./components/button";

export default function Home () {
  return (
    <div className="min-h-screen bg bg-black text-white flex">
      <div className="w-1/2 flex items-center justify-center">
      <Image src="/x-logo.png" 
      alt="X Logo" 
      width={300} 
      height={300}
      />
      </div>

      <div className="w-1/2 flex flex-col justify-center px-16">
        <h1 className="text-6xl font-bold mb-4">Happening now</h1>
        <h2 className="text-3xl font-bold mb-8">Join today.</h2>

        <div className="space-y-4 w-3/4">
          <ButtonGoogle/>
          <ButtonApple/>


          <div className="flex-items-center my-4">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="px-4 text-gray-400 text-sm">or</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          <ButtonCreateAccount/>

        <p className="text-xs text-gray-500 mt-2">
          By signing up, you agree to the <a href="#" className="text-blue-400
          hover:underline">Terms of Service</a> and{""}
          <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>, including{""}
          <a href="#" className="text-blue-400 hover:underline">Cookie Use"</a>
        </p>

        <div className="mt-12">
          <p className="font-bold mb-4">Already have an account?</p>
          <button className="w-full bg-transparent border boorder-blue-400 text-blue-400
          rounded-full py-2 px-4 hover:bg-blue-400 hover:bg-opacity-10 transition duration-200">
            Sign in
           </button>
         </div>
       </div>
     </div>
   </div>
  );
}

