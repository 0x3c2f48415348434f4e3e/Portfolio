import Link from 'next/link';
import '/src/css/style.css'
//import githubimg from 'asset/github.png'
const  NavBar = ()=>{
    return(
        <div className='flex bg-black'>

            <div className='font-bold text-white'>
                <Link href='javascript:void(0)' className='mt-8 mb-8 ml-6 mr-6 lg:mt-16 lg:mb-16 lg:ml-14 lg:mr-14 text-lg lg:text-xl'>Home</Link>
                <Link href='javascript:void(0)' className='mt-8 mb-8 ml-6 mr-6 lg:mt-16 lg:mb-16 lg:ml-14 lg:mr-14 text-lg lg:text-xl'>About</Link>
                <Link href='javascript:void(0)' className='mt-8 mb-8 ml-6 mr-6 lg:mt-16 lg:mb-16 lg:ml-14 lg:mr-14 text-lg lg:text-xl'>Projects</Link>
            </div>

            <div className='absolute right-0'>
                <Link href='javascript:void(0)'><img src='asset/github.png' alt='github' className='inline-block'/></Link>
                <Link href='javascript:void(0)'><img src='asset/leetcode.png' alt='leetcode' width='42' className='inline-block ml-7 mr-7'/></Link>
            </div>
        </div>
    )
}

export default NavBar;