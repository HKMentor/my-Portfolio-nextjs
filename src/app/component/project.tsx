import Image from "next/image";
import Link from "next/link";
import React from "react";
const Project = () => {
  return (
    <div id="projects">
      <section className="text-gray-900 ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-blue-900 -mt-16">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-1xl mb-0">
              These projects are a testament to my journey in design and
              development. Take a closer look and see what I can bring to your
              next idea.
            </p>
          </div>
          <div className="flex flex-wrap -m-5 -mt-20">
            {/*Project*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  // eslint-disable-next-line @typescript-eslint/no-require-imports
                  src="/asset/project/qqqqqq.png"
                  width={500}
                  height={500}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    A Responsive Web Design with HTML & CSS{" "}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    E-Commerce Product Showcase{" "}
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    This project presents a clean, user-friendly layout for
                    showcasing products, optimized for all devices.
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://hkmentor.github.io/hkdashdeals-simple-responsive_-webpage/"
                    }
                  >
                    <p className="leading-relaxed text-blue-800 hover:underline">
                      View Project.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/*Project*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  // eslint-disable-next-line @typescript-eslint/no-require-imports
                  src="/asset/project/quiz.jpg"
                  width={500}
                  height={500}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Engaging and Responsive Quiz Website{" "}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Interactive Quiz Platform{" "}
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    An interactive, responsive quiz platform designed for
                    engaging knowledge testing on any device
                  </p>
                  <Link
                    target="_blank"
                    href={"https://hkmentor.github.io/Quiz-Website-Attempt/"}
                  >
                    <p className="leading-relaxed text-blue-800 hover:underline">
                      View Project.
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/*Project*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  // eslint-disable-next-line @typescript-eslint/no-require-imports
                  src="/asset/project/aaaqaq.jpg"
                  width={500}
                  height={500}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    A Simple and Intuitive Calculator InterfaceS{" "}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Responsive Calculator Application{" "}
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    A simple, responsive calculator with essential functions for
                    quick and easy calculations.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://hkmentor.github.io/Logical-Calculator_HK/"}
                  >
                    <p className="leading-relaxed text-blue-800 hover:underline">
                      View Project.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/*Project*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  // eslint-disable-next-line @typescript-eslint/no-require-imports
                  src="/asset/project/clcl.jpg"
                  width={500}
                  height={500}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    A Real-Time, Responsive Clock Display{" "}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Digital Clock Interface{" "}
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    A real-time digital clock with a clean, responsive design
                    for accurate time display across devices.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://hkmentor.github.io/clock-by-HooriaKhan/"}
                  >
                    <p className="leading-relaxed text-blue-800 hover:underline">
                      View Project.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/*Project*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  // eslint-disable-next-line @typescript-eslint/no-require-imports
                  src="/asset/project/wordcounter.png"
                  width={500}
                  height={500}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Quick and Accurate Text Analysis{" "}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Word Counter Tool{" "}
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    A responsive word counter tool that quickly calculates word
                    and character counts for any text input.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://hkmentor.github.io/Word-Counter/"}
                  >
                    <p className="leading-relaxed text-blue-800 hover:underline">
                      View Project.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/*Project*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  // eslint-disable-next-line @typescript-eslint/no-require-imports
                  src="/asset/project/perodin11.jpg"
                  width={500}
                  height={500}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    An Interactive Guide to Chemical Elements{" "}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Dynamic Periodic Table{" "}
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    Trohis pject showcases an interactive periodic table,
                    designed to provide detailed information on each element.
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://hkmentor.github.io/HK_Preodic-Table-of-Element/"
                    }
                  >
                    <p className="leading-relaxed text-blue-800 hover:underline">
                      View Project.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
