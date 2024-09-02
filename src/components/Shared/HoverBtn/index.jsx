import React from 'react'
import './style.css'

export default function index({title, textSize="text-4xl"}) {
  return (
    <h5 className={`${textSize} border-b-4 border-black-500 startProject`}>{title}
      <div className='startProjectBg'></div>
    </h5>
  )
}
