'use client'
import React, {ReactNode, useEffect} from 'react'
import Slider from "react-slick";
function SliderSection({children, setting, className}) {
    var settings = setting;
  return (
    <Slider {...settings} className={className}>
      {children}
    </Slider>
  )
}

export default SliderSection