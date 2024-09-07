'use client'
import React, { useRef, useState } from 'react'
import "./style.css"
import HoverBtn from "@/components/Shared/HoverBtn"
import Image from 'next/image';
import TabImage1 from "/public/pv_posters.jpg"
import TabImage2 from "/public/pv_color-palette.jpg"
import TabImage3 from "/public/nestvested_business-card.jpg"
import TabImage4 from "/public/nestvested_website.jpg"
import TabImage5 from "/public/purevirtual_website-parts.jpg"
import TabImage6 from "/public/abiya_website.jpg"
import VideoSection from './VideoSection';
import SliderSection from './Slider';

// Slider Images
import SliderImage1 from "/public/Slider/01-dcs-brand-manual-1.jpg"
import SliderImage2 from "/public/Slider/bemo-communication-arts-feature.jpg"
import SliderImage3 from "/public/Slider/20-bemo-streethoarding-1.jpg"
import SliderImage4 from "/public/Slider/alphamark-sotd-announcement.jpg"
import SliderImage5 from "/public/Slider/alphamark-new-look-announcement.jpg"
import SliderImage6 from "/public/Slider/alphamark-logofolio-thumb.jpg"
import SliderImage7 from "/public/Slider/digital-brand-guidelines-scaled.jpg"
import SliderImage8 from "/public/Slider/News.jpg"

// Brand Image
import BrandImage1 from "/public/all_logos-white-1-1536x1024.jpg"
import BrandImage2 from "/public/all_logos-black-1-1536x1024.jpg"
import BrandImage3 from "/public/agache-front-page-1536x1024.jpg"
import BrandImage4 from "/public/agache-1-1536x1024.jpg"

// Testimonial Image
import TestimonialImage1 from "/public/marcin_majewsky.jpg"

export default function Index() {
  const [videoPlay, setVideoPlay] = useState(false);
  const videoRef = useRef(null);

  // Tab Section

  const [tabOneActive, setTabOneActive] = useState(true)
  const [tabTwoActive, setTabTwoActive] = useState(true)


  // Shared Function
  const handleMouseEnter = (videoNum) => {
      setVideoPlay(true);
      videoRef.current.play();
  };

  const handleMouseLeave = () => {
      setVideoPlay(false);
      videoRef.current.pause();
  };
  
  // Slider Section
  const [sliderGrab, setSliderGrab] = useState(false)

  // Brand Section
  const [brandImage1, setBrandImage1] = useState(false)
  const [brandImage2, setBrandImage2] = useState(false)

  // Testimonial Section
  const [testimonialActive1, setTestimonialActive1] = useState(false)
  const [testimonialActive2, setTestimonialActive2] = useState(false)

  return (
    <>
      {/* Creative Partner */}
      <div className='border-b-2 border-black pb-5 pt-16 bg-[#f4f4f4]'>
        <div className='main_container'>
          <h1 className='text-4xl lg:text-7xl'>Your creative partner for brand and identity transformation.</h1>
        </div>
      </div>

      {/* Creative Card */}
      <div className='main_container grid grid-cols-1 lg:grid-cols-2  py-5 gap-4 bg-[#f4f4f4]'>
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
      <div className='main_container py-20 bg-[#f4f4f4]'>
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

      {/* Tab Section */}
      <div className='border-t-2 border-black bg-[#f4f4f4] hidden md:block'>
      <div className='main_container py-5'>
        <div className=''>
          <div className='grid grid-cols-4 mt-5 cursor-pointer' onClick={() => setTabOneActive(!tabOneActive)}>
            <h4 className='flex text-xl'><p className='rounded-full w-5 h-5 border flex justify-center items-center border-black-600 mr-2'>1</p>Corporate Identity Desing</h4>
            <div className=''></div>
            <div className=''>
              <div className='flex gap-2 mb-3 '>
                <div className={`bg-[#D4D4D4] ${tabOneActive ? "bg-transparent" : "w-20 h-12"} `}>
                  <Image src={TabImage1} alt='image' width={150} height={70} className={`${tabOneActive ? "block": "hidden"}`} />
                </div>
                <div className={`bg-black ${tabOneActive ? "bg-transparent" : "w-10 h-7"} `}>
                  <Image src={TabImage2} alt='image' width={70} height={35} className={`${tabOneActive ? "block": "hidden"}`} />
                </div>
                <div className={`bg-[#D4D4D4] ${tabOneActive ? "bg-transparent" : "w-12 h-9"} `}>
                  <Image src={TabImage3} alt='image' width={100} height={50} className={`${tabOneActive ? "block": "hidden"}`} />
                </div>
              </div>
            </div>
            <div className='flex gap-1 justify-end'>
            <div className={`indicator ${tabOneActive ? "" : "indicatorActive"}`} style={{width: "7px", height: "7px"}}></div>
            <div className={`indicator ${tabOneActive ? "" : "indicatorActive"}`} style={{width: "7px", height: "7px"}}></div>
            <div className={`indicator ${tabOneActive ? "" : "indicatorActive"}`} style={{width: "7px", height: "7px"}}></div>
            </div>
          </div>
          <div className={`grid grid-cols-4 ${tabOneActive ? "grid" : "hidden"}`}>
            <div className=''></div>
            <div className=''></div>
            <div className=' w-[30rem] justify-center'>
              <h4 className='text-xl'>Give your brand a premium personality:</h4>
              <p className='mb-4 mt-3'>Creative Direction; Visual Communication; Logo Design; Identity Systems & Guidelines; Rebranding; Stationery & Print Design; Digital Brand Assets;</p>
              <HoverBtn title={"Learn more about Corporate Identity"} textSize='text-2xl inline' />
            </div>
            <div className=''></div>
          </div>
        </div>
      </div>
      </div>

      <div className='border-t-2 border-b-2 border-black bg-[#f4f4f4] hidden md:block'>
      <div className='main_container py-5'>
        <div className=''>
          <div className='grid grid-cols-4 mt-5 cursor-pointer' onClick={() => setTabTwoActive(!tabTwoActive)}>
            <h4 className='flex text-xl'><p className='rounded-full w-5 h-5 border flex justify-center items-center border-black-600 mr-2'>2</p>Corporate Identity Desing</h4>
            <div className=''></div>
            <div className=''>
              <div className='flex gap-2 mb-3 '>
                <div className={`bg-[#D4D4D4] ${tabTwoActive ? "bg-transparent" : "w-12 h-9"} `}>
                  <Image src={TabImage4} alt='image' width={70} height={35} className={`${tabTwoActive ? "block": "hidden"}`} />
                </div>
                <div className={`bg-black ${tabTwoActive ? "bg-transparent" : "w-20 h-12"} `}>
                  <Image src={TabImage5} alt='image' width={150} height={70} className={`${tabTwoActive ? "block": "hidden"}`} />
                </div>
                <div className={`bg-[#D4D4D4] ${tabTwoActive ? "bg-transparent" : "w-12 h-9"} `}>
                  <Image src={TabImage6} alt='image' width={70} height={35} className={`${tabTwoActive ? "block": "hidden"}`} />
                </div>
              </div>
            </div>
            <div className='flex gap-1 justify-end'>
            <div className={`indicator ${tabTwoActive ? "" : "indicatorActive"}`} style={{width: "7px", height: "7px"}}></div>
            <div className={`indicator ${tabTwoActive ? "" : "indicatorActive"}`} style={{width: "7px", height: "7px"}}></div>
            <div className={`indicator ${tabTwoActive ? "" : "indicatorActive"}`} style={{width: "7px", height: "7px"}}></div>
            </div>
          </div>
          <div className={`grid grid-cols-4 ${tabTwoActive ? "grid" : "hidden"}`}>
            <div className=''></div>
            <div className=''></div>
            <div className=' w-[30rem] justify-center'>
              <h4 className='text-xl'>Give your brand a premium personality:</h4>
              <p className='mb-4 mt-3'>Creative Direction; Visual Communication; Logo Design; Identity Systems & Guidelines; Rebranding; Stationery & Print Design; Digital Brand Assets;</p>
              <HoverBtn title={"Learn more about Corporate Identity"} textSize='text-2xl inline' />
            </div>
            <div className=''></div>
          </div>
        </div>
      </div>
      </div>


{/* Mobile Tab Section */}
      <div className='block md:hidden py-5'>
        <h4 className='flex text-xl'><p className='rounded-full w-5 h-5 border flex justify-center items-center border-black-600 mr-2'>1</p>Corporate Identity Desing</h4>
        <Image src={TabImage1} alt='image' width={500} height={200} />
        <div className=' md:w-[30rem] justify-center'>
          <h4 className='text-xl'>Give your brand a premium personality:</h4>
          <p className='mb-4 mt-3'>Creative Direction; Visual Communication; Logo Design; Identity Systems & Guidelines; Rebranding; Stationery & Print Design; Digital Brand Assets;</p>
          <HoverBtn title={"Learn more about Corporate Identity"} textSize='text-2xl inline' />
        </div>
      </div>
      <div className='block md:hidden pb-5'>
        <h4 className='flex text-xl'><p className='rounded-full w-5 h-5 border flex justify-center items-center border-black-600 mr-2'>2</p>Corporate Identity Desing</h4>
        <Image src={TabImage2} alt='image' width={500} height={200} />
        <div className=' md:w-[30rem] justify-center'>
          <h4 className='text-xl'>Give your brand a premium personality:</h4>
          <p className='mb-4 mt-3'>Creative Direction; Visual Communication; Logo Design; Identity Systems & Guidelines; Rebranding; Stationery & Print Design; Digital Brand Assets;</p>
          <HoverBtn title={"Learn more about Corporate Identity"} textSize='text-2xl inline' />
        </div>
      </div>

      <VideoSection/>

      {/* Slider section */}
      <div className='py-5 bg-black'>
        <div className='main_container'>

        <div className='block md:flex justify-between items-start pb-20'>
          <h3 className='text-6xl'>Studio Insights</h3>
          <div className='flex'>
            <HoverBtn title={"Read all Insights"} textSize='inline text-2xl mr-3' />
            <p className='text-white text-2xl'>(27)</p>
          </div>
        </div>

        <div onMouseDown={() => setSliderGrab(true)} onMouseUp={() => setSliderGrab(false)} className={`${sliderGrab ? "cursor-grabbing scale-[.99]" : "cursor-grab"}`} >

          <SliderSection setting={
              {dots: false,
                autoplay:false,
                autoplaySpeed: 3000,
                infinite: false,
                speed: 500,
                slidesToShow: 3.5,
                swipeToSlide:true,
                responsive: [
                  {
                    breakpoint: 720,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      initialSlide: 2
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                ]
              }
              
          } className={"gap-3 "} >

            <div className='px-2'>
              <video
                className={`t_video`}
                muted
                loop
                autoPlay
                src='/Slider/sliderV.mp4'
              />
              <div className='mt-3 flex justify-between items-center'>
                <p className='text-[#BEBEBE]'>16 June • 2024</p>
                <p className='text-white flex justify-between items-center gap-2 bg-[#ffffff1a] px-3 py-1 rounded-full'>
                <svg class="p_c-svg" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.625L7 0V11.375L0 13V1.625Z" fill="white"></path>
                    <path d="M9 1.625L16 0L13.2 6.5L16 11.375L9 13V1.625Z" fill="white"></path>
                  </svg>
                  Press
                </p>
              </div>
              <h6 className='text-white my-3 text-xl'>Bemo wins SOTD award ▪ Awwwards</h6>
              <div className='flex'>
                <HoverBtn title={"Link to awwwards"} textSize='inline text-2xl mr-3' />
                <svg id="Layer_1" data-name="Layer 1" width="22" viewBox="0 0 72 45">
                  <rect class="a_l-svg_middle_line" y="18" width="54" height="9" fill="white"></rect>
                  <rect x="63" y="18" width="9" height="9" fill="white"></rect>
                  <rect x="54" y="27" width="9" height="9" fill="white"></rect>
                  <rect x="54" y="9" width="9" height="9" fill="white"></rect>
                  <rect x="45" width="9" height="9" fill="white"></rect>
                  <rect x="45" y="36" width="9" height="9" fill="white"></rect>
              </svg>
              </div>
            </div>

            <div className='px-2'>
              <Image src={SliderImage2} alt='image1' width={500} height={500} />
              <div className='mt-3 flex justify-between items-center'>
                <p className='text-[#BEBEBE]'>28 May • 2024</p>
                <p className='text-white flex justify-between items-center gap-2 bg-[#ffffff1a] px-3 py-1 rounded-full'>
                <svg class="p_c-svg" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.625L7 0V11.375L0 13V1.625Z" fill="white"></path>
                    <path d="M9 1.625L16 0L13.2 6.5L16 11.375L9 13V1.625Z" fill="white"></path>
                  </svg>
                  Press
                </p>
              </div>
              <h6 className='text-white my-3 text-xl'>Communication Arts features bemo.studio</h6>
              <p className='text-[#BEBEBE] text-xl'>Our work for bemo.studio was spotlighted in an interview by Communication Arts in their Webpicks category.</p>
              <div className='flex'>
                <HoverBtn title={"View Article"} textSize='inline text-2xl mr-3' />
                <svg id="Layer_1" data-name="Layer 1" width="22" viewBox="0 0 72 45">
                  <rect class="a_l-svg_middle_line" y="18" width="54" height="9" fill="white"></rect>
                  <rect x="63" y="18" width="9" height="9" fill="white"></rect>
                  <rect x="54" y="27" width="9" height="9" fill="white"></rect>
                  <rect x="54" y="9" width="9" height="9" fill="white"></rect>
                  <rect x="45" width="9" height="9" fill="white"></rect>
                  <rect x="45" y="36" width="9" height="9" fill="white"></rect>
              </svg>
              </div>
            </div>

            <div className='px-2'>
              <Image src={SliderImage3} alt='image1' width={500} height={500} />
              <div className='mt-3 flex justify-between items-center'>
                <p className='text-[#BEBEBE]'>1 May • 2024</p>
                <p className='text-white flex justify-between items-center gap-2 bg-[#ffffff1a] px-3 py-1 rounded-full'>
                  <svg class="p_c-svg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM16.2 9C16.2 5.03122 12.9688 1.8 9 1.8C5.03122 1.8 1.8 5.03122 1.8 9C1.8 12.9688 5.03122 16.2 9 16.2C12.9688 16.2 16.2 12.9688 16.2 9ZM5.45268 8.41463H2.99415C3.21659 6.15512 4.68 4.25854 6.69366 3.42732C5.99122 4.62146 5.53463 6.36585 5.45268 8.41463ZM11.3766 9.58537C11.2361 12.7346 10.0654 15.0293 9 15.0293C7.93463 15.0293 6.7639 12.7346 6.63512 9.58537H11.3766ZM9 2.97073C10.0654 2.97073 11.2361 5.26537 11.3766 8.41463H6.62341C6.7639 5.26537 7.93463 2.97073 9 2.97073ZM12.5473 8.41463C12.4771 6.36585 12.0088 4.60976 11.3063 3.42732C13.32 4.25854 14.7834 6.15512 15.0059 8.41463H12.5473ZM12.5473 9.58537H15.0059C14.7834 11.8449 13.32 13.7415 11.3063 14.5727C12.0088 13.3785 12.4771 11.6341 12.5473 9.58537ZM5.45268 9.58537C5.52293 11.6341 5.99122 13.3902 6.69366 14.5727C4.68 13.7415 3.21659 11.8449 2.99415 9.58537H5.45268Z" fill="white"></path>
                  </svg>
                  Project Updates
                </p>
              </div>
              <h6 className='text-white text-2xl my-2'>New website and identity for Bemo</h6>
              <p className='text-[#BEBEBE] text-xl'>In a new collaboration, we helped Bemo to reimagine their brand identity and rethink how they showcase their portfolio. Inspired by their works, we guided their team in crafting a fresh visual narrative that emphasizes their creative essence.</p>
              <div className='flex'>
                <HoverBtn title={"View Article"} textSize='inline text-2xl mr-3' />
                <svg id="Layer_1" data-name="Layer 1" width="22" viewBox="0 0 72 45">
                  <rect class="a_l-svg_middle_line" y="18" width="54" height="9" fill="white"></rect>
                  <rect x="63" y="18" width="9" height="9" fill="white"></rect>
                  <rect x="54" y="27" width="9" height="9" fill="white"></rect>
                  <rect x="54" y="9" width="9" height="9" fill="white"></rect>
                  <rect x="45" width="9" height="9" fill="white"></rect>
                  <rect x="45" y="36" width="9" height="9" fill="white"></rect>
              </svg>
              </div>
            </div>

            <div className='px-2'>
              <Image src={SliderImage4} alt='image1' width={500} height={500} />
              <div className='mt-3 flex justify-between items-center'>
                <p className='text-[#BEBEBE]'>18 october • 2024</p>
                <p className='text-white flex justify-between items-center gap-2 bg-[#ffffff1a] px-3 py-1 rounded-full'>
                <svg class="p_c-svg" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.625L7 0V11.375L0 13V1.625Z" fill="white"></path>
                    <path d="M9 1.625L16 0L13.2 6.5L16 11.375L9 13V1.625Z" fill="white"></path>
                  </svg>
                  Press
                </p>
              </div>
              <h6 className='text-white my-3 text-xl'>Alphamark™ wins SOTD ▪ Awwwards</h6>
              <div className='flex'>
                <HoverBtn title={"Link to awwwards"} textSize='inline text-2xl mr-3' />
                <svg id="Layer_1" data-name="Layer 1" width="22" viewBox="0 0 72 45">
                  <rect class="a_l-svg_middle_line" y="18" width="54" height="9" fill="white"></rect>
                  <rect x="63" y="18" width="9" height="9" fill="white"></rect>
                  <rect x="54" y="27" width="9" height="9" fill="white"></rect>
                  <rect x="54" y="9" width="9" height="9" fill="white"></rect>
                  <rect x="45" width="9" height="9" fill="white"></rect>
                  <rect x="45" y="36" width="9" height="9" fill="white"></rect>
              </svg>
              </div>
            </div>

            <div className='px-2'>
              <Image src={SliderImage5} alt='image1' width={500} height={500} />
              <div className='mt-3 flex justify-between items-center'>
                <p className='text-[#BEBEBE]'>24 August • 2024</p>
                <p className='text-white flex justify-between items-center gap-2 bg-[#ffffff1a] px-3 py-1 rounded-full'>
                <svg class="p_c-svg" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.625L7 0V11.375L0 13V1.625Z" fill="white"></path>
                    <path d="M9 1.625L16 0L13.2 6.5L16 11.375L9 13V1.625Z" fill="white"></path>
                  </svg>
                  Press
                </p>
              </div>
              <h6 className='text-white my-3 text-xl'>We have a new look ▪ Alphamark™</h6>
              <p className='text-[#BEBEBE] text-xl'>Marking a significant milestone for our studio — we updated our identity and website to capture the essence of who we evolved to be and where we stand.</p>
              <div className='flex'>
                <HoverBtn title={"View Article"} textSize='inline text-2xl mr-3' />
                <svg id="Layer_1" data-name="Layer 1" width="22" viewBox="0 0 72 45">
                  <rect class="a_l-svg_middle_line" y="18" width="54" height="9" fill="white"></rect>
                  <rect x="63" y="18" width="9" height="9" fill="white"></rect>
                  <rect x="54" y="27" width="9" height="9" fill="white"></rect>
                  <rect x="54" y="9" width="9" height="9" fill="white"></rect>
                  <rect x="45" width="9" height="9" fill="white"></rect>
                  <rect x="45" y="36" width="9" height="9" fill="white"></rect>
              </svg>
              </div>
            </div>

            <div className='px-2'>
              <Image src={SliderImage6} alt='image1' width={500} height={500} />
              <div className='mt-3 flex justify-between items-center'>
                <p className='text-[#BEBEBE]'>12 April • 2023</p>
                <p className='text-white flex justify-between items-center gap-2 bg-[#ffffff1a] px-3 py-1 rounded-full'>
                  <svg class="p_c-svg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM16.2 9C16.2 5.03122 12.9688 1.8 9 1.8C5.03122 1.8 1.8 5.03122 1.8 9C1.8 12.9688 5.03122 16.2 9 16.2C12.9688 16.2 16.2 12.9688 16.2 9ZM5.45268 8.41463H2.99415C3.21659 6.15512 4.68 4.25854 6.69366 3.42732C5.99122 4.62146 5.53463 6.36585 5.45268 8.41463ZM11.3766 9.58537C11.2361 12.7346 10.0654 15.0293 9 15.0293C7.93463 15.0293 6.7639 12.7346 6.63512 9.58537H11.3766ZM9 2.97073C10.0654 2.97073 11.2361 5.26537 11.3766 8.41463H6.62341C6.7639 5.26537 7.93463 2.97073 9 2.97073ZM12.5473 8.41463C12.4771 6.36585 12.0088 4.60976 11.3063 3.42732C13.32 4.25854 14.7834 6.15512 15.0059 8.41463H12.5473ZM12.5473 9.58537H15.0059C14.7834 11.8449 13.32 13.7415 11.3063 14.5727C12.0088 13.3785 12.4771 11.6341 12.5473 9.58537ZM5.45268 9.58537C5.52293 11.6341 5.99122 13.3902 6.69366 14.5727C4.68 13.7415 3.21659 11.8449 2.99415 9.58537H5.45268Z" fill="white"></path>
                  </svg>
                  Project Updates
                </p>
              </div>
              <h6 className='text-white text-2xl my-2'>Logofolio ▪ 2023</h6>
              <p className='text-[#BEBEBE] text-xl'>We just updated or logofolio items with new logos and symbols.</p>
              <div className='flex'>
                <HoverBtn title={"View our Logofolio"} textSize='inline text-2xl mr-3' />
                <svg id="Layer_1" data-name="Layer 1" width="22" viewBox="0 0 72 45">
                  <rect class="a_l-svg_middle_line" y="18" width="54" height="9" fill="white"></rect>
                  <rect x="63" y="18" width="9" height="9" fill="white"></rect>
                  <rect x="54" y="27" width="9" height="9" fill="white"></rect>
                  <rect x="54" y="9" width="9" height="9" fill="white"></rect>
                  <rect x="45" width="9" height="9" fill="white"></rect>
                  <rect x="45" y="36" width="9" height="9" fill="white"></rect>
              </svg>
              </div>
            </div>

            <div className='px-2'>
              <video
                className={`t_video`}
                muted
                loop
                autoPlay
                src='/Slider/alphamark-showreel-2022.mp4'
              />
              <div className='mt-3 flex justify-between items-center'>
                <p className='text-[#BEBEBE]'>14 January • 2023</p>
                <p className='text-white flex justify-between items-center gap-2 bg-[#ffffff1a] px-3 py-1 rounded-full'>
                <svg class="p_c-svg" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.625L7 0V11.375L0 13V1.625Z" fill="white"></path>
                    <path d="M9 1.625L16 0L13.2 6.5L16 11.375L9 13V1.625Z" fill="white"></path>
                  </svg>
                  Press
                </p>
              </div>
              <h6 className='text-white my-3 text-xl'>A year in Review ▪ 2022</h6>
              <p className='text-[#BEBEBE] text-xl'>The exciting journey in 2022 towards growth and improvement brought a lot of opportunities to work on great projects that helped us expand our team, strengthen our offerings and build more efficient work processes.</p>
            </div>

            <div className='px-2'>
              <Image src={SliderImage1} alt='image1' width={500} height={500} />
              <div className='mt-3 flex justify-between items-center'>
                <p className='text-[#BEBEBE]'>20 September • 2022</p>
                <p className='text-white flex justify-between items-center gap-2 bg-[#ffffff1a] px-3 py-1 rounded-full'>
                  <svg class="p_c-svg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM16.2 9C16.2 5.03122 12.9688 1.8 9 1.8C5.03122 1.8 1.8 5.03122 1.8 9C1.8 12.9688 5.03122 16.2 9 16.2C12.9688 16.2 16.2 12.9688 16.2 9ZM5.45268 8.41463H2.99415C3.21659 6.15512 4.68 4.25854 6.69366 3.42732C5.99122 4.62146 5.53463 6.36585 5.45268 8.41463ZM11.3766 9.58537C11.2361 12.7346 10.0654 15.0293 9 15.0293C7.93463 15.0293 6.7639 12.7346 6.63512 9.58537H11.3766ZM9 2.97073C10.0654 2.97073 11.2361 5.26537 11.3766 8.41463H6.62341C6.7639 5.26537 7.93463 2.97073 9 2.97073ZM12.5473 8.41463C12.4771 6.36585 12.0088 4.60976 11.3063 3.42732C13.32 4.25854 14.7834 6.15512 15.0059 8.41463H12.5473ZM12.5473 9.58537H15.0059C14.7834 11.8449 13.32 13.7415 11.3063 14.5727C12.0088 13.3785 12.4771 11.6341 12.5473 9.58537ZM5.45268 9.58537C5.52293 11.6341 5.99122 13.3902 6.69366 14.5727C4.68 13.7415 3.21659 11.8449 2.99415 9.58537H5.45268Z" fill="white"></path>
                  </svg>
                  Project Updates
                </p>
              </div>
              <h6 className='text-white text-2xl my-2'>Delta Cloud Systems <br/> New identity & website</h6>
              <p className='text-[#BEBEBE] text-xl'>A tech-savvy identity for Delta Cloud Systems (DCS) — company focused on providing cloud technologies, IT infrastructure solutions & IT Consulting, specifically to fast-growing SaaS businesses.</p>
            </div>

            <div className='px-2'>
              <Image src={SliderImage7} alt='image1' width={500} height={500} />
              <div className='mt-3 flex justify-between items-center'>
                <p className='text-[#BEBEBE]'>10 August • 2022</p>
                <p className='text-white flex justify-between items-center gap-2 bg-[#ffffff1a] px-3 py-1 rounded-full'>
                  <svg class="p_c-svg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM16.2 9C16.2 5.03122 12.9688 1.8 9 1.8C5.03122 1.8 1.8 5.03122 1.8 9C1.8 12.9688 5.03122 16.2 9 16.2C12.9688 16.2 16.2 12.9688 16.2 9ZM5.45268 8.41463H2.99415C3.21659 6.15512 4.68 4.25854 6.69366 3.42732C5.99122 4.62146 5.53463 6.36585 5.45268 8.41463ZM11.3766 9.58537C11.2361 12.7346 10.0654 15.0293 9 15.0293C7.93463 15.0293 6.7639 12.7346 6.63512 9.58537H11.3766ZM9 2.97073C10.0654 2.97073 11.2361 5.26537 11.3766 8.41463H6.62341C6.7639 5.26537 7.93463 2.97073 9 2.97073ZM12.5473 8.41463C12.4771 6.36585 12.0088 4.60976 11.3063 3.42732C13.32 4.25854 14.7834 6.15512 15.0059 8.41463H12.5473ZM12.5473 9.58537H15.0059C14.7834 11.8449 13.32 13.7415 11.3063 14.5727C12.0088 13.3785 12.4771 11.6341 12.5473 9.58537ZM5.45268 9.58537C5.52293 11.6341 5.99122 13.3902 6.69366 14.5727C4.68 13.7415 3.21659 11.8449 2.99415 9.58537H5.45268Z" fill="white"></path>
                  </svg>
                  Studio Insights
                </p>
              </div>
              <h6 className='text-white text-2xl my-2'>Introducing digital brand guidelines <br/>  Alphamark™ </h6>
              <p className='text-[#BEBEBE] text-xl'>Since brand guidelines are one of the most important things when it comes to achieving brand clarity and consistency — from now on, we are introducing digital brand guidelines for each branding project. Allowing clients to quickly access, share and download assets directly from their resource pages.</p>
            </div>

            <div className='px-2'>
              <Image src={SliderImage8} alt='image1' width={500} height={500} />
              <div className='mt-3 flex justify-between items-center'>
                <p className='text-[#BEBEBE]'>29 July • 2022</p>
                <p className='text-white flex justify-between items-center gap-2 bg-[#ffffff1a] px-3 py-1 rounded-full'>
                  <svg class="p_c-svg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM16.2 9C16.2 5.03122 12.9688 1.8 9 1.8C5.03122 1.8 1.8 5.03122 1.8 9C1.8 12.9688 5.03122 16.2 9 16.2C12.9688 16.2 16.2 12.9688 16.2 9ZM5.45268 8.41463H2.99415C3.21659 6.15512 4.68 4.25854 6.69366 3.42732C5.99122 4.62146 5.53463 6.36585 5.45268 8.41463ZM11.3766 9.58537C11.2361 12.7346 10.0654 15.0293 9 15.0293C7.93463 15.0293 6.7639 12.7346 6.63512 9.58537H11.3766ZM9 2.97073C10.0654 2.97073 11.2361 5.26537 11.3766 8.41463H6.62341C6.7639 5.26537 7.93463 2.97073 9 2.97073ZM12.5473 8.41463C12.4771 6.36585 12.0088 4.60976 11.3063 3.42732C13.32 4.25854 14.7834 6.15512 15.0059 8.41463H12.5473ZM12.5473 9.58537H15.0059C14.7834 11.8449 13.32 13.7415 11.3063 14.5727C12.0088 13.3785 12.4771 11.6341 12.5473 9.58537ZM5.45268 9.58537C5.52293 11.6341 5.99122 13.3902 6.69366 14.5727C4.68 13.7415 3.21659 11.8449 2.99415 9.58537H5.45268Z" fill="white"></path>
                  </svg>
                  Studio Insights
                </p>
              </div>
              <h6 className='text-white text-2xl my-2'>Aventis Advisors <br/>New identity and website </h6>
              <p className='text-[#BEBEBE] text-xl'>We collaborated with the Aventis Advisors team to re-brand, design & develop a new website and strengthen up their digital presence.</p>
              <div className='flex'>
                <HoverBtn title={"View Websites"} textSize='inline text-2xl mr-3' />
                <svg id="Layer_1" data-name="Layer 1" width="22" viewBox="0 0 72 45">
                  <rect class="a_l-svg_middle_line" y="18" width="54" height="9" fill="white"></rect>
                  <rect x="63" y="18" width="9" height="9" fill="white"></rect>
                  <rect x="54" y="27" width="9" height="9" fill="white"></rect>
                  <rect x="54" y="9" width="9" height="9" fill="white"></rect>
                  <rect x="45" width="9" height="9" fill="white"></rect>
                  <rect x="45" y="36" width="9" height="9" fill="white"></rect>
              </svg>
              </div>
            </div>

          </SliderSection>
        </div>
        </div>
      </div>

      <div className='border-b-2 border-black pb-5 pt-16 bg-[#f4f4f4]'>
        <div className='main_container'>
          <h1 className='text-4xl lg:text-7xl'>We work with ambitious people and companies to help them with the creation, reinvention, or transformation of their brand.</h1>
        </div>
      </div>

      {/* Brand Section */}

      <div className='main_container py-20 bg-[#f4f4f4]'>
      <div className='grid grid-cols-1 md:grid-cols-4'>
        <div className=''>
          <div className='' onMouseEnter={() => setBrandImage1(true)} onMouseLeave={() => setBrandImage1(false)}>
            <div className='flex gap-1 pt-2 pb-1'>
              <div className={`indicator ${brandImage1 ? "" : "indicatorActive"}`}></div>
              <div className={`indicator ${brandImage1 ? "indicatorActive" : ""}`}></div>
            </div>

            <Image src={brandImage1 ? BrandImage2 : BrandImage1} alt="" className={`t_video`} />
            <div className='flex gap-3 items-center'>
              <svg className="nml_contact transition-all" data-name="Layer 1" height={brandImage1 ? "22px" : "0px"} viewBox="0 0 72 45">
                <rect className="nml_contact-svg_long-line" y="18" width="54" height="9" fill="black"></rect>
                <rect x="63" y="18" width="9" height="9" fill="black"></rect>
                <rect x="54" y="27" width="9" height="9" fill="black"></rect>
                <rect x="54" y="9" width="9" height="9" fill="black"></rect>
                <rect x="45" width="9" height="9" fill="black"></rect>
                <rect x="45" y="36" width="9" height="9" fill="black"></rect>
              </svg>
              <h5 className='text-2xl underline underline-offset-8'>Bemo</h5>

              <div className={`smallBox transition-all ${brandImage1 ? "opacity-1 visiable" : "opacity-1 visiable lg:opacity-0 invisiable"}`}></div>
              <p className={`text-2xl transition-all ${brandImage1 ? "opacity-1 visiable" : "opacity-1 visiable lg:opacity-0 invisiable"}`}>Redefining Bemo. A fusion of design and storytelling.</p>
            </div>
          </div>
        </div>
        <div></div>
        <div className='col-span-2'>
          <div className='' onMouseEnter={() => setBrandImage2(true)} onMouseLeave={() => setBrandImage2(false)}>
            <div className='flex gap-1 pt-2 pb-1'>
              <div className={`indicator ${brandImage2 ? "" : "indicatorActive"}`}></div>
              <div className={`indicator ${brandImage2 ? "indicatorActive" : ""}`}></div>
            </div>

            <Image src={brandImage2 ?BrandImage4 : BrandImage3} alt="" className={`t_video`} />
            <div className='flex gap-3 items-center'>
              <svg className="nml_contact transition-all" data-name="Layer 1" height={brandImage2 ? "22px" : "0px"} viewBox="0 0 72 45">
                <rect className="nml_contact-svg_long-line" y="18" width="54" height="9" fill="black"></rect>
                <rect x="63" y="18" width="9" height="9" fill="black"></rect>
                <rect x="54" y="27" width="9" height="9" fill="black"></rect>
                <rect x="54" y="9" width="9" height="9" fill="black"></rect>
                <rect x="45" width="9" height="9" fill="black"></rect>
                <rect x="45" y="36" width="9" height="9" fill="black"></rect>
              </svg>
              <h5 className='text-2xl underline underline-offset-8'>Bemo</h5>

              <div className={`smallBox transition-all ${brandImage2 ? "opacity-1 visiable" : "opacity-1 visiable lg:opacity-0 invisiable"}`}></div>
              <p className={`text-2xl transition-all ${brandImage2 ? "opacity-1 visiable" : "opacity-1 visiable lg:opacity-0 invisiable"}`}>Redefining Bemo. A fusion of design and storytelling.</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Testimonial Section */}

      <div className='border-t-2 border-b-2 border-black bg-[#f4f4f4]'>
      <div className='main_container py-5'>
        <div className='grid grid-cols-1 md:grid-cols-4'>
          <div>
            <div>
              <div className={`${testimonialActive1 ? " hidden md:block" : "hidden"}`}>
                <p className='font-medium'>Services Provided</p>
                <ul>
                  <li className='text-[#222223]'>Logo Design</li>
                  <li className='text-[#222223]'>Corporate Identity Design</li>
                  <li className='text-[#222223]'>Branding Guidelines</li>
                  <li className='text-[#222223]'>Web Design</li>
                  <li className='text-[#222223]'>Website Development</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='md:col-span-3'>
            <div className='grid grid-cols-4 mt-5 cursor-pointer' onClick={() => setTestimonialActive1(!testimonialActive1)}>
              <div className='col-span-2'>
                <div className='flex gap-2 mb-3 '>
                  <div className={`bg-[#D4D4D4] ${testimonialActive1 ? "bg-transparent" : "w-14 h-14"} rounded-full`}>
                    <Image src={TestimonialImage1} alt='image' width={50} height={50} className={`${testimonialActive1 ? "block": "hidden"} rounded-full`} />
                  </div>
                  <div className={``}>
                    <p className='text-red-500'>Marcin Maajewski</p>
                    <p>Founder • Aventis Advisors</p>
                  </div>
                </div>
              </div>
              <div className='flex gap-1 justify-end col-span-2'>
              <div className={`indicator ${testimonialActive1 ? "" : "indicatorActive"}`} style={{width: "7px", height: "7px"}}></div>
              <div className={`indicator ${testimonialActive1 ? "" : "indicatorActive"}`} style={{width: "7px", height: "7px"}}></div>
              <div className={`indicator ${testimonialActive1 ? "" : "indicatorActive"}`} style={{width: "7px", height: "7px"}}></div>
              </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-4 ${testimonialActive1 ? "grid" : "hidden"}`}>
              <div className='justify-center col-span-3'>
                <p className='mb-4 mt-3 text-4xl'>“Antonio and the team have been a great help in creating our new brand identity. They have provided us guidance on every step of the way and delivered an outstanding final product.“</p>
              </div>
            <div className={`block md:hidden`}>
              <p className='font-medium'>Services Provided</p>
              <ul>
                <li className='text-[#222223]'>Logo Design</li>
                <li className='text-[#222223]'>Corporate Identity Design</li>
                <li className='text-[#222223]'>Branding Guidelines</li>
                <li className='text-[#222223]'>Web Design</li>
                <li className='text-[#222223]'>Website Development</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className='border-t-2 border-b-2 border-black bg-[#f4f4f4]'>
      <div className='main_container py-5'>
        <div className='grid grid-cols-1 md:grid-cols-4'>
          <div>
            <div>
              <div className={`${testimonialActive2 ? " hidden md:block" : "hidden"}`}>
                <p className='font-medium'>Services Provided</p>
                <ul>
                  <li className='text-[#222223]'>Logo Design</li>
                  <li className='text-[#222223]'>Corporate Identity Design</li>
                  <li className='text-[#222223]'>Branding Guidelines</li>
                  <li className='text-[#222223]'>Web Design</li>
                  <li className='text-[#222223]'>Website Development</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='md:col-span-3'>
            <div className='grid grid-cols-4 mt-5 cursor-pointer' onClick={() => setTestimonialActive2(!testimonialActive2)}>
              <div className='col-span-2'>
                <div className='flex gap-2 mb-3 '>
                  <div className={`bg-[#D4D4D4] ${testimonialActive2 ? "bg-transparent" : "w-14 h-14"} rounded-full`}>
                    <Image src={TestimonialImage1} alt='image' width={50} height={50} className={`${testimonialActive2 ? "block": "hidden"} rounded-full`} />
                  </div>
                  <div className={``}>
                    <p className='text-red-500'>Marcin Maajewski</p>
                    <p>Founder • Aventis Advisors</p>
                  </div>
                </div>
              </div>
              <div className='flex gap-1 justify-end col-span-2'>
              <div className={`indicator ${testimonialActive2 ? "" : "indicatorActive"}`} style={{width: "7px", height: "7px"}}></div>
              <div className={`indicator ${testimonialActive2 ? "" : "indicatorActive"}`} style={{width: "7px", height: "7px"}}></div>
              <div className={`indicator ${testimonialActive2 ? "" : "indicatorActive"}`} style={{width: "7px", height: "7px"}}></div>
              </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-4 ${testimonialActive2 ? "grid" : "hidden"}`}>
              <div className='justify-center col-span-3'>
                <p className='mb-4 mt-3 text-4xl'>“Antonio and the team have been a great help in creating our new brand identity. They have provided us guidance on every step of the way and delivered an outstanding final product.“</p>
              </div>
            <div className={`block md:hidden`}>
              <p className='font-medium'>Services Provided</p>
              <ul>
                <li className='text-[#222223]'>Logo Design</li>
                <li className='text-[#222223]'>Corporate Identity Design</li>
                <li className='text-[#222223]'>Branding Guidelines</li>
                <li className='text-[#222223]'>Web Design</li>
                <li className='text-[#222223]'>Website Development</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
