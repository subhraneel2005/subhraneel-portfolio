import React from 'react'
import { Docks } from './Docks'
import WordPullUp from '../ui/word-pull-up'
import LetterPullup from '../ui/letter-pullup'

export default function HomePage() {
  return (
    <div className='min-h-screen h-full flex flex-col justify-center items-center'>
        <div>
          <WordPullUp
            className="text-4xl font-bold text-black dark:text-white md:text-7xl md:leading-[5rem]"
            words="Hi, I'm Subhraneel👋"
          />
          <WordPullUp
            className="text-[16px] mt-4 font-bold text-gray-800 dark:text-gray-300"
            words="Software Engineer and Web3.0 Enthusiast. I love building cool stuffs. Nice meeting you, do check out my projects below😉."
          />
        </div>
        <Docks/>
    </div>
  )
}


