"use client"
import '/src/css/style.css';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe';

export default function Home() {


  return (
    <main className='bg-black min-h-screen'>
      <NavBar />
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
      cursor={true}
      speed={25}
      style={{ fontSize: '2rem', display: 'inline-block' }}
      repeat={Infinity}
    />
          </h1>
        </div>
      </div>

      <div className='col-span-5 mt-4 lg:mt-0 relative'>
        <div className='rounded-full bg-[#181818] w-[200px] h-[200px] absolute transform -translate-x-1/2 -translate-y-1/2 top-20 left-1/2'>
        <img src="asset/image.jpg" alt="Image" width="150" className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'/>
        <div className='flex absolute top-60 left-1/4'>
        <img src='asset/location.png' alt='location' width='22' className='inline-block'/>
        <p className='text-white font-extrabold'>UK, London</p>
        </div>
        </div>
      </div>
      <AboutMe />
    </main>
  );
}