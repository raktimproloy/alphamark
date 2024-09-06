import React from 'react'
import styles from "./style.module.css"

export default function index() {
  return (
    <div className={`${styles.projectBtn} drop-shadow-md border border-gray-500`}>
        <h6 className='text-xl'>Start a project</h6>
    </div>
  )
}
