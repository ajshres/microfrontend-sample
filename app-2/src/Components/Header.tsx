import React from 'react';
import { Bell, ChevronDown, Search, User } from 'lucide-react';

type User = {
  name: string;
  email: string;
}

type HeaderProps = {
  user: User;
  onUserClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onUserClick }) => (
  <header className="bg-white border-b border-gray-200 px-6 py-4">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back, {user.name}</p>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <button className="relative p-2 text-gray-600 hover:text-gray-900">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        
        <button 
          onClick={onUserClick}
          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
        >
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  </header>
);

export default Header;