import Link from 'next/link';
import '/src/css/style.css'
//import githubimg from 'asset/github.png'
const  NavBar = ()=>{
    return(
        <div className='flex bg-black h-14 w-full overflow-y-hidden'>

            <div className='font-bold text-white mt-3'>
                <Link href='asset/temp.html' className='mt-8 sm:ml-3 sm:mr-3 xs:ml-3 xs:mr-3 lg:mt-16 lg:mb-16 lg:ml-14 lg:mr-14 lg:text-lg sm:text-xs xs:text-xs'>Home</Link>
                <Link href='asset/temp.html' className='mt-8 sm:ml-3 sm:mr-3 xs:ml-3 xs:mr-3 lg:mt-16 lg:mb-16 lg:ml-14 lg:mr-14 lg:text-lg sm:text-xs xs:text-xs'>About</Link>
                <Link href='asset/temp.html' className='mt-8 sm:ml-3 sm:mr-3 xs:ml-3 xs:mr-3 lg:mt-16 lg:mb-16 lg:ml-14 lg:mr-14 lg:text-lg sm:text-xs xs:text-xs'>Projects</Link>
                <Link href='asset/temp.html' className='mt-8 sm:ml-3 sm:mr-3 xs:ml-3 xs:mr-3 lg:mt-16 lg:mb-16 lg:ml-14 lg:mr-14 lg:text-lg sm:text-xs xs:text-xs'>Terminal</Link>
            </div>

            <div className='absolute right-0 sm:inline-block lg:inline-block xs:hidden'>
                <Link href='https://github.com/0x3c2f48415348434f4e3e/'><img src='asset/github.png' alt='github' width='32' className='inline-block mt-2 mr-3 lg:w-5 sm:w-4' /></Link>
                <Link href='https://leetcode.com/Hashcon/'><img src='asset/leetcode.png' alt='leetcode' width='32' className='inline-block mt-2 lg:w-5 sm:w-4'/></Link>
            </div>
        </div>
    )
}

export default NavBar;