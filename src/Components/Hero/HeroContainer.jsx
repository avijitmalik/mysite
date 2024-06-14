import React from 'react'
import { BsGithub,BsInstagram,BsLinkedin,BsTwitterX } from 'react-icons/bs';
import { AiOutlineYoutube } from "react-icons/ai";
import heroImg from '../../assets/hero.jpg'
import { WiDirectionRight } from 'react-icons/wi';

const HeroContainer = () => {
  return (
    <div className='flex mt-20 mx-10'>
        {/* left contaier */}        
        <div className='flex flex-col gap-5'>
            <h1 className='text-3xl capitalize font-serif'>creative fullStack web developer</h1>
            <p className='capitalize font-serif tracking-[0.011rem]'>design and code beautiful simple projects without overwhelming yourself complexity. enjoy your passion for creating with ease and love</p>
            <div className='flex gap-2'>
                <div className='flex items-center gap-1 border text-white px-2 bg-black rounded-md py-1 font-sans outline-none cursor-pointer'>
                    <p className='capitalize'>hire me now </p>
                    <WiDirectionRight className='text-3xl'/>
                </div>
                <div className='flex items-center gap-1 border border-black px-3 py-1 rounded-md cursor-pointer'>
                    <BsGithub/>
                    <p className='capitalize'>my github</p>
                </div>
            </div>
            <div className='mt-20 flex flex-col'>
                <p className='capitalize'>other socials:</p>
                <div className='flex gap-1 mt-1 ml-2 cursor-pointer'>
                    <AiOutlineYoutube/>
                    <BsTwitterX />
                    <BsLinkedin/>
                    <BsInstagram/>
                </div>
            </div>
        </div>
        {/* rigth container */}
        <div className=''>
          <img src={heroImg} alt="hero-full-stack-img"  className="w-full max-w-[520px] rounded-[26px]" />
        </div>
    </div>
  )
}

export default HeroContainer