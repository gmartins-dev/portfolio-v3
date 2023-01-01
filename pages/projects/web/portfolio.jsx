import Image from "next/image"
import Link from "next/link"
import React from "react"
// @ts-ignore
import coverPortfolio from "../../../public/assets/projects/demo-portfolio1.png"

const portfolio = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={coverPortfolio}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Netflix App</h2>
          <h3>Next JS / React JS / JavaScript / TailwindCSS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="mt-5 mb-3">My portfolio page</p>
          <div className="mt-5 mb-3">
            <div className="flex justify-center p-1 bg-[#202023]">
              <Image
                className="rounded "
                alt="Portfolio Demo1"
                height="600"
                width="800"
                src="/assets/projects/demo-portfolio1.png"
              />
            </div>

            <div className="flex justify-center p-1 bg-[#202023]">
              <Image
                className="rounded "
                alt="Portfolio Demo2"
                height="1200"
                width="600"
                src="/assets/projects/demo-portfolio2.png"
                background-color="white"
              />
            </div>
          </div>
          <a
            href="https://github.com/guilhermemm-dev/portfolio-v3"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a href="https://guilhermemm.dev/" target="_blank" rel="noreferrer">
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
                  alt="React Native"
                  height="20"
                  width="20"
                  src="/assets/icons/icon-react.svg"
                />
                &nbsp;React
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
                  alt="Tailwind"
                  height="20"
                  width="20"
                  src="/assets/icons/icon-tailwind.svg"
                />
                &nbsp;Tailwind
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

export default portfolio
