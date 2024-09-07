'use client'
import React, { useEffect, useState } from 'react'
import Styles from "./style.module.css"
import HoverBtn from "@/components/Shared/HoverBtn"

export default function Index() {
  const [translateValue, setTranslateValue] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      if(scrollPercent > 85){
        const minus = 100 - scrollPercent
        const xValue = 7 - minus
        setTranslateValue(xValue)
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='py-5 bg-black'>
        <div className='main_container'>
            <h1 className='text-2xl md:text-6xl text-[#707273] mb-3'>Interested in working with us?</h1>
            <HoverBtn title={"hello@alphamark.design"} textSize='text-2xl md:text-6xl inline'  />
            <div className='grid grid-cols-2 md:grid-cols-4 mt-30'>
              <div className='col-span-2 mb-10' >
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
          <div className={`${Styles.bottomText} py-5`} style={{
            transform: `scale(1.15) translate(-${translateValue}%)`
          }}>
            <svg class="" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1834 218">
              <path class="alph_logo-left" d="M0,165.31H16.87V99h16.6V49.48H49.8V0H69.34V49.48h16.6V99h16.34v66.34h16.59V218H99.6V168H19.81v50H0Zm83-16.59V101.91H66.4V52.43H52.74v49.48H36.14v46.81Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M160.64,0h19.81V198.21h99.07V218H160.64Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M321.28,0h85.94V16.32h16.34V32.9h16.6v69h-16.6V118.5H407.22v16.58H341.09V218H321.28Zm83,115.55V99h16.6V35.84h-16.6V19.26H341.09v96.29Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M481.92,0h19.81V99h79.79V0H600.8V218H581.52V118.5H501.73V218H481.92Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M642.56,165.31h16.87V99H676V49.48h16.33V0h19.55V49.48h16.6V99h16.33v66.34h16.6V218H742.16V168H662.38v50H642.56Zm83-16.59V101.91H709V52.43H695.31v49.48h-16.6v46.81Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M803.2,0H823V32.9h16.33V82.65H856v66.07H869.6V82.65h16.6V32.9h16.6V0h19.28V218H902.8V85.33H889.15v66.33h-16.6v49.49H853V151.66H836.67V85.33H823V218H803.2Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M963.84,165.31h16.87V99h16.6V49.48h16.33V0h19.55V49.48h16.6V99h16.33v66.34h16.6V218h-19.28V168H983.66v50H963.84Zm83-16.59V101.91h-16.6V52.43h-13.65v49.48H1000v46.81Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M1124.49,0h85.94V16.32h16.33V32.9h16.6V85.33h-16.6v16.58h-16.33v13.64h16.33v49.76h16.6V218h-19.28V168h-16.6V118.5H1144.3V218h-19.81Zm83,99V82.65h16.6V35.84h-16.6V19.26H1144.3V99Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M1285.13,0h19.81V82.65h13.65V66.07h16.33V49.48h16.6V32.9h16.6V16.32h16.6V0H1404V19.26h-16.6V35.84h-16.33V52.43h-16.6V69h-16.6V85.33h-16.6v30.22h16.6v16.59h16.6v16.58h16.6v33.17h16.33v16.32H1404V218h-19.28V201.15h-16.6V184.56h-16.6v-32.9h-16.6V135.08h-16.33V118.5h-13.65V218h-19.81Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M1568.15,95.51H1834v26.76H1568.15Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M1515,95.51h26.57v26.76H1515Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M1541.58,122.26h26.57V149h-26.57Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M1568.15,149h26.57v26.76h-26.57Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M1541.58,68.75h26.57V95.5h-26.57Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M1568.15,42h26.57V68.75h-26.57Z" transform="translate(0 0)"></path>
            </svg>
          </div>
          <div className={`${Styles.bottomText} py-5 my-5`} style={{
            transform: `scale(1.15) translate(${translateValue}%)`
          }}>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1834 220">
              <path class="alph_logo-right" d="M430,166.82h16.87V99.88h16.6V49.94H479.8V0h19.54V49.94h16.6V99.88h16.34v66.94h16.59V220H529.6V169.52H449.81V220H430Zm83-16.73V102.85H496.4V52.91H482.74v49.94h-16.6v47.24Z" transform="translate(0 0)"></path>
              <path class="alph_logo-right" d="M590.64,0h19.81V200h99.07v20H590.64Z" transform="translate(0 0)"></path>
              <path class="alph_logo-right" d="M751.28,0h85.94V16.47h16.34V33.2h16.6v69.65h-16.6v16.73H837.22v16.74H771.09V220H751.28Zm83,116.61V99.88h16.6V36.17h-16.6V19.44H771.09v97.17Z" transform="translate(0 0)"></path>
              <path class="alph_logo-right" d="M911.92,0h19.81V99.88h79.79V0h19.28V220h-19.28V119.58H931.73V220H911.92Z" transform="translate(0 0)"></path>
              <path class="alph_logo-right" d="M1072.56,166.82h16.87V99.88H1106V49.94h16.33V0h19.55V49.94h16.6V99.88h16.33v66.94h16.6V220h-19.28V169.52h-79.78V220h-19.82Zm83-16.73V102.85H1139V52.91h-13.65v49.94h-16.6v47.24Z" transform="translate(0 0)"></path>
              <path class="alph_logo-right" d="M1233.2,0H1253V33.2h16.33V83.41H1286v66.68h13.65V83.41h16.6V33.2h16.6V0h19.28V220H1332.8V86.11h-13.65v66.94h-16.6V203H1283V153.05h-16.33V86.11H1253V220H1233.2Z" transform="translate(0 0)"></path>
              <path class="alph_logo-right" d="M1393.84,166.82h16.87V99.88h16.6V49.94h16.33V0h19.55V49.94h16.6V99.88h16.33v66.94h16.6V220h-19.28V169.52h-79.78V220h-19.82Zm83-16.73V102.85h-16.6V52.91h-13.65v49.94H1430v47.24Z" transform="translate(0 0)"></path>
              <path class="alph_logo-right" d="M1554.49,0h85.94V16.47h16.33V33.2h16.6V86.11h-16.6v16.74h-16.33v13.76h16.33v50.21h16.6V220h-19.28V169.52h-16.6V119.58H1574.3V220h-19.81Zm83,99.88V83.41h16.6V36.17h-16.6V19.44H1574.3V99.88Z" transform="translate(0 0)"></path>
              <path class="alph_logo-right" d="M1715.13,0h19.81V83.41h13.65V66.67h16.33V49.94h16.6V33.2h16.6V16.47h16.6V0H1834V19.44h-16.6V36.17h-16.33V52.91h-16.6V69.64h-16.6V86.11h-16.6v30.5h16.6v16.74h16.6v16.74h16.6v33.47h16.33V200H1834v20h-19.28V203h-16.6V186.26h-16.6V153.05h-16.6V136.32h-16.33V119.58h-13.65V220h-19.81Z" transform="translate(0 0)"></path>
              <path class="alph_logo-right" d="M265.85,96.51H0v26.76H265.85Z" transform="translate(0 0)"></path>
              <path class="alph_logo-right" d="M319,96.51H292.43v26.76H319Z" transform="translate(0 0)"></path>
              <path class="alph_logo-right" d="M292.43,123.26H265.85V150h26.58Z" transform="translate(0 0)"></path>
              <path class="alph_logo-right" d="M265.86,150H239.28v26.76h26.58Z" transform="translate(0 0)"></path>
              <path class="alph_logo-right" d="M292.43,69.75H265.85V96.5h26.58Z" transform="translate(0 0)"></path>
              <path class="alph_logo-right" d="M265.86,43H239.28V69.75h26.58Z" transform="translate(0 0)"></path>
            </svg>
          </div>
          <div className={`${Styles.bottomText} py-5`} style={{
            transform: `scale(1.15) translate(-${translateValue}%)`
          }}>
            <svg class="" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1834 218">
              <path class="alph_logo-left" d="M0,165.31H16.87V99h16.6V49.48H49.8V0H69.34V49.48h16.6V99h16.34v66.34h16.59V218H99.6V168H19.81v50H0Zm83-16.59V101.91H66.4V52.43H52.74v49.48H36.14v46.81Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M160.64,0h19.81V198.21h99.07V218H160.64Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M321.28,0h85.94V16.32h16.34V32.9h16.6v69h-16.6V118.5H407.22v16.58H341.09V218H321.28Zm83,115.55V99h16.6V35.84h-16.6V19.26H341.09v96.29Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M481.92,0h19.81V99h79.79V0H600.8V218H581.52V118.5H501.73V218H481.92Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M642.56,165.31h16.87V99H676V49.48h16.33V0h19.55V49.48h16.6V99h16.33v66.34h16.6V218H742.16V168H662.38v50H642.56Zm83-16.59V101.91H709V52.43H695.31v49.48h-16.6v46.81Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M803.2,0H823V32.9h16.33V82.65H856v66.07H869.6V82.65h16.6V32.9h16.6V0h19.28V218H902.8V85.33H889.15v66.33h-16.6v49.49H853V151.66H836.67V85.33H823V218H803.2Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M963.84,165.31h16.87V99h16.6V49.48h16.33V0h19.55V49.48h16.6V99h16.33v66.34h16.6V218h-19.28V168H983.66v50H963.84Zm83-16.59V101.91h-16.6V52.43h-13.65v49.48H1000v46.81Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M1124.49,0h85.94V16.32h16.33V32.9h16.6V85.33h-16.6v16.58h-16.33v13.64h16.33v49.76h16.6V218h-19.28V168h-16.6V118.5H1144.3V218h-19.81Zm83,99V82.65h16.6V35.84h-16.6V19.26H1144.3V99Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M1285.13,0h19.81V82.65h13.65V66.07h16.33V49.48h16.6V32.9h16.6V16.32h16.6V0H1404V19.26h-16.6V35.84h-16.33V52.43h-16.6V69h-16.6V85.33h-16.6v30.22h16.6v16.59h16.6v16.58h16.6v33.17h16.33v16.32H1404V218h-19.28V201.15h-16.6V184.56h-16.6v-32.9h-16.6V135.08h-16.33V118.5h-13.65V218h-19.81Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M1568.15,95.51H1834v26.76H1568.15Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M1515,95.51h26.57v26.76H1515Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M1541.58,122.26h26.57V149h-26.57Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M1568.15,149h26.57v26.76h-26.57Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M1541.58,68.75h26.57V95.5h-26.57Z" transform="translate(0 0)"></path>
              <path class="alph_logo-left" d="M1568.15,42h26.57V68.75h-26.57Z" transform="translate(0 0)"></path>
            </svg>
          </div>
        </div>
    </div>
  )
}
