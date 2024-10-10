import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div className="min-h-screen h-full flex justify-center items-center md:-mt-36 -mt-14">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
        <ProjectCard
              videoSrc="/blog-buddies.mp4"
              title="Blog Buddies"
              dateRange="Sep 2024 - Current"
              description="Building Blog Buddies, an open-source, distraction-free platform for developers to share ideas. With a minimalist, ad-free design, its built by devs, for devs. You can contribute, request features, report bugs, or raise issues to help shape it!"
              badges={['Next.js', 'Typescript', 'PostgreSQL', 'Prisma', 'Next-Auth', 'ReactMDE', 'Cloudinary', 'Multer', 'Shadcn UI']}
              websiteUrl="https://blog-buddies.vercel.app/"
              codeUrl="https://github.com/subhraneel2005/blog-buddies"
            />
            <ProjectCard
              videoSrc="/imagevault.mp4"
              title="Image Vault"
              dateRange="Sep 2024 - Sep 2024"
              description="Made a minimalist fullstack image exploring website using the Pixabay API. I built it as a GDG project but ended up learning a lot of new things, like Prisma with MongoDB, during the journey."
              badges={['Next.js', 'Typescript', 'MongoDb', 'Prisma', 'Next-Auth', 'TailwindCSS', 'Pixabay API', 'Shadcn UI']}
              websiteUrl="https://image-vault-io.vercel.app/"
              codeUrl="https://github.com/subhraneel2005/gdg-task-pixabay"
            />
          <ProjectCard
              videoSrc="/kalesh.mp4"
              title="Kalesh -v1"
              dateRange="Sep 2024 - Current"
              description="This tool lets creators set up photo or thumbnail clashes, allowing their followers to vote and comment in real-time using Redis. It's built with a secure Node.js and TypeScript backend, reusable React components powered by Next.js, and includes email verification, password reset, and forget password features using Nodemailer and Redis Queue (BullMQ)."

              badges={['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'JWT', 'Redis', 'Prisma', 'Postgres', 'Next-Auth', 'NodeMailer']}
              websiteUrl="https://github.com/subhraneel2005/Kalesh-v1"
              codeUrl="https://github.com/subhraneel2005/Kalesh-v1"
            />
            <ProjectCard
              videoSrc="/tutorialtracker.mp4"
              title="Tutorial Tracker"
              dateRange="Jul 2024 - Sep 2024"
              description="This is a tool for students to productively watch long youtube tutorials and take notes from the tutorials side by side. Made it with the power Next.js Server Side rendering"
              badges={['Next.js', 'JavaScript', 'PostgrSQL', 'Prisma', 'Figma', 'Next-Auth', 'Shadcn UI']}
              websiteUrl="https://tutorial-tracker.vercel.app/"
              codeUrl="https://github.com/subhraneel2005/Tutorial-Tracker"
            />
            <ProjectCard
              videoSrc="/roomify.mp4"
              title="Roomify"
              dateRange="Sep 2024 - Sep 2024"
              description="Built Rommify, an open-source video calling platform similar to Zoom. Powered by Next.js, Clerk for authentication, and GetStream.io for video streaming, it's designed for seamless and secure virtual meetings."
              badges={['Next.js', 'Typescript', 'Get Stream.io', 'Clerk Auth', 'Tailwind css']}
              websiteUrl="https://roomify-gamma.vercel.app/"
              codeUrl="https://github.com/subhraneel2005/Roomify"
            />
            <ProjectCard
              videoSrc="/moodmate.mp4"
              title="Mood-Mate"
              dateRange="Aug 2024 - Jun 2024"
              description="This is a digital journal made with Nextjs and Firebase. Got inspired from Minecraft and made 4 themes with minecraft vibes. Do check it out. It is a creative project mad by me."
              badges={['Next.js', 'Firebase Authentication', 'FireStore', 'Tailwind CSS']}
              websiteUrl="https://mood-matee.vercel.app/"
              codeUrl="https://github.com/subhraneel2005/MoodMate"
            />

        </div>
    </div>
  )
}
