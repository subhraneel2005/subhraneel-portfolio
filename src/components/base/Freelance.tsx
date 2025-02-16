
import React from 'react'
import ProjectCard from './ProjectCard'
import { Badge } from '../ui/badge'

export default function Freelance() {
  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center mt-20'>
        <Badge className='text-[16px] rounded-xl'>Freelance Works</Badge>
        <h1 className='text-center px-4 font-bold text-black mt-2 dark:text-white md:text-5xl text-3xl tracking-tight md:leading-[5rem]'>Check out my Freelance works</h1>
        <p className='text-gray-600 px-4 dark:text-gray-400 text-[14px] md:text-[18px] max-w-2xl text-center'>I&apos;m working on several freelance projects, with more to be added soon. 😉</p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-3'>
            <ProjectCard
              imageSrc="/in.png"
              title="University Event Website (Innovacion)"
              description="Built the website for our university biggest event.  Developed a responsive design and implemented a user-friendly interface. With a Space themed UI using Figma. Iproved Teamwork with my team to delivered the project on time."



              badges={['Next.js', 'JavaScript', 'Figma', 'Tailwinds CSS']}
              websiteUrl="https://innovacion-tawny.vercel.app/"
              codeUrl="https://github.com/subhraneel2005/Innovacion"
            />
            {/* <ProjectCard
              imageSrc="/growceev.mp4"
              title="Growceev"
              description="Made a minimalist themed website for a Buisness Agency. Integrated sleek User friendly design. Implemented Pixel Perfect UI. Used multiple animations and Components libraries seamlessly."
              badges={['Next.js', 'JavaScript', 'GSAP', 'Framer Motion', 'Tailwind CSS', 'Shadcn-Graphs', 'Figma']}
              websiteUrl="https://github.com/subhraneel2005/Growceev"
              codeUrl="https://github.com/subhraneel2005/Growceev"
            /> */}
        </div>
    </div>
  )
}
