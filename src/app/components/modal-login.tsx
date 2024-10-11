import React, { useState } from 'react';
import { FaTwitter, FaGoogle, FaApple } from 'react-icons/fa';

interface ModalLoginProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalLogin: React.FC<ModalLoginProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementasi logika login di sini
    console.log('Login dengan:', email, password);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black rounded-2xl p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            &times;
          </button>
          <FaTwitter className="text-white text-3xl" />
          <div className="w-6"></div> {/* Spacer untuk menjaga ikon di tengah */}
        </div>
        <h2 className="text-white text-3xl font-bold mb-8">Sign in to X</h2>
        <button className="w-full bg-white text-black rounded-full py-2 px-4 mb-4 font-bold flex items-center justify-center">
          <FaGoogle className="mr-2" />
          Sign in with Google
        </button>
        <button className="w-full bg-white text-black rounded-full py-2 px-4 mb-4 font-bold flex items-center justify-center">
          <FaApple className="mr-2" />
          Sign in with Apple
        </button>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="px-4 text-gray-400 text-sm">or</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Phone, email address, or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black text-white border border-gray-700 rounded-md p-2 mb-4"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-black text-white border border-gray-700 rounded-md p-2 mb-4"
            required
          />
          <button type="submit" className="w-full bg-white text-black rounded-full py-2 px-4 font-bold">
            Log in
          </button>
        </form>
        <button className="w-full text-white bg-transparent border border-gray-700 rounded-full py-2 px-4 mt-4 font-bold">
          Forgot password?
        </button>
        <p className="text-gray-400 mt-8">
          Don't have an account? <a href="#" className="text-blue-400">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default ModalLogin;    