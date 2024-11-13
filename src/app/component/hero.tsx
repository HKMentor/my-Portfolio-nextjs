"use client"
import Image from "next/image";
import React from "react";
import Typewriter from 'typewriter-effect';
import Link from "next/link";

const  Hero = () => {
    return ( 
<section className="text-gray-600 body-font bg-gray-200">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900 ">
    <b className="text-6xl">Hooria Khan</b>  <br className="hidden lg:inline-block"/>
        <Typewriter
  options={{
    strings: ['Front-End Web Developer', 'E-commerce Expert ','Youtuber','Freelancer'],
    autoStart: true,
    loop: true,
  }}
/>
       </h1>
      <p className="mb-8 leading-relaxed">
         I am a passionate frontend developer with a strong background in
          creating visually appealing, responsive, and user-friendly websites
          and applications. I specialize in HTML, CSS, JavaScript, and modern
          frontend frameworks like React and Vue.js. With a keen eye for design
          and a focus on delivering seamless user experiences, I love turning
          creative ideas into functional digital products. I am always eager to
          learn new technologies and take on new challenges that push the
          boundaries of frontend development.
      </p><br />
      <div className="flex justify-center">
        <Link href={"#contact"}>
        <button className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[15rem]"
        alt="hero"
        width={500}
        height={300}
        src="/asset/picture/hoor.jpg"/>
    </div>
  </div>
</section>

    
    )
}
export default Hero