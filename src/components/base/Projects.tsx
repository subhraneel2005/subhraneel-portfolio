import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div className="min-h-screen h-full flex justify-center items-center md:-mt-36 -mt-14">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
        <ProjectCard
              imageSrc="/hashsync.png"
              title="HashSync"
              description="🚀 Write in Notion. Publish on Hashnode. Seamlessly"
              badges={['Next.js', 'Typescript', 'Notion API', 'GraphQL', 'PostgreSQL', 'Prisma', 'Next-Auth']}
              websiteUrl="https://github.com/subhraneel2005/HashSync"
              codeUrl="https://github.com/subhraneel2005/HashSync"
            />
            <ProjectCard
              imageSrc="/getstartsite.png"
              title="Getstart: Fullstack SaaS boilerplate"
              description="A Fullstack SaaS-kit with clean UI, secure Authentication, Payment integration, API endpoints and Mailing service"
              badges={['Next.js', 'Typescript', 'Nodemailer', 'Next-Auth', 'Razorpay-payments', 'NextAPI']}
               websiteUrl="https://www.getstart.site/"
              // codeUrl="https://github.com/subhraneel2005/pintrest-affiliate"
            />
            <ProjectCard
              imageSrc="/getstart-landing.png"
              title="Getstart template"
              description="Template that users get after purchasing my Getstart kit."
              badges={['Next.js', 'Typescript', 'Nodemailer', 'Next-Auth', 'Razorpay-payments', 'NextAPI']}
              websiteUrl="getstart-lhzm.vercel.app/"
            />
            <ProjectCard
              imageSrc="/schedulr.png"
              title="Schedulr-v1"
              description="A platform that converts your daily goals into calendar tasks. Best productivity tool to stay consistent."
              badges={['Next.js', 'Typescript', 'Google Calendar', 'MongoDB', 'Prisma', 'Next-Auth']}
              websiteUrl="https://schedulr.subhraneel.site/"
              codeUrl="https://github.com/subhraneel2005/Schedulr"
            />
            <ProjectCard
              imageSrc="/rmi.png"
              title="RoastMyIdea"
              description="A platform where users can post ideas and get roasted/brainstormed anonymously."
              badges={['Next.js', 'Typescript', 'Redis', 'Zod', 'Daisy-UI', 'MongoDB', 'Prisma', 'Next-Auth']}
              websiteUrl="https://roastmyidea.subhraneel.site/"
              codeUrl="https://github.com/subhraneel2005/roast-my-idea"
            />
            <ProjectCard
              imageSrc="/ps.png"
              title="Digital store for Books and Skincares"
              description="A digital store to buy amazing and hidden books and skincare products, curated with love."
              badges={['Next.js', 'Typescript', 'NeoBrutalist Design', 'JWT Authentication', 'Admin Dashboard']}
              websiteUrl="http://poplu.store/"
              codeUrl="https://github.com/subhraneel2005/pintrest-affiliate"
            />
        <ProjectCard
              imageSrc="/bb.png"
              title="BlogBuddies"
              description="Building Blog Buddies, an open-source, distraction-free platform for developers to share ideas. With a minimalist, ad-free design, its built by devs, for devs. You can contribute, request features, report bugs, or raise issues to help shape it!"
              badges={['Next.js', 'Typescript', 'PostgreSQL', 'Prisma', 'Next-Auth', 'ReactMDE', 'Cloudinary', 'Multer', 'Shadcn UI']}
              websiteUrl="https://blog-buddies.vercel.app/"
              codeUrl="https://github.com/subhraneel2005/blog-buddies"
            />
            <ProjectCard
              imageSrc="/iv.png"
              title="Image Vault"
              description="Made a minimalist fullstack image exploring website using the Pixabay API. I built it as a GDG project but ended up learning a lot of new things, like Prisma with MongoDB, during the journey."
              badges={['Next.js', 'Typescript', 'MongoDb', 'Prisma', 'Next-Auth', 'TailwindCSS', 'Pixabay API', 'Shadcn UI']}
              websiteUrl="https://image-vault-io.vercel.app/"
              codeUrl="https://github.com/subhraneel2005/gdg-task-pixabay"
            />

        </div>
    </div>
  )
}
