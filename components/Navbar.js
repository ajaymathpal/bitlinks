import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */}

            {/* <nav className='h-16 bg-purple-700 flex justify-between items-center text-white px-3'> */}
            <nav className='h-16 bg-[#02040B] flex justify-between items-center text-white px-3'>
                <div className='logo font-bold text-2xl'>
                    <Link href='/'>BitLinks</Link>
                </div>
                <div className='flex justify-center gap-4 items-center'>
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/shorten'>Shorten</Link>
                    <Link href='/contact'>Contact Us</Link>
                    <li className='flex gap-4'>
                        <Link href="/shorten">
                            {/* <button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button> */}
                            <button className='relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
                                <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                                <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-5 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
                                    Try Now
                                </span>
                            </button>
                        </Link>
                        <Link target='_blank' href="/github">
                            {/* <button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>GitHub</button> */}
                            <button className='relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
                                <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                                <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-5 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
                                    GitHub
                                </span>
                            </button>
                        </Link>
                    </li>
                </div>
            </nav>
        </>
    )
}

export default Navbar
