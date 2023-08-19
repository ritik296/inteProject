import React from 'react'
// simport logo from './Cat-N-Dog-Logo copy.pngs'

export const Navbar = ({setContactToggle}) => {
  return (
    <nav className="h-41 absolute top-10 z-50 flex w-full justify-between px-[41px]">
        <div className="h-41">
            <img className='w-[192]px h-[62px]' src='Cat-N-Dog-Logo copy@2x.png' alt="" />
        </div>

        <div className="text-white">
            <ul className="list-none flex space-x-4">
                <li className='cursor-pointer'>About</li>
                <li className="cursor-pointer">Blog</li>
                <li className="cursor-pointer">Careers</li>
                <li className="cursor-pointer" onClick={()=> setContactToggle(true)}>Contact</li>
            </ul>
        </div>
    </nav>
  )
}
