import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { 
  HomeIcon, 
  UserGroupIcon,
  BellIcon, 
  EnvelopeIcon,
  PencilIcon,
  BookmarkIcon,
  UsersIcon,
  StarIcon,
  BoltIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { SearchIcon } from 'lucide-react';

interface SidebarItemProps {
  Icon: React.ElementType;
  text: string;
  href: string;
  badge?: number;
}


const SidebarItem: React.FC<SidebarItemProps> = ({ Icon, text, href, badge }) => (
    
  <Link href={href} className="flex items-center space-x-4 p-3 hover:bg-gray-800 rounded-full">
    <Icon className="h-7 w-7" />
    <span className="text-xl">{text}</span>
    {badge && (
      <span className="bg-blue-500 text-white rounded-full px-2 text-sm">{badge}</span>
    )}
  </Link>
);

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-black text-white p-4 space-y-4 w-64">
      <div className="mb-4">
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="currentColor">
          <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
        </svg>
      </div>

      <SidebarItem Icon={HomeIcon} text="Home" href="/" />
      <SidebarItem Icon={SearchIcon} text="Explore" href="/explore" />
      <SidebarItem Icon={BellIcon} text="Notifications" href="/notifications" badge={2} />
      <SidebarItem Icon={EnvelopeIcon} text="Messages" href="/messages" />
      <SidebarItem Icon={PencilIcon} text="Grok" href="/grok" />
      <SidebarItem Icon={BookmarkIcon} text="Bookmarks" href="/bookmarks" />
      <SidebarItem Icon={UsersIcon} text="Communities" href="/communities" />
      <SidebarItem Icon={StarIcon} text="Premium" href="/premium" />
      <SidebarItem Icon={BoltIcon} text="Verified Orgs" href="/verified-orgs" />
      <SidebarItem Icon={UserIcon} text="Profile" href="/profile" />
      <SidebarItem Icon={EllipsisHorizontalCircleIcon} text="More" href="/more" />

      <button className="bg-blue-500 text-white rounded-full py-3 px-4 mt-4 text-lg font-bold hover:bg-blue-600 transition-colors">
        Post
      </button>
    </div>
  );
};

export default Sidebar;