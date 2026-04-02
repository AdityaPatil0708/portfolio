"use client";

import { useState } from "react";
import Link from "next/link";
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [toggled, setToggled] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-10 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 md:gap-6 text-[14px] md:text-[15px] font-medium text-[#4a4a4a]">
        <Link href="/" className="hover:text-[#443da3] transition-colors">
          Home
        </Link>
        <Link href="/about" className="hover:text-[#443da3] transition-colors">
          About
        </Link>
        <Link href="/projects" className="hover:text-[#443da3] transition-colors">
          Projects
        </Link>
        <a href="https://drive.google.com/file/d/1ZYkzEb4e88bUgi5FrxMlS8fK8yvas0QE/view?usp=sharing" target="_blank">Resume</a>
      </div>

      {/* Toggle switch - UI only */}
      <div className="flex items-center gap-1">
        <Sun className="text-[#ffa500]" size={20}/>
        <button
          onClick={() => setToggled(!toggled)}
          className={`relative w-10 h-5 rounded-full transition-colors duration-300 ${
            toggled ? "bg-gray-400" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${
              toggled ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
        <Moon className="text-[#443da3]" size={20}/>
      </div>
    </nav>
  );
}