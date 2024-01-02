"use client"
import '/src/css/style.css';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

export default function Home() {


  return (
    <main className='bg-black min-h-screen overflow-y-hidden'>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7'>
          <h1 className='ml-6 mb-4 sm:text-lg lg:text-12xl font-extrabold mt-5 text-transparent bg-clip-text bg-gradient-to-r from-[#9bf8f4] to-[#6f7bf7]'>
            Hello, I am Benjamin,<br/>
    <TypeAnimation
      sequence={[
        'A Computer Science student',
        500,
        'Interested in Backend developement',
        500,
        ' Interested in CyberSecurity',
        500,
        ' Interested in Hardware',
        500,
        'Interested in Drone Piloting',
        500
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: 'sm:1rem', display: 'inline-block' }}
      repeat={Infinity}
    />
          </h1>
        </div>
      </div>

      <div className='col-span-5 mt-4 lg:mt-0 relative'>
        <div className='rounded-full bg-[#181818] w-[300px] h-[300px] absolute transform -translate-x-1/2 -translate-y-1/2 top-56 left-1/2'>
        <img src="asset/image.jpg" alt="Image" width="250" className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'/>
        <div className='flex absolute top-80 left-1/4'>
        <img src='asset/location.png' alt='location' width='22' className='inline-block'/>
        <p className='text-white font-extrabold'>UK, London</p>
        </div>
        </div>

        <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-96 left-2/4 mt-32'>
       <Link href='asset/temp.html'> <button className='bg-gradient-to-br from-[#9bf8f4] to-[#6f7bf7] lg:w-72 lg:h-16 sm:w-40 sm:h-10 rounded-md text-white lg:text-xl sm:text-lg font-extrabold'>More about me</button></Link>
      </div>
      </div>

    </main>
  );
}