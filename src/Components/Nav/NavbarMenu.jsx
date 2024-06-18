import React, { useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavbarMenu = () => {
    const [IsOpen, setIsOpen] = useState(false);

    const toggleMenu =()=>{
        setIsOpen(!IsOpen)
        console.log("data log by toogld button..!");
    }
  return (
    <div className='w-full z-10'>
        <div className='p-6 flex justify-between items-center'>
            <div className="flex items-center cursor-pointer">
                <h2 className='border border-black-100 rounded-full py-1 px-1 '>
                <h1 className='border border-black-200 rounded-full py-1 px-1 uppercase'>am</h1>
                </h2>
                <h3 className="text-lg font-semibold text-slate-800">AvijitMalik</h3>
            </div>
            <div className='' onClick={toggleMenu}>
                {IsOpen ? <FaTimes/> : <FaBars/> }
            </div>
        </div>
        <div className={`bg-black  text-white capitalize ${IsOpen ? 'flex' : 'hidden'}`}>
            <div className='flex flex-col gap-2 p-6'>
                <a href="">docs</a>
                <a href="">projects</a>
                <a href="">blogs</a>
                <a href="">about</a>
            </div>
        </div>
    </div>
  )
}

export default NavbarMenu