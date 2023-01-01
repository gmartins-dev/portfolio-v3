import Image from "next/image"
import Link from "next/link"
import React from "react"
import { RiRadioButtonFill } from "react-icons/ri"
// @ts-ignore
import coverBank from "../../../public/assets/projects/cover-bank.png"

const bank = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={coverBank}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Online Bank</h2>
          <h3>React Native / Expo Go / JavaScript</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            React Native Bank/Finance App for iOS and Android using Moti and
            React Native Reanimated.
          </p>
          <div className="mt-2 mb-3">
            <Image
              className="rounded "
              alt="Bank Demo"
              height="600"
              width="800"
              src="/assets/projects/demo-bank.gif"
            />
          </div>
          <a
            href="https://github.com/guilhermemm-dev/mobile-finances-app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://github.com/guilhermemm-dev/mobile-finances-app"
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
                  alt="React Native"
                  height="20"
                  width="20"
                  src="/assets/icons/icon-react.svg"
                />
                &nbsp;React Native
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
                  alt="Expo Go"
                  height="20"
                  width="20"
                  src="/assets/icons/icon-expogo.svg"
                />
                &nbsp;Expo Go
              </div>
              <div className="flex items-center py-2 ">
                <RiRadioButtonFill className="pr-1" /> Moti
              </div>
              <div className="flex items-center py-2 ">
                <RiRadioButtonFill className="pr-1" /> RN Reanimated
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

export default bank
