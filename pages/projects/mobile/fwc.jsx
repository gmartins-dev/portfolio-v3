import Image from "next/image"
import Link from "next/link"
import React from "react"
import { RiRadioButtonFill } from "react-icons/ri"
// @ts-ignore
import mobileFwcImg from "../../../public/assets/projects/mobile-fwc.jpg"

const fwc = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={mobileFwcImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">BeMyGuess</h2>
          <h3>
            NextJs / React Native / NodeJs / TypeScript / Native Base /
            TailwindCSS
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The project consists of an full-stack cross-platform application
            with the Football World Cup 2022, which will allow users to create
            their own cup pools to try predict the results of matches and play
            together with their friends.
          </p>
          <a
            href="https://github.com/guilhermemm-dev/world-cup-project"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://github.com/guilhermemm-dev/world-cup-project"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 py-4 shadow-xl md:col-span-1 shadow-[#005687] rounded-xl">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="flex items-center py-2 ">
                <RiRadioButtonFill className="pr-1" /> NextJs
              </p>
              <p className="flex items-center py-2 ">
                <RiRadioButtonFill className="pr-1" /> ReactJs
              </p>
              <p className="flex items-center py-2 ">
                <RiRadioButtonFill className="pr-1" /> React Native
              </p>
              <p className="flex items-center py-2 ">
                <RiRadioButtonFill className="pr-1" /> NodeJs
              </p>
              <p className="flex items-center py-2 ">
                <RiRadioButtonFill className="pr-1" /> TypeScript
              </p>
              <p className="flex items-center py-2 ">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="flex items-center py-2 ">
                <RiRadioButtonFill className="pr-1" /> Expo Go
              </p>
              <p className="flex items-center py-2 ">
                <RiRadioButtonFill className="pr-1" /> Native Base
              </p>
              <p className="flex items-center py-2 ">
                <RiRadioButtonFill className="pr-1" /> TailwindCSS
              </p>
              <p className="flex items-center py-2 ">
                <RiRadioButtonFill className="pr-1" /> Prisma
              </p>
              <p className="flex items-center py-2 ">
                <RiRadioButtonFill className="pr-1" /> Fastify
              </p>
              <p className="flex items-center py-2 ">
                <RiRadioButtonFill className="pr-1" /> Zod
              </p>
              <p className="flex items-center py-2 ">
                <RiRadioButtonFill className="pr-1" /> Axios
              </p>
              <p className="flex items-center py-2 ">
                <RiRadioButtonFill className="pr-1" /> SQLite
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  )
}

export default fwc
