'use client'

import { useEffect, useRef, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GitBranch, Globe } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

interface ProjectCardProps {
  videoSrc: string;
  title: string;
  dateRange: string;
  description: string;
  badges: string[];
  websiteUrl?: string;  
  codeUrl?: string;     
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  videoSrc, 
  title, 
  dateRange, 
  description, 
  badges, 
  websiteUrl, 
  codeUrl 
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing once the video is in view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <Card className="w-[340px] h-[600px] md:w-[450px] md:h-[600px]">
      <CardHeader>
        <video
          ref={videoRef}
          className="rounded-lg"
          src={isVisible ? videoSrc : undefined} // Load video only when visible
          autoPlay={isVisible}
          loop 
          muted 
          playsInline
          preload="metadata"
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{dateRange}</CardDescription>
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
