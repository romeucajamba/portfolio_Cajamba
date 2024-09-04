"use client"
import React from 'react';
import Link from 'next/link';
import { BsArrowRight} from "react-icons/bs";
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Frontend Development',
    description: 'Design of responsive, intuitive, and high-performance interfaces.',
    href: "/contact"
  },
  {
    num: '02',
    title: 'Backend Development',
    description: 'Building a robust backend app ensures efficient data management and seamless communication between the frontend and server.',
    href: "/contact"
  },
  {
    num: '03',
    title: 'Mobile Development',
    description: 'Developing a mobile app offers users a smooth, intuitive experience on their smartphones, tailored to their needs.',
    href: "/contact"
  },
  {
    num: '4',
    title: 'Desktop Development',
    description: 'Desktop application development allows for feature-rich, powerful software, ideal for complex tasks on PCs',
    href: '/contact'
  }
]

export default function Services(){
  return(
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
        <div className="container mx-auto">
            <motion.div
              initial={{opacity: 0}}
              animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
            >
                {services.map((services, index) => {
                  return (
                     <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                        <div className="w-full flex justify-between items-center">
                            <div className="text-5xl font-extrabold text-outline text-transparent 
                              group-hover:text-outline-hover 
                              transation-all duration-500">{services.num}</div>
                            <Link href={services.href} className='w-[70px] h-[70px] rounded-full bg-white 
                              group-hover:bg-accent transation-all duration-500 flex justify-center items-center
                                hover:-rotate-45 group-hover:cursor-pointer'>
                                <BsArrowRight className='text-primary text-3xl'/>
                            </Link>
                        </div>

                        <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{services.title}</h2>
                        <p className='text-white/60'>{services.description}</p>
                        <div className="border-b border-white/20 w-full"></div>
                     </div>
                  )
                })} 
            </motion.div>
        </div>
    </section>
  );
}