
import Button from '@/app/components/Button'
import Image from 'next/image'
import React from 'react'
import natureImage from '@/public/nature.jpg'

const page = () => {
  return (
    <div className='text-blue-500 mt-10'>
      this is mission page .and her  parent page about

      <Image src={natureImage} alt='nature image' ></Image>
      
      <Button></Button>
    </div>
  )
}

export default page
