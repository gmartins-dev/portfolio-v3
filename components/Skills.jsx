// @ts-nocheck
import Image from "next/image"
import React from "react"
import Angular from "../public/assets/icons/icon-angular.svg"
import Bootstrap from "../public/assets/icons/icon-bootstrap.svg"
import Css from "../public/assets/icons/icon-css.svg"
import Git from "../public/assets/icons/icon-git.svg"
import Github from "../public/assets/icons/icon-github.svg"
import GraphQL from "../public/assets/icons/icon-graphql.svg"
import Javascript from "../public/assets/icons/icon-javascript.svg"
import MongoDB from "../public/assets/icons/icon-mongodb.svg"
import MySQL from "../public/assets/icons/icon-mysql.svg"
import NextJS from "../public/assets/icons/icon-next.svg"
import NodeJS from "../public/assets/icons/icon-nodejs.svg"
import IconReact from "../public/assets/icons/icon-react.svg"
import ReactNative from "../public/assets/icons/icon-reactnative.png"
import RestAPI from "../public/assets/icons/icon-restapi.svg"
import StyledComponents from "../public/assets/icons/icon-styledcomponents.png"
import Typescript from "../public/assets/icons/icon-typescript.svg"
import VueJS from "../public/assets/icons/icon-vuejs.svg"
import Firebase from "../public/assets/skills/firebase.png"
import Html from "../public/assets/skills/html.png"
import Tailwind from "../public/assets/skills/tailwind.png"

const Skills = () => {
  return (
    <div id="skills" className="w-full p-2 lg:h-screen">
      <div className="max-w-[1240px] max-h-[screen] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#2A7AE2]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 bg-[#093366]">
            <div className="grid items-center justify-center grid-cols-2 gap-4 ">
              <div className="m-auto">
                <Image src={Html} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 bg-[#093366]">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Css} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 bg-[#093366]">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Javascript} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 bg-[#093366]">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Typescript} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 bg-[#093366]">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={IconReact} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 bg-[#093366]">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={NextJS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 bg-[#093366]">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Angular} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Angular</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 bg-[#093366]">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={VueJS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Vue</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 bg-[#093366]">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={ReactNative} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React Native</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 bg-[#093366]">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Tailwind} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 bg-[#093366]">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src={StyledComponents}
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>StyledComponents</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 bg-[#093366]">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Bootstrap} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>

{/*           <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 bg-[#093366]">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={NodeJS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 bg-[#093366]">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={MongoDB} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 bg-[#093366]">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={MySQL} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MySQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 bg-[#093366]">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Firebase} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div> */}
          {/*           <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 bg-[#093366]">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={RestAPI} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>RESTful API</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 bg-[#093366]">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={GraphQL} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GraphQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 bg-[#093366]">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Git} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Git</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 bg-[#093366]">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={Github} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Skills
