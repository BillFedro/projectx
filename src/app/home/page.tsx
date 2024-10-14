"use client";
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import Sidebar from '../components/sidebar'
import XFeed from '../components/feed'
import TrendingSidebar from '../components/xsidebar'

const Page = () => {
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Ambil nama pengguna dari localStorage
    const storedUsername = localStorage.getItem('username');
    console.log('Retrieved Username:', storedUsername);
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="flex bg-black min-h-screen">
      <Sidebar />
      <div className="flex-grow">
        <p className="p-4 text-white">Welcome, {username ? username : 'Guest'}!</p>
        <XFeed />
      </div>
      <TrendingSidebar />
    </div>
  )
}

export default Page;