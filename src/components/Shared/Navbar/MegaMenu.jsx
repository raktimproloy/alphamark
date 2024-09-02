import React from 'react';
import Image from 'next/image';
import LogoImage from "/public/alphamark-logo.jpg";
import HoverBtn from "@/components/Shared/HoverBtn";

export default function MegaMenu({ activeMenu, setActiveMenu }) {
  return (
    <div
      className={`fixed left-0 bg-black w-[100vw] h-[100vh] z-[999] transition-all duration-300 ease-in-out ${
        activeMenu ? "top-0 opacity-1 visible" : "-top-[100%] opacity-0 invisible"
      }`}
    >
      <div
        className={`nav_dashes_container flex justify-evenly w-100 mb-3 fixed top-0 left-0 right-0`}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        className={`w-[100vw] h-[100vh] flex items-center justify-center relative transition-all duration-300 ease-in-out delay-500 ${
          activeMenu ? "top-0 opacity-1 visible" : "-top-[100%] opacity-0 invisible"
        }`}
      >
        <div className='bg-white h-[95%] w-[95%] md:h-[80%] md:w-[80%]'>
          <div className='flex justify-between items-center'>
            <Image
              src={LogoImage}
              width={150}
              height={150}
              alt='logo'
              className='p-4'
            />
            {activeMenu ? (
              <div
                className='bg-black cursor-pointer p-2'
                onClick={() => setActiveMenu(false)}
              >
                <div className='cross-container relative'>
                  <div className='line horizontal absolute w-full h-[2px] bg-white'></div>
                  <div className='line vertical absolute w-[2px] h-full bg-white'></div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className='py-5'>
            <ul className='nav_item_container'>
              {['Projects', 'About', 'Services', 'Lab', 'Insights'].map((item, index) => (
                <li key={index} className='flex grid grid-cols-4 p-4'>
                  <p>(0{index + 1})</p>
                  <p className='col-span-3 text-2xl md:text-4xl'>{item}</p>
                  <p className='col-span-3 text-2xl md:text-4xl uppercase'>{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-4'>
            <div></div>
            <div className='col-span-3 flex items-center gap-3'>
              <HoverBtn title={"Start a project"} />
              <svg
                className='nml_contact mr-5'
                data-name='Layer 1'
                height='22px'
                viewBox='0 0 72 45'
              >
                <rect
                  className='nml_contact-svg_long-line'
                  y='18'
                  width='54'
                  height='9'
                  fill='black'
                ></rect>
                <rect x='63' y='18' width='9' height='9' fill='black'></rect>
                <rect x='54' y='27' width='9' height='9' fill='black'></rect>
                <rect x='54' y='9' width='9' height='9' fill='black'></rect>
                <rect x='45' width='9' height='9' fill='black'></rect>
                <rect x='45' y='36' width='9' height='9' fill='black'></rect>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className='nav_dashes_container flex justify-evenly w-100 mt-3 fixed bottom-0 left-0 right-0'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
