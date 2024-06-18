import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import NavbarMenu from './NavbarMenu'

const MainNavbar = () => {
    const [IsMobile, setIsMobile] = useState( window.innerWidth < 768);

    useEffect(() => {
      const handelResize = ()=>{
        setIsMobile(window.innerWidth < 768);
      }
      window.addEventListener('resize', handelResize);
      return () => {
        window.removeEventListener('resize', handelResize);
      }
    }, [])
    
  return (
    <div>
        {IsMobile ? <NavbarMenu/> : <Navbar/>}
    </div>
  )
}

export default MainNavbar