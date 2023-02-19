import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AboutImg from '../public/assets/about.jpg'

const About = () => {
  return (
    <div id='about' className='flex items-center w-full h-screen p-2 py-24'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#2A7AE2]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 '>
            My focus is on Front-end Development on Web and Mobile applications,
            I have experience with projects using React, React Native, Next.js,
            Angular, Vue, JavaScript, TypeScript, HTML, CSS, Styled-Components,
            TailwindCSS, Bootstrap, Chakra UI, Material UI and others.
          </p>
          <p className='py-2 '>
            I am driven by facilitating people&apos;s lives through beautiful
            Web and Mobile applications with great usability, scalability, and
            performance. The possibility of combining logical problem-solving
            with the creative processes of user experience is what attracts me
            most to front-end development.
          </p>
          <p className='py-2 '>
            I&apos;m constantly looking to improve as a professional and learn
            on demand in new challenges, so I&apos;m always open to
            opportunities where I need to learn to work with any software
            development tools that can help me solve problems in the best
            possible way.
          </p>

          <Link href='/#projects'>
            <p className='py-2 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-[#005687] rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300 hidden sm:flex'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  )
}

export default About
