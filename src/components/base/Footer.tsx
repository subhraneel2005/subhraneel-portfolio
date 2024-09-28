import React from 'react'
import { Badge } from '../ui/badge'

export default function Footer() {
  return (
    <div className='w-full py-12 mb-32 flex flex-col justify-center items-center mt-20'>
       <Badge className='text-[16px] rounded-xl'>Contact</Badge>
        <h1 className='text-center font-bold text-black mt-2 dark:text-white md:text-5xl text-3xl tracking-tight md:leading-[5rem]'>Let&apos;s Talk</h1>
        <p className='text-gray-600 dark:text-gray-400 text-[16px] md:text-[24px] max-w-2xl text-center'>Want to chat? Just  send me a <a className='text-blue-600' href="https://x.com/Subhraneel55545" target='_blank'>dm here</a></p>

    </div>
  )
}
