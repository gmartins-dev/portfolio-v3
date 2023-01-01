import Link from "next/link"
import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-sm tracking-widest uppercase text-[#6BD1FF]">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4">
            Hi, I&#39;m <span className="text-[#167BF7]"> Guilherme</span>
          </h1>
          <h1 className="py-2">Frontend Developer</h1>
          <p className="py-4 text-[#d7e0e5] sm:max-w-[70%] m-auto">
            I build beautiful Web and Mobile applications with great usability,
            scalability and performance to improve and facilitate people&apos;s
            lives.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
            <a
              href="https://www.linkedin.com/in/guilhermemm-dev/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-[#005687] hover:scale-110 text-[#2A7AE2]">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/guilhermemm-dev"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-[#005687] hover:scale-110 text-[#2A7AE2]">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-[#005687] hover:scale-110 text-[#2A7AE2]">
                <AiOutlineMail />
              </div>
            </Link>
            <a
              href="https://github.com/guilhermemm-dev"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-[#005687] hover:scale-110 text-[#2A7AE2]">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
