'use client'
import Link from 'next/link'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      <nav className='my-8  text-violet-500'>
        <ul>
          <li><Link href='/about/mission'>mission</Link></li>
          <li><Link href='/about/vision'>vision</Link></li>
        </ul>
        
         </nav>
      {children}
    </div>
  )
}

export default layout
