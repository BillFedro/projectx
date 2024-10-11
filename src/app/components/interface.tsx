import React from "react";
import Link from "next/link"
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaUser, FaEllipsisH } from "react-icons/fa";


const HomeInterface: React.FC = () => {
    return (
        <div className="flex min-h-screen bg-black text-white">
            {/* Sidebar */}
            <div className="w-1/4 p-4 border-r border-gray-800">
            <div className="mb-8">
                <svg viewBox="0 0 24 24 " className="h-8 w-8 text-white" fill="currentColor">
                <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 
                11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 
                2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
                </svg>
            </div>
            <nav>
                {[
                    { icon: <FaHome/>, label: 'Home' },
                    { icon: <FaHashtag/>, label: 'Explore' },
                    { icon: <FaBell/>, label: 'Notifications' },
                    { icon: <FaEnvelope/>, label: 'Messages' },
                    { icon: <FaBookmark/>, label: 'Bookmarks' },
                    { icon: <FaUser/>, label: 'Profile' },
                    { icon: <FaEllipsisH/>, label: 'More' },
                ].map((item, index) => (
                    <div key={index} className="flex items-center mb-4 text-xl">
                        <span className="mr-4">{item.icon}</span>
                        <span>{item.label}</span>
                    </div>
                    
                ))}
            </nav>
            <button className="bg-blue-500 text-white rounded-full py-2 px-4 mt-4 w-full">
                post
            </button>
            </div>


            {/* Content */}
            <div className="w-1/2 border-r border-gray-800">
            <div className="border-b border-gray-800 p-4">
                <div className="flex justify-between">
                    <span className="font-bold">For You</span>
                    <span className="text-gray-500">Following</span>
                </div>
            </div>

            <div className="p-4 border-b border-gray-800">
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                        M
                    </div>
                    
                    <input 
                    type="text" 
                    placeholder="what is happening"
                    className="bg-transparent flex-grow outline-none"
                    />
                </div>

                <div className="flex mt-4">
                {['📷', '🎥', '📊', '😊', '📅', '📍'].map((icon, index) =>(
                    <span key={index} className="mr-4 text-blue-400 cursor-pointer">{icon}</span>
                ))}
                <button className="ml-auto bg-blue-500 text-white rounded-full px-4 py-1">
                    Post
                </button>
                </div>
            </div>

            <div className="p-4 border-b border-gray-800">
                <p className="font-bold mb-2">Customize your view 🎨</p>
                <p className="text-sm text-gray-500 mb-4">
                    sometimes you need to freshen things up a bit, like swapping colors,
                    super-sizing your text, or revisiting your dark mode selection,
                    all of which you can do in your settings.
                </p>
                <button className="border border-gray-500 rounded-full px-4 py-1">
                    change View
                </button>
            </div>
            <div className="p-4 text-blue-400">
                show 105 posts
            </div>
            </div>

            {/*Right Sidebar*/}
            <div className="w-1/4 p-4">
            <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <h3 className="font-bold mb-2">Expiring soon</h3>
                <p className="mb-2">Get up to 40% off X premium</p>
                <button className="bg-white text-black rounded-full px-4 py-1">
                    Learn more
                </button>
            </div>
            <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="font-bold mb-4">Trends for you</h3>
                {['wasit', 'SMA 70', 'Pagii'].map((trend, index) => (
                    <div key={index} className="mb-4">
                        <p className="text-xs text-gray-500">Trending in indonesia</p>
                        <p className="font-bold">{trend}</p>
                        <p className="text-xs text-gray-500">{Math.floor(Math.random() * 500)}K posts</p>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};