"use client"
import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Link from 'next/link';
import Image from 'next/image';


const projects = [
  {
    num: '01',
    category: 'Frontend',
    title: 'project 1',
    Description: 'Spitfy clone interface',
    stack: [
      { name: "HTML5"},
      { name: "TailwindCSS"},
      { name: "ReactJs"},
      { name: "Typescript"},
    ],
    image: '../../../public/work/spotfy2.png',
    live: "https://spotify-interface-mauve.vercel.app/",
    github: "https://github.com/romeucajamba/SpotifyInterface"
  },
  {
    num: '02',
    category: 'Mobile',
    title: 'project 2',
    Description: 'Mobile app for library',
    stack: [
      { name: "React Native"},
      { name: "Typescript"},
    ],
    image: '../../../public/work/TelaPrincipal.png',
    live: "",
    github: "https://github.com/romeucajamba/BiblioGest"
  },
  {
    num: '03',
    category: 'Frontend',
    title: 'project 3',
    Description: 'static website for event attendees',
    stack: [
      { name: "HTML5"},
      { name: "TailwindCSS"},
      { name: "ReactJs"},
      { name: "Typescript"},
    ],
    image: '../../../public/work/event.png',
    live: "https://event-manager-inky.vercel.app/",
    github: "https://github.com/romeucajamba/event_manager"
  },
  {
    num: '04',
    category: 'Frontend',
    title: 'project 4',
    Description: 'static site for posts',
    stack: [
      { name: "HTML5"},
      { name: "CSS3"},
      { name: "ReactJs"},
      { name: "Javascript"},
    ],
    image: '../../../public/work/post.png',
    live: "https://postagens-r6p5.onrender.com",
    github: "https://github.com/romeucajamba/Postagens"
  },
  {
    num: '05',
    category: 'Frontend',
    title: 'project 5',
    Description: 'Website to registe transactions',
    stack: [
      { name: "HTML5"},
      { name: "TailwindCSS"},
      { name: "ReactJs"},
      { name: "Typescript"},
    ],
    image: '../../../public/work/transaction.png',
    live: "https://transitions-indol.vercel.app/",
    github: "https://github.com/romeucajamba/transitions"
  },
];

export default function Work(){
  const [project, setProject] = useState(projects[0])
  return(
    <motion.section
      initial={{opacity:0}}
      animate={{opacity:1}}
      className="min-h-[80vh flex flex.col justify-center py-12 xl:px-0]"
    >
        <div className='container mx-auto'>
          <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
            <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
              <div className='flex flex-col gap-[30px] h-[50%] '>
                  <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>

                  <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project </h2>
                  
                  <p className='text-white/60'>{project.Description}</p>

                  <ul className='flex gap-4'>
                    {project.stack.map((item, index) => {
                      return (
                          <li key={index} className='text-xl text-accent'>{item.name} {index !== project.stack.length - 1 && ","}</li>
                      )
                    })}
                  </ul>

                  <div className='border border-white/20'></div>

                  <div className='flex items-center gap-4'>
                    <Link href={project.live}>
                      <TooltipProvider delayDuration={100}>
                          <Tooltip>
                              <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                  <BsArrowUpRight className='text-white text-3xl group-hover:text-accent'/>
                              </TooltipTrigger>

                              <TooltipContent>
                                <p>Live project</p>
                              </TooltipContent>
                          </Tooltip>
                      </TooltipProvider>
                    </Link>

                    <Link href={project.github}>
                      <TooltipProvider delayDuration={100}>
                          <Tooltip>
                              <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                  <BsGithub className='text-white text-3xl group-hover:text-accent'/>
                              </TooltipTrigger>

                              <TooltipContent>
                                <p>github repository</p>
                              </TooltipContent>
                          </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
              </div>
            </div>

            <div>slider</div>
          </div>
        </div>
    </motion.section>
  );
}