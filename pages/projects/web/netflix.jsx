import Image from "next/image"
import Link from "next/link"
import React from "react"
import { RiRadioButtonFill } from "react-icons/ri"
// @ts-ignore
import webNetflixCloneImg from "../../../public/assets/projects/web-netflix.jpg"

const netflix = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={webNetflixCloneImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Netflix App</h2>
          <h3>
            NextJs / ReactJs / JavaScript / Styled-Components / MaterialUi
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="pt-4 pb-4">
            Frontend focused Netflix clone project, using Next.Js, React,
            MateriaUI and styled-components.
          </p>
          <div className="mt-2 mb-3">
            <img
              className="rounded "
              alt="Netflix Demo"
              height="600"
              width="800"
              src="/assets/projects/demo-netflix.gif"
            />
          </div>
          <div className="leading-7">
            <p>
              <b>Description: </b>A front-end Netflix clone built using Next.js
              and consuming themoviedb.org public API to get information about
              movies and series.
            </p>
            <p>
              <b>Objective:</b> Study in practice how the SSR (Server Side
              Rendering) feature of the React Next.js framework works. Results:
              An application with extremely fast and flawless loading, with a
              fully responsive design and mobile friendly.
            </p>
            <p>
              See more infos about this project on my LinkedIn
              <a
                href="https://bit.ly/post-nextflix"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                [click here]
              </a>
            </p>
          </div>

          <a
            href="https://github.com/guilhermemm-dev/accurate-frontend"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://accurate-frontend.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 py-4 shadow-xl md:col-span-1 shadow-[#005687] rounded-xl">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">🛠 Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <div className="flex items-center py-2">
                <Image
                  alt="NextJs"
                  height="20"
                  width="20"
                  src="/assets/icons/icon-next.svg"
                />
                &nbsp;NextJs
              </div>
              <div className="flex items-center py-2">
                <Image
                  alt="ReactJs"
                  height="20"
                  width="20"
                  src="/assets/icons/icon-react.svg"
                />
                &nbsp;ReactJs
              </div>
              <div className="flex items-center py-2">
                <Image
                  alt="JavaScript"
                  height="20"
                  width="20"
                  src="/assets/icons/icon-javascript.svg"
                />
                &nbsp;JavaScript
              </div>
              <div className="flex items-center py-2">
                <Image
                  alt="Styled-Components"
                  height="20"
                  width="20"
                  src="/assets/icons/icon-stylecomponents.png"
                />
                &nbsp;Styled-Components
              </div>
              <div className="flex items-center py-2">
                <Image
                  alt="MaterialUI"
                  height="20"
                  width="20"
                  src="/assets/icons/icon-materialui.png"
                />
                &nbsp;MaterialUI
              </div>
              <div className="flex items-center py-2 ">
                <RiRadioButtonFill className="pr-1" /> Axios
              </div>
              <div className="flex items-center py-2 ">
                <RiRadioButtonFill className="pr-1" /> Postman
              </div>
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

export default netflix
