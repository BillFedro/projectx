import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import Cookies from 'js-cookie';

interface ModalLoginProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalLogin: React.FC<ModalLoginProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     router.push('/home');
  //   }
  // }, []);

  if (!isOpen) return null;

  // const handleLogin = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   // Simulasi login
  //   if (email === 'yang@gmail.com' && password === '123') {
  //     console.log('Login Success');
  //     alert('Login Success');
  //     router.push('/home');
  //   } else {
  //     console.error('Login Error');
  //     alert('Login Error');
  //   }
  // };

  // handle login 'https://dummyjson.com/auth/login'

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login Success', data);
        alert('Login Success');
        // Simpan token di cookies
        Cookies.set('token', data.token);
        localStorage.setItem('username', data.email); // Simpan username di localStorage
        router.push('/home');
      } else {
        const errorData = await response.json();
        console.error('Login Error', errorData);
        alert(`Login Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Login Error', error);
      alert('Login Error: An unexpected error occurred.');
    }
  };





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

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Phone, email, or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 bg-black border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 bg-black border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
          />
          <button type="submit" className="w-full bg-white text-black font-bold py-2 px-4 rounded-full mb-4 hover:bg-gray-200 transition">
            Next
          </button>
        </form>

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