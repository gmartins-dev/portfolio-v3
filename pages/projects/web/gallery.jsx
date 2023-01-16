import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// @ts-ignore
import coverGallery from '../../../public/assets/projects/demo-gallery.png'

const Gallery = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={coverGallery}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Gallery</h2>
          <h3>
            NextJs / ReactJs / TypeScript / JavaScript / TailwindCSS / Supabase
          </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4 '>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='mt-5 mb-3'>
            Image Gallery with Next.js new version 13, Supabase, and Tailwind
            CSS. Features: SSR Component, Supabase Edge Function Hook to
            Postgress Database, Animation and Lazy Loading images.
          </p>
          <div className='mt-2 mb-3'>
            {' '}
            <Image
              className='rounded '
              alt='Gallery Demo'
              height='600'
              width='800'
              src={coverGallery}
            />
          </div>

          <a
            href='https://github.com/guilhermemm-dev/nextjs-gallery'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://nextjs-gallery-swart.vercel.app/'
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
                  alt='React Native'
                  height='20'
                  width='20'
                  src='/assets/icons/icon-react.svg'
                />
                &nbsp;React
              </div>
              <div className='flex items-center py-2'>
                <Image
                  alt='TypeScript'
                  height='20'
                  width='20'
                  src='/assets/icons/icon-typescript.svg'
                />
                &nbsp;TypeScript
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
                  alt='Tailwind'
                  height='20'
                  width='20'
                  src='/assets/icons/icon-tailwind.svg'
                />
                &nbsp;Tailwind
              </div>
              <div className='flex items-center py-2'>
                <Image
                  alt='Tailwind'
                  height='20'
                  width='20'
                  src='/assets/icons/icon-supabase.svg'
                />
                &nbsp;Supabase
              </div>
            </div>
          </div>
          <Link href='/#projects'>
            <p className='underline cursor-pointer'>Back</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Gallery
