'use client'
import React, { useRef, useState } from 'react'
import "./style.css"
import HoverBtn from "@/components/Shared/HoverBtn"

export default function Index() {
  const [videoPlay, setVideoPlay] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setVideoPlay(true);
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    setVideoPlay(false);
    videoRef.current.pause();
  };
  return (
    <>
      {/* Creative Partner */}
      <div className='border-b-2 border-black pb-5 pt-16 bg-white'>
        <div className='main_container'>
          <h1 className='text-4xl lg:text-7xl'>Your creative partner for brand and identity transformation.</h1>
        </div>
      </div>

      {/* Creative Card */}
      <div className='main_container grid grid-cols-1 lg:grid-cols-2  py-5 gap-4 bg-white'>
        <div className=''>
          <p className='text-end'>00__1</p>
            <video autoPlay={true} class="t_video" muted loop src='/1_hor_poster.mp4' >
            </video>
          <div className='flex gap-3 items-center'>
            <h5 className='text-2xl underline underline-offset-8'>Acrea AG</h5>
            <div className='smallBox'></div>
            <p className='text-2xl'>Coming Soon</p>
          </div>
        </div>
    <div className='' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className='flex gap-1 pt-2 pb-1'>
        <div className={`indicator ${videoPlay ? "" : "indicatorActive"}`}></div>
        <div className={`indicator ${videoPlay ? "indicatorActive" : ""}`}></div>
      </div>
      
      <img src="https://alphamark.design/wp-content/uploads/2024/04/20-bemo-streethoarding.jpg" alt="" className={`t_video ${videoPlay ? "hidden" : "block"}`} />
      <video
        ref={videoRef}
        className={`t_video ${videoPlay ? "block" : "hidden"}`}
        muted
        loop
        src='/Alphamark™ Branding Studio.mp4'
      />
      <div className='flex gap-3 items-center'>
        <svg className="nml_contact transition-all" data-name="Layer 1" height={videoPlay ?"22px" : "0px"} viewBox="0 0 72 45">
          <rect className="nml_contact-svg_long-line" y="18" width="54" height="9" fill="black"></rect>
          <rect x="63" y="18" width="9" height="9" fill="black"></rect>
          <rect x="54" y="27" width="9" height="9" fill="black"></rect>
          <rect x="54" y="9" width="9" height="9" fill="black"></rect>
          <rect x="45" width="9" height="9" fill="black"></rect>
          <rect x="45" y="36" width="9" height="9" fill="black"></rect>
        </svg>
        <h5 className='text-2xl underline underline-offset-8'>Bemo</h5>
        
        <div className={`smallBox transition-all ${videoPlay ? "opacity-1 visiable" : "opacity-1 visiable lg:opacity-0 invisiable"}`}></div>
        <p className={`text-2xl transition-all ${videoPlay ? "opacity-1 visiable" : "opacity-1 visiable lg:opacity-0 invisiable"}`}>Redefining Bemo. A fusion of design and storytelling.</p>
      </div>
    </div>
      </div>

      {/* service Section */}
      <div className='main_container py-5 bg-white'>
        <h3 className='text-3xl lg:text-6xl'>At Alphamark, we specialize in building cutting-edge identity systems to help professional service providers increase their value and gain a competitive advantage from branding & websites.</h3>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10'>
          <div></div>
          <div></div>
          <div>
            <p className='text-2xl'>We are a boutique branding studio focused on brand identity and website transformation, mainly for clients in the IT & Technology sector, Consulting & Advisory, and more.</p>
            <p className='text-2xl mt-5 mb-8'>By using clean, essential, and practical design, we creatively support companies determined to move forward and leave their mark.</p>
            <HoverBtn title={"Discover our projects"} textSize={"text-2xl inline"} />
          </div>
          <div></div>
        </div>
      </div>

    </>
  )
}
