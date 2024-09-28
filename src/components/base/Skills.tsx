import React from 'react';
import { Badge } from '../ui/badge';
import { FaReact, FaNodeJs, FaDocker, FaGit, FaGithub, FaHardHat } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiJavascript, SiSolidity, SiExpress, SiPrisma, SiPostgresql, SiMongodb, SiRedis, SiSupabase, SiFigma, SiPostman } from 'react-icons/si';

const technologies = [
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Solidity', icon: SiSolidity, color: '#363636' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Hardhat', icon: FaHardHat, color: '#F7DF1E' },
  { name: 'Express.js', icon: SiExpress, color: '#000000' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
  { name: 'Git', icon: FaGit, color: '#F05032' },
  { name: 'GitHub', icon: FaGithub, color: '#181717' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
];

export default function Skills() {
  return (
    <div className='py-16 w-full flex flex-col justify-center items-center'>
      <Badge className='text-[16px] rounded-xl'>Skills</Badge>
      <h1 className='text-center font-bold text-black mt-2 dark:text-white md:text-5xl text-3xl tracking-tight md:leading-[5rem]'>
        Technologies I&apos;m interested in
      </h1>
      <p className='text-gray-600 dark:text-gray-400 text-[16px] md:text-[24px] max-w-2xl text-center'>On my way to master them and become a 10x developer</p>
      <div className='mt-8 grid grid-cols-2 md:grid-cols-4 gap-6'>
        {technologies.map((tech, index) => (
          <Badge key={index} className='flex items-center space-x-2 text-[15px] font-bold'>
            <tech.icon color={tech.color} /> <span>{tech.name}</span>
          </Badge>
        ))}
      </div>
    </div>
  );
}
