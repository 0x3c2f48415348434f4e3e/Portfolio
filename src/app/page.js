//import Image from "public/asset/image.jpg";
import '/src/css/style.css';


export default function Home() {


  return (
    <main className='bg-black min-h-screen overflow-y-hidden'>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7'>
          <h1 className='text-white ml-6 mb-4 text-xl lg:text-6xl font-extrabold mt-10'>
            Hello, I'm Benjamin
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
        <button className='bg-gradient-to-br from-[#9bf8f4] to-[#6f7bf7] w-72 h-16 rounded-md text-white text-xl font-extrabold'>More about me</button>
      </div>
      </div>

    </main>
  );
}