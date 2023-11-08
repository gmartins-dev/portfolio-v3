import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri'
// @ts-ignore
import coverShareSpot from '../../../public/assets/projects/cover-sharespot.png'

const sharespot = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={coverShareSpot}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>ShareSpot</h2>
          <h3>
            NextJs / ReactJs / NodeJs / MongoDB / JavaScript / Styled-Components
          </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='mt-5 mb-3'>
            FullStack Next.Js application - “ShareSpot” in reference to Spotify,
            the idea was basically to build a social network to share your
            favorite songs, playlists, and podcasts.
          </p>
          <div className='mt-5 mb-3'>
            <Image
              className='rounded '
              alt='ShareSpot Demo'
              height='600'
              width='800'
              src='/assets/projects/cover-sharespot.png'
            />
          </div>

          <a
            href='https://github.com/gmartins-dev/next-socialdev'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://next-socialdev.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 py-4 shadow-xl md:col-span-1 shadow-[#005687] rounded-xl'>
          <div className='p-2'>
            <p className='pb-2 font-bold text-center'>🛠 Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <div className='flex items-center py-2'>
                <Image
                  alt='NextJs'
                  height='20'
                  width='20'
                  src='/assets/icons/icon-next.svg'
                />
                &nbsp;NextJs
              </div>
              <div className='flex items-center py-2'>
                <Image
                  alt='React'
                  height='20'
                  width='20'
                  src='/assets/icons/icon-react.svg'
                />
                &nbsp;React
              </div>
              <div className='flex items-center py-2'>
                <Image
                  alt='JavaScript'
                  height='20'
                  width='20'
                  src='/assets/icons/icon-javascript.svg'
                />
                &nbsp;JavaScript
              </div>
              <div className='flex items-center py-2'>
                <Image
                  alt='Styled-Components'
                  height='20'
                  width='20'
                  src='/assets/icons/icon-styledcomponents.png'
                />
                &nbsp;Styled-Components
              </div>
              <div className='flex items-center py-2'>
                <Image
                  alt='NodeJS'
                  height='20'
                  width='20'
                  src='/assets/icons/icon-nodejs.svg'
                />
                &nbsp;NodeJS
              </div>
              <div className='flex items-center py-2'>
                <Image
                  alt='MongoDB'
                  height='20'
                  width='20'
                  src='/assets/icons/icon-mongodb.svg'
                />
                &nbsp;MongoDB
              </div>
              <p className='flex items-center py-2 '>
                <RiRadioButtonFill className='pr-1' /> Axios
              </p>
              <p className='flex items-center py-2 '>
                <RiRadioButtonFill className='pr-1' /> SWR
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default sharespot
