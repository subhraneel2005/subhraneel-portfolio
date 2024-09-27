import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image'; // Assuming you use Next.js Image component for performance
import { GitBranch, Globe } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const ProjectCard = () => {
  return (
    <Card className="w-[340px] h-[550px] md:w-[450px] md:h-[600px]">
      <CardHeader>
        <video
        className=" rounded-lg"
        src="/imagevault.mp4"
        autoPlay 
        loop 
        muted 
        playsInline
        />
      </CardHeader>
      <CardContent>
        <CardTitle>Image Vault</CardTitle>
        <CardDescription>Jul 2024 - Sep 2024</CardDescription>
        <p className="text-sm dark:text-gray-300 text-gray-600 mt-2">
          Made a minimalist fullstack image exploring website using <a href="pixabay.com" className="underline text-blue-400">Pixabay API</a>, I built it as a GDG project but turned out that i learned a lot of new stuffs like Prisma with MongoDb on the journey of building it.
        </p>
        <div className="flex gap-2 mt-4 flex-wrap">
          {/* Badges */}
          <Badge variant='secondary'>Next.js</Badge>
          <Badge variant='secondary'>Typescript</Badge>
          <Badge variant='secondary'>MongoDb</Badge>
          <Badge variant='secondary'>Prisma</Badge>
          <Badge variant='secondary'>TailwindCSS</Badge>
          <Badge variant='secondary'>Pixabay API</Badge>
          <Badge variant='secondary'>Shadcn UI</Badge>
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex gap-4">
        <Link href='https://image-vault-io.vercel.app/' target='_blank'>
          <Badge className='flex gap-1'>
            <Globe size={15}/>
            <p className='font-bold'>Website</p>
          </Badge>
        </Link>
        <Link href='https://github.com/subhraneel2005/gdg-task-pixabay' target='_blank'>
          <Badge className='flex gap-1'>
            <FaGithub size={15}/>
            <p className='font-bold'>Code</p>
          </Badge>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
