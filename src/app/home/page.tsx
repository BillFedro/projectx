"use client";
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import Sidebar from '../components/sidebar'


const page = () => {
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Ambil nama pengguna dari localStorage
    const storedUsername = localStorage.getItem('username');
    console.log('Retrieved Username:', storedUsername); // Tambahkan ini
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  useEffect(() => {
    // Cek token di localStorage
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    if (!token) {
      router.push('/'); // Arahkan ke halaman login jika tidak ada token
    }
  }, [router]);
  return (
    <div>
      {/* <Sidebar /> */}
      <div>
        <p>Welcome, {username ? username : 'Guest'}!</p>
      </div>
    </div>

  )
}

export default page;