import React, { useState } from "react";
import { Brain, Trophy, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
          <Brain className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text m-1">
            Think Arena
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Button variant="outline" className="px-4 py-2 text-sm text-blue-600 rounded-md">
            <Trophy/> Leaderard
            </Button>
            <Button className="px-4 py-2 text-sm text-blue-600 bgrounded-md" variant="outline">
            <Brain/> Players
            </Button>
            <Button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md" variant="outline">
            <Users/>Sign In
            </Button>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-slate-50 shadow-md">
          <Button variant="outline"  className="flex justify-start px-4 py-2 text-sm text-blue-600  rounded-md w-[50%] text-left">
          <Trophy/> Leaderboard
          </Button>
          <Button variant="outline"  className="flex justify-start   px-4 py-2 text-sm text-blue-600  rounded-md w-[50%] text-left">
          <Brain/> Players
          </Button>
          <Button className="flex justify-start px-4 py-2 text-sm text-white bg-blue-600 rounded-md w-[50%]  text-left">
          <Users/>Sign In
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
