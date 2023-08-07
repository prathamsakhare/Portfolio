"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import Figma from "../../public/projects/Figma.jpeg";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import Crypto from "../../public/projects/CryptoApp_6.jpg";
import MovieSearch from "../../public/projects/MovieSearch_1.jpg";
import NewsApp from "../../public/projects/NewsApp_3.jpg";
import { useState } from "react";
export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="dark:bg-gray-900">
      <main className={` ${darkMode ? "dark" : ""} `}>
        <section className="pb-20 dark:bg-gray-900">
          <nav className="py-10 px-10 mb-12 flex justify-between">
            <h1 className="text-xl-dosis-700 font-bold text-gray-900 dark:text-gray-200">
              P<span className="text-xl-dosis-700 text-teal-400">S.</span>
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl text-gray-900 dark:text-gray-200"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/14qOdTxfPvk5UioZXoRm5YgI0C_hVLBtT/view?usp=drive_link"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 pb-0 pt-3">
            <h2 className="text-5xl py-2 text-teal-600 font-bold md:pb-4">
              Pratham P. Sakhare
            </h2>
            <h3 className="text-2xl py-2 font-semibold  text-gray-900 dark:text-gray-200">
              Developer and Designer
            </h3>
            <p className="text-md py-5 pb-3 leading-8 text-gray-900 dark:text-gray-200">
              🚀 Google DSC Lead | 🌐 Full Stack Web Developer | 🔮 Crafting
              Next-level Experiences with React.js and Next.js
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 pb-5 text-gray-900 dark:text-gray-300">
            <a href="https://github.com/prathamsakhare" target="_blank">
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/prathampsakhare/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden">
            <Image src={Figma} layout="fill" objectFit="cover" />
          </div>
        </section>

        {/* page 2 */}

        <section className="px-20  dark:bg-gray-900 ">
          <div>
            <h3 className="text-3xl py-1 text-gray-900 dark:text-gray-200">
              Who am I?
            </h3>
            <p className="text-md py-2 leading-8 text-gray-900 dark:text-gray-200">
              I am a web developer who've Managed and build websites for a
              company in the Educational Sector, It resulted in a{" "}
              <span className="text-teal-500">
                30% increase in sales in 6 months
              </span>
              . I've Assisted in the development of{" "}
              <span className="text-teal-500">new features</span> and{" "}
              <span className="text-teal-500">functionality</span> for web
              applications.
            </p>
          </div>

          <div className="lg:flex gap-10 ml-auto">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={design}
                className="mx-auto"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 text-gray-900 dark:text-gray-200">
                JavaScript Frameworks
              </h3>

              <h4 className="py-4 text-teal-600"> Frameworks that I use</h4>
              <p className="text-gray-800 py-1  dark:text-gray-200">React.Js</p>
              <p className="text-gray-800 py-1  dark:text-gray-200">Next.Js</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={100} className="mx-auto" height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-gray-900 dark:text-gray-200">
                CSS Frameworks
              </h3>

              <h4 className="py-4 text-teal-600">Frameworks that I use</h4>
              <p className="text-gray-800 dark:text-gray-200 py-1">
                Material UI
              </p>
              <p className="text-gray-800 dark:text-gray-200 py-1">
                Tailwind CSS
              </p>
              <p className="text-gray-800  dark:text-gray-200 py-1">
                Bootstrap
              </p>
              <p className="text-gray-800 dark:text-gray-200 py-1">SASS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={consulting}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 text-gray-900 dark:text-gray-200 ">
                Backend Integration
              </h3>

              <h4 className="py-4 text-teal-600">
                Technologies and Services that I use for integrating my web apps
                with backend
              </h4>
              <p className="text-gray-800 dark:text-gray-200 py-1">Firebase</p>
              <p className="text-gray-800  dark:text-gray-200 py-1">REST API</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">MongoDB</p>
            </div>
          </div>
        </section>
        <section className="dark:bg-gray-900 pt-15 px-20">
          <div className="lg:flex gap-10 ">
            <h1
              style={{ fontSize: "42px" }}
              className="text-gray-900 dark:text-gray-200"
            >
              Projects
            </h1>
          </div>
          <div className="text-center shadow-lg p-5 rounded-xl mt-10  my-3">
            <h3
              className="font-bold text-gray-900 dark:text-gray-200  pb-2 text-base/10"
              style={{ fontSize: "36px" }}
            >
              Crypto Data Application
            </h3>
            <h4 className="py-4 text-teal-600">
              React | Chakra UI | REST API | React Routing | Dynamic Crypto Data
            </h4>
            <a
              href="https://prathamsakhare.github.io/CryptoDataApplication/#/home"
              target="_blank"
            >
              <Image src={Crypto} className="mx-auto" />
            </a>
          </div>
          <div className="text-center shadow-lg p-5 rounded-xl mt-10  my-3">
            <h3
              className="font-bold text-gray-900 dark:text-gray-200  pb-2 text-base/10"
              style={{ fontSize: "36px" }}
            >
              News Application
            </h3>
            <h4 className="py-4 text-teal-600">
              React | Chakra UI | REST API | React Routing | Dynamic News
              Fetching
            </h4>
            <a
              href="https://prathamsakhare.github.io/Search-Engine-News/"
              target="_blank"
            >
              <Image src={NewsApp} className="mx-auto" />
            </a>
          </div>
          <div className="text-center shadow-lg p-5 rounded-xl mt-10  my-3">
            <h3
              className="text-lg text-gray-900 dark:text-gray-200 font-bold  pb-2"
              style={{ fontSize: "36px" }}
            >
              Movie Search
            </h3>
            <h4 className="py-4 text-teal-600">
              React | Chakra UI | REST API | React Routing | Dynamic News
              Fetching
            </h4>
            <a
              href="https://prathamsakhare.github.io/Movie-Search/"
              target="_blank"
            >
              <Image src={MovieSearch} className="mx-auto" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
