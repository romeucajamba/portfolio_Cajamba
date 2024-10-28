"use client"
import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from "../../components/WorkSliderBtns";


const projects = [
  {
    num: '01',
    category: 'Frontend',
    title: 'project 1',
    Description: 'Linguage school',
    stack: [
      { name: "HTML5"},
      { name: "TailwindCSS"},
      { name: "ReactJs"},
      { name: "Typescript"},
    ],
    image: '/work/spotfy2.png',
    live: "https://spotify-interface-mauve.vercel.app/",
    github: "https://github.com/romeucajamba/SpotifyInterface"
  },
  {
    num: '02',
    category: 'Backend',
    title: 'project 2',
    Description: 'Social network YhankoET',
    stack: [
      { name: "Fastify"},
      { name: "Typescript"},
      { name: "Socket"},
      { name: "Zod"},
    ],
    image: '/work/TelaPrincipal.png',
    live: "https://github.com/romeucajamba/BiblioGest",
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
    image: '/work/event.png',
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
    image: '/work/post.png',
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
    image: '/work/transaction.png',
    live: "https://transitions-indol.vercel.app/",
    github: "https://github.com/romeucajamba/transitions"
  },
];

export default function Work(){
  const [project, setProject] = useState(projects[0]);

  // Função para lidar com a troca de slides
  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;

    // Certifique-se de que o índice seja válido antes de atualizar o estado
    if (currentIndex >= 0 && currentIndex < projects.length) {
      setProject(projects[currentIndex]);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          {/* Informações do projeto */}
          <div className='w-full xl:w-[50%] xl:h-[460px] 2xl:h-[460px] flex flex-col xl:justify-between 2xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category} project
              </h2>
              <p className='text-white/60'>{project.Description}</p>
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => (
                  <li key={index} className='text-xl text-accent'>
                    {item.name}{index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className='border border-white/20'></div>
              <div className='flex items-center gap-4'>
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Slider de projetos */}
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] 2xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                    <div className='relative w-full h-full'>
                      <Image src={project.image} alt={`Project image ${project.num}`} fill className='object-cover' />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
