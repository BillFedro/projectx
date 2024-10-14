"use client";
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import Sidebar from '../components/sidebar'
import XFeed from '../components/feed'
import TrendingSidebar from '../components/xsidebar'

const Page = () => {
  const [username, setUsername] = useState('');
  const [newTweet, setNewTweet] = useState('');
  const [tweets, setTweets] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Retrieve username from localStorage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }

    // Retrieve tweets from localStorage
    const storedTweets = JSON.parse(localStorage.getItem('tweets') || '[]');
    setTweets(storedTweets);
  }, []);

  const handleNewTweet = (e) => {
    setNewTweet(e.target.value);
  };

  const postTweet = () => {
    if (newTweet.trim() !== '') {
      const newTweetObject = {
        id: Date.now(),
        content: newTweet,
        username: username,
        timestamp: new Date().toISOString(),
      };

      const updatedTweets = [newTweetObject, ...tweets];
      setTweets(updatedTweets);
      localStorage.setItem('tweets', JSON.stringify(updatedTweets));
      setNewTweet('');
    }
  };

  return (
    <div className="flex bg-black min-h-screen">
      <Sidebar />
      
      <div className="flex-grow">
        <p className="p-4 text-white">Welcome, {username ? username : 'Guest'}!</p>
        {/* New Tweet Form */}
        <div className="p-4 border-b border-gray-700">
          <textarea
            className="w-full bg-black text-white border border-gray-700 rounded p-2"
            rows="3"
            placeholder="What's happening?"
            value={newTweet}
            onChange={handleNewTweet}
          />
          <button
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={postTweet}
          >
            Tweet
          </button>
        </div>

        {/* Render tweets */}
        <div className="tweets-container">
          {tweets.map((tweet) => (
            <div key={tweet.id} className="tweet p-4 border-b border-gray-700 text-white">
              <p className="font-bold">{tweet.username}</p>
              <p>{tweet.content}</p>
              <p className="text-sm text-gray-500">{new Date(tweet.timestamp).toLocaleString()}</p>
            </div>
          ))}
        </div>

        
      </div>
      <TrendingSidebar />
    </div>
  )
}

export default Page;