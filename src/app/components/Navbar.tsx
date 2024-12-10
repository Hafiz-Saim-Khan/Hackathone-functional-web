

"use client"
import Link from "next/link";
import { useState } from "react";
import { SiNike } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <section>
          <img src="logo.jpg" className="h-10 w-20" alt="logo" />
        </section>
        <section className="hidden md:flex gap-6 text-xs font-medium mb-3">
          <Link href="/all-product">Find Store  |</Link>
          <Link href="/Get-Help">Help |</Link>
          <Link href="/Join-us">Join us |</Link>
          <Link href="/Login">Sign In</Link>
        </section>
      </div>

      <nav className="flex justify-between items-center p-4">
        <SiNike className="h-10 w-16 text-black" />
        
        <div className={`flex gap-6 md:flex ${isOpen ? "flex-col" : "hidden"} md:flex-row mt-4`}>
          <Link href="/" className="font-semibold mb-6">New & Featured</Link>
          <Link href="/Men-pg" className="font-semibold mb-6">Men</Link>
          <Link href="/" className="font-semibold mb-6">Women</Link>
          <Link href="/" className="font-semibold mb-6">Kids</Link>
          <Link href="/" className="font-semibold mb-6">Sale</Link>
          <Link href="/" className="font-semibold mb-6">SNKRS</Link>
        </div>

        <div className="flex gap-5 mr-4 items-center">
          <IoIosSearch className="h-6 w-6" />
          <input type="text" placeholder="Search" className="searching-menu p-2 border rounded" />
          <CiHeart className="ml-3 h-6 w-6" />
        </div>

        <button 
          className="md:hidden text-2xl" 
          onClick={toggleMenu}>
          &#9776;
        </button>
      </nav>
    </div>
  );
};

export default Navbar;