import React from 'react';
import { Image, BarChart2, Smile, Paperclip, MapPin } from 'lucide-react';

const XFeed: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="border-b border-gray-700 p-4">
        <nav className="flex justify-between">
          <span className="font-bold">For you</span>
          <span className="text-gray-500">Following</span>
        </nav>
      </header>
      
      <main className="p-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
            M
          </div>
          <input
            type="text"
            placeholder="What is happening?!"
            className="bg-transparent flex-grow outline-none"
          />
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <Image size={20} className="text-blue-400" />
            <BarChart2 size={20} className="text-blue-400" />
            <Smile size={20} className="text-blue-400" />
            <Paperclip size={20} className="text-blue-400" />
            <MapPin size={20} className="text-blue-400" />
          </div>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-full font-bold">
            Post
          </button>
        </div>
        
        <div className="text-blue-400 mb-4">Show 175 posts</div>
        
        <div className="relative">
          <img
            src="/api/placeholder/400/300"
            alt="Girl listening to music"
            className="w-full rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <h2 className="text-2xl font-bold">Support Creators on X by subscribing to Premium</h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default XFeed;