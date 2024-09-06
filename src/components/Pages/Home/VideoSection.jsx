import React, { useRef, useState } from 'react';

export default function VideoSection() {
  // Video Section
  const [video1, setVideo1] = useState(false);
  const [video2, setVideo2] = useState(false);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  // Shared Function
  const handleMouseEnter = (videoNum) => {
    if (videoNum === "2") {
      setVideo1(true);
      video1Ref.current.play();
    } else if (videoNum === "3") {
      setVideo2(true);
      video2Ref.current.play();
    }
  };

  const handleMouseLeave = (videoNum) => {
    if (videoNum === "2") {
      setVideo1(false);
      video1Ref.current.pause();
    } else if (videoNum === "3") {
      setVideo2(false);
      video2Ref.current.pause();
    }
  };

  return (
    <div className='main_container py-20 bg-[#f4f4f4]'>
      <div className='grid grid-cols-4'>
        <div className='col-span-2'>
          <div className='' onMouseEnter={() => handleMouseEnter("2")} onMouseLeave={() => handleMouseLeave("2")}>
            <div className='flex gap-1 pt-2 pb-1'>
              <div className={`indicator ${video1 ? "" : "indicatorActive"}`}></div>
              <div className={`indicator ${video1 ? "indicatorActive" : ""}`}></div>
            </div>

            <img src="https://alphamark.design/wp-content/uploads/2024/04/20-bemo-streethoarding.jpg" alt="" className={`t_video ${video1 ? "hidden" : "block"}`} />
            <video
              ref={video1Ref}
              className={`t_video ${video1 ? "block" : "hidden"}`}
              muted
              loop
              src='/Alphamark™ Branding Studio.mp4'
            />
            <div className='flex gap-3 items-center'>
              <svg className="nml_contact transition-all" data-name="Layer 1" height={video1 ? "22px" : "0px"} viewBox="0 0 72 45">
                <rect className="nml_contact-svg_long-line" y="18" width="54" height="9" fill="black"></rect>
                <rect x="63" y="18" width="9" height="9" fill="black"></rect>
                <rect x="54" y="27" width="9" height="9" fill="black"></rect>
                <rect x="54" y="9" width="9" height="9" fill="black"></rect>
                <rect x="45" width="9" height="9" fill="black"></rect>
                <rect x="45" y="36" width="9" height="9" fill="black"></rect>
              </svg>
              <h5 className='text-2xl underline underline-offset-8'>Bemo</h5>

              <div className={`smallBox transition-all ${video1 ? "opacity-1 visiable" : "opacity-1 visiable lg:opacity-0 invisiable"}`}></div>
              <p className={`text-2xl transition-all ${video1 ? "opacity-1 visiable" : "opacity-1 visiable lg:opacity-0 invisiable"}`}>Redefining Bemo. A fusion of design and storytelling.</p>
            </div>
          </div>
        </div>
        <div></div>
        <div>
          <div className='' onMouseEnter={() => handleMouseEnter("3")} onMouseLeave={() => handleMouseLeave("3")}>
            <div className='flex gap-1 pt-2 pb-1'>
              <div className={`indicator ${video2 ? "" : "indicatorActive"}`}></div>
              <div className={`indicator ${video2 ? "indicatorActive" : ""}`}></div>
            </div>

            <img src="https://alphamark.design/wp-content/uploads/2024/04/20-bemo-streethoarding.jpg" alt="" className={`t_video ${video2 ? "hidden" : "block"}`} />
            <video
              ref={video2Ref}
              className={`t_video ${video2 ? "block" : "hidden"}`}
              muted
              loop
              src='/Alphamark™ Branding Studio.mp4'
            />
            <div className='flex gap-3 items-center'>
              <svg className="nml_contact transition-all" data-name="Layer 1" height={video2 ? "22px" : "0px"} viewBox="0 0 72 45">
                <rect className="nml_contact-svg_long-line" y="18" width="54" height="9" fill="black"></rect>
                <rect x="63" y="18" width="9" height="9" fill="black"></rect>
                <rect x="54" y="27" width="9" height="9" fill="black"></rect>
                <rect x="54" y="9" width="9" height="9" fill="black"></rect>
                <rect x="45" width="9" height="9" fill="black"></rect>
                <rect x="45" y="36" width="9" height="9" fill="black"></rect>
              </svg>
              <h5 className='text-2xl underline underline-offset-8'>Bemo</h5>

              <div className={`smallBox transition-all ${video2 ? "opacity-1 visiable" : "opacity-1 visiable lg:opacity-0 invisiable"}`}></div>
              <p className={`text-2xl transition-all ${video2 ? "opacity-1 visiable" : "opacity-1 visiable lg:opacity-0 invisiable"}`}>Redefining Bemo. A fusion of design and storytelling.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
