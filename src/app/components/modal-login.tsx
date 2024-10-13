import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';

interface ModalLoginProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalLogin: React.FC<ModalLoginProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  

  

  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-black text-white rounded-2xl w-full max-w-md p-8 relative">
        <button onClick={onClose} className="absolute top-4 left-4 text-2xl">&times;</button>
        <div className="flex justify-center mb-8">
          <FaXTwitter className="text-3xl" />
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-8">Sign in to X</h2>
        
        <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-700 rounded-full text-sm font-medium mb-4 hover:bg-gray-800 transition">
          <FcGoogle className="w-5 h-5 mr-2" />
          Sign in as Muhammad Bill Fedro
        </button>
        
        <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-700 rounded-full text-sm font-medium mb-4 hover:bg-gray-800 transition">
          <AiFillApple className="w-5 h-5 mr-2" />
          Sign in with Apple
        </button>
        
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-black text-gray-400">or</span>
          </div>
        </div>
        
        <input
          type="text"
          placeholder="Phone, email, or username"
          className="w-full px-3 py-2 bg-black border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
        />
        
        <button className="w-full bg-white text-black font-bold py-2 px-4 rounded-full mb-4 hover:bg-gray-200 transition">
          Next
        </button>
        
        <button className="w-full bg-black text-white font-bold py-2 px-4 rounded-full border border-gray-600 mb-4 hover:bg-gray-800 transition">
          Forgot password?
        </button>
        
        <p className="text-center text-sm text-gray-400">
          Don't have an account? <a href="#" className="text-blue-400 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default ModalLogin; 