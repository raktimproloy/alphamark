import React from 'react'
import Styles from "./style.module.css"

export default function index() {
  return (
    <div className='py-5 bg-black'>
        <div className='main_container'>
            <h1 className='text-6xl text-[#707273]'>Interested in working with us?</h1>
            <div className='grid grid-cols-4 mt-10'>
              <div className='col-span-2' >
                <h5 className='text-2xl'>Discover more in our <br /> company deck</h5>
                <div className='flex mt-5'>
                  <p className='text-white flex justify-between items-center gap-2 bg-[#ffffff1a] px-3 py-2 rounded-full'>
                    View our deck
                    <svg height="13px" className='bg-black rounded full w-10 h-5 px-2 py-1' viewBox="0 0 72 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M72 18.5H63V27.5H72V18.5Z" fill="white"></path>
                      <path d="M54 0.5H45V9.5H54V0.5Z" fill="white"></path>
                      <path d="M54 27.5V36.5V45.5H45H36H27H18H9H0V36.5H9H18H27H36H45V27.5V18.5H54V27.5Z" fill="white"></path>
                      <path d="M63 9.5H54V18.5H63V9.5Z" fill="white"></path>
                      <path d="M45 9.5H36V18.5H45V9.5Z" fill="white"></path>
                      <path d="M36 18.5H27V27.5H36V18.5Z" fill="white"></path>
                    </svg>
                  </p>
                </div>
              </div>
              <div className='' >
                <p className='text-white'>Company</p>
                <ul>
                  <li className={`text-white ${Styles.listDot} `}>Projects</li>
                  <li className={`text-white ${Styles.listDot} `}>About</li>
                  <li className={`text-white ${Styles.listDot} `}>Insights</li>
                  <li className={`text-white ${Styles.listDot} `}>Services</li>
                  <li className={`text-white ${Styles.listDot} `}>Lab</li>
                  <li className={`text-white ${Styles.listDot} `}>Contact</li>
                </ul>
                <p className='text-white mt-5'>Services</p>
                <ul>
                  <li className={`text-white ${Styles.listDot} `}>Corporate Identity</li>
                  <li className={`text-white ${Styles.listDot} `}>Corporate Websites</li>
                </ul>
              </div>
              <div className='' >
                <p className='text-white'>Resources</p>
                <ul>
                  <li className={`text-white ${Styles.listDot} `}>Testimonials</li>
                  <li className={`text-white ${Styles.listDot} `}>FAQs</li>
                  <li className={`text-white ${Styles.listDot} `}>Privacy Policy</li>
                  <li className={`text-white ${Styles.listDot} `}>Legal Notice</li>
                </ul>
              </div>
            </div>
        </div>

        <div>
          
        </div>
    </div>
  )
}
