import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0 w-full">
      <header className="text-white body-font">
        <div className="flex flex-wrap items-center justify-between p-2 w-full bg-blue-950">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image
              src="/asset/picture/hklogo.png"
              alt="logo"
              width={50}
              height={50}
              className="object-cover"
            />
            <span className="ml-3 text-xl font-bold">My Portfolio</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-white">
            <Link href="/" className="mr-5 hover:text-blue-400 font-serif">
              Home
            </Link>
            <Link href="#about" className="mr-5 hover:text-blue-400 font-serif">
              About
            </Link>
            <Link href="#skills" className="mr-5 hover:text-blue-400 font-serif">
              Skills
            </Link>
            <Link href="#projects" className="mr-5 hover:text-blue-400 font-serif">
              Projects
            </Link>
            <Link href="#contact" className="mr-5 hover:text-blue-400 font-serif">
              Contact
            </Link>
          </nav>
          <a href="/asset/cv/my-cv.pdf" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center bg-gray-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-black font-bold">
              Download CV
              <FaCloudDownloadAlt className="text-lg ml-2" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
