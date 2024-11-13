"use client"
import Image from 'next/image'
import React from 'react'
import abbImage from "../../../public/asset/picture/abb.jpg";

const About = () => {
  return (
    <div id='about'>
      <section className="text-gray-800 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Image
      className="object-cover object-center rounded mx-auto"
      alt="hero"
      src={abbImage}
      width={400}
      height={300}
    />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-800">
        <b>About Me</b>
        <br className="hidden lg:inline-block" />
      </h1>
      <p className="mb-8 leading-relaxed">
      Hi there! I’m a dedicated web developer with a passion for creating impactful, interactive web experiences. With expertise in responsive design and an eye for detail, I bring both technical skill and creativity to every project.
      </p>
      <p className="mb-8 leading-relaxed "> I enjoy solving problems and building efficient solutions that connect with users. Constantly exploring new ideas and technologies, I aim to make a positive impact through every line of code.</p>
      <div className="flex justify-center">
       <a href={"/asset/cv/my-cv.pdf"}>
       <button className="inline-flex text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          View CV
        </button></a>
       
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
