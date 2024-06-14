import React from 'react';
import { BsGithub } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="bg-white text-black py-2 mx-10">
      <div className="w-3/5 mx-auto px-5 py-3 rounded-xl
            flex items-center justify-between border border-white-600 shadow-md">
        <div className="flex items-center cursor-pointer">
          <h2 className='border border-black-100 rounded-full py-1 px-1 '>
          <h1 className='border border-black-200 rounded-full py-1 px-1 uppercase'>am</h1>
          </h2>
          <h3 className="text-lg font-semibold text-slate-800">AvijitMalik</h3>
        </div>
        <div className="flex items-center gap-7 justify-between capitalize text-black">
          <a href="">docs</a>
          <a href="">projects</a>
          <a href="">blogs</a>
          <a href="">about</a>
        </div>
        <div className="flex items-center gap-1 bg-black text-white py-1 px-2 rounded-md cursor-pointer">
          <BsGithub/>
          <p className="">My Projects</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
