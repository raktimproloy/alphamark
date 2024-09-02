'use client'
import React, { useState, useEffect } from 'react'
import "./style.css"
import MegaMenu from './MegaMenu'

export default function Index() {
  const [activeMenu, setActiveMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(true)

  console.log(isScrolled)
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY > 350) {
        setIsScrolled(false)
      } else {
        setIsScrolled(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <MegaMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className={`menu_container flex justify-evenly w-100 border-t-2 border-black sticky top-[.5rem] z-[99] mt-[0rem] lg:mt-[20rem] ${isScrolled ? 'bg-white' : 'bg-white'}`}>
        <div className='flex justify-between items-center cursor-pointer'>
          <div className='flex items-center' style={{width: '100%'}}>
            <div className='smallBox'></div>
            <h3 className={`text-2xl menu-item ml-3`}>Alphamark™</h3>
          </div>
          <svg className="nml_svg mr-5" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.00107 0H8.00183V5.33537H6.00107V0ZM3.99558 5.33545H5.99634V10.6708H3.99558V5.33545ZM4.00153 10.6726H2.00077V16.008H2.00219V18.0071H12.006V16.0063H11.9991V10.6726H9.99838V16.0063H4.00153V10.6726ZM2.00077 23.343H0L4.66433e-07 18.0076H2.00077L2.00077 23.343ZM11.9979 23.343H13.9987V18.0076H11.9979V23.343ZM9.99366 5.33545H7.99289V10.6708H9.99366V5.33545ZM11.0177 2.22307H10.6691V0.314028H9.99838V0H11.6854V0.314028H11.0177V2.22307ZM12.2631 2.22307H11.9233V0H12.3744L12.9601 1.71006H12.966L13.5489 0H13.9999V2.22307H13.6602V0.53789H13.6543L13.1007 2.22307H12.8225L12.2689 0.53789H12.2631V2.22307Z" fill="white"></path>
          </svg>
        </div>
        <div style={{pointerEvents: "none"}}></div>
        <div className='hidden justify-between items-center cursor-pointer lg:flex'>
          <div className='flex items-center' style={{width: '100%'}}>
            <div className='smallBox'></div>
            <h3 className='text-2xl menu-item ml-3'>Start a project</h3>
          </div>
          <svg className="nml_contact mr-5" data-name="Layer 1" height="22px" viewBox="0 0 72 45">
            <rect className="nml_contact-svg_long-line" y="18" width="54" height="9" fill="white"></rect>
            <rect x="63" y="18" width="9" height="9" fill="white"></rect>
            <rect x="54" y="27" width="9" height="9" fill="white"></rect>
            <rect x="54" y="9" width="9" height="9" fill="white"></rect>
            <rect x="45" width="9" height="9" fill="white"></rect>
            <rect x="45" y="36" width="9" height="9" fill="white"></rect>
          </svg>
        </div>
        <div className='flex justify-between items-center cursor-pointer' onClick={() => setActiveMenu(true)}>
          <div className='flex items-center' style={{width: '100%'}}>
            <div className='smallBox'></div>
            <h3 className='text-2xl menu-item ml-3'>Menu</h3>
          </div>
          <div className="nml_svg">
            <div className="dm_menu-icon mr-0 lg:mr-5">
              <div className="m_m-line mml1"></div>
              <div className="m_m-line mml2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
