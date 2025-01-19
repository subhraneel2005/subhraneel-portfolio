
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {  Globe } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  badges: string[];
  websiteUrl?: string;  
  codeUrl?: string;     
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  imageSrc, 
  title, 
  description, 
  badges, 
  websiteUrl, 
  codeUrl 
}) => {



  return (
    <Card className="w-[340px] h-[600px] md:w-[450px] md:h-[600px]">
      <CardHeader>
        <img
          className="rounded-lg"
          src={imageSrc}
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <p className="text-sm dark:text-gray-300 text-gray-600 mt-2">
          {description}
        </p>
        <div className="flex gap-2 mt-4 flex-wrap">
          {badges.map((badge, index) => (
            <Badge variant='secondary' key={index}>{badge}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex gap-4">
        {websiteUrl && (
          <Link href={websiteUrl} target='_blank'>
            <Badge className='flex gap-1'>
              <Globe size={15}/>
              <p className='font-bold'>Website</p>
            </Badge>
          </Link>
        )}
        {codeUrl && (
          <Link href={codeUrl} target='_blank'>
            <Badge className='flex gap-1'>
              <FaGithub size={15}/>
              <p className='font-bold'>Code</p>
            </Badge>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
