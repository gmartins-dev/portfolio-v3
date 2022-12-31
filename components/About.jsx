import Image from "next/image"
import Link from "next/link"
import React from "react"
import AboutImg from "../public/assets/about.jpg"

const About = () => {
  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#2A7AE2]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 ">
            My focus is on Frontend Development on Web and Mobile applications,
            I have experience with projects using React, React Native, Next.js,
            Angular, Vue, JavaScript, TypeScript, HTML, CSS, Styled-Components,
            TailwindCSS, Bootstrap, Chakra UI, Material UI and others.
          </p>
          <p className="py-2 ">
            What most attracts me about working with frontend development is the
            possibility of combining both the creative part to think of
            solutions that directly affect the way people will use websites,
            programs, and mobile applications together with the logical part of
            solving problems so that this is done in the most optimized and
            performative way possible.
          </p>
          <p className="py-2 ">
            I'm constantly looking to improve as a professional and learn on
            demand in new challenges, so I'm always open to opportunities where
            I need to learn to work with any software development tools that can
            help me solve problems in the best possible way.
          </p>

          <Link href="/#projects">
            <p className="py-2 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-[#005687] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  )
}

export default About
