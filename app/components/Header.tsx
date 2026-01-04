"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Menu from "./Menu";

const Header = () => {
  const [mobileButtonPressed, setMobileButtonPressed] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <nav className="flex flex-row justify-between border-b-2 border-amber-200/30 py-3">
        <div className="pl-6 flex gap-2 text-3xl font-medium">
          <span className="text-blue-900">Prova</span>
          <span className="text-amber-700/70">61</span>
        </div>
        <div className="pr-6">
          <button
            onClick={() => setMobileButtonPressed(!mobileButtonPressed)}
            className="text-blue-700 text-2xl cursor-pointer hover:text-blue-400 md:hidden"
          >
            <IoMenu />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <Menu />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileButtonPressed && (
        <div className="border-b-2 border-amber-200/30 md:hidden">
          <Menu />
        </div>
      )}
    </header>
  );
};
export default Header;
