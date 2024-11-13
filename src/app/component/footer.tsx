import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";


const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font bg-blue-950">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src="/asset/picture/hklogo.png" alt="logo" width={100} height={100} className="w-[50px]"/>

      <span className="ml-3 text-xl text-white">Hooria_Codehub12</span>
    </a>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 MYPORTFOLIO 
     
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
      <Link target="-blank" href={"https://www.youtube.com/@Hooria_CodeHub12"} className="text-white">
      <BsYoutube  className="text-3xl hover:text-[#ff0000]"/>
      </Link>
      <Link target="-blank" href={"https://www.linkedin.com/in/hooria-fatima-54753927b/"} className="text-white ml-2">
      <FaLinkedin  className="text-3xl hover:text-[#0e76a8]" />
      </Link>
      <Link target="-blank" href={"https://www.instagram.com/hooria_codehub/"} className="text-white  ml-2">
      <BsInstagram  className="text-3xl hover:text-[#8a3ab9]"  />
      </Link>
    </span>
  </div>
</footer>

        </div>
    )
}

export default Footer