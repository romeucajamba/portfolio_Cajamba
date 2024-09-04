"use client"
import React from 'react';
import Link from 'next/link';
import { BsArrowRight} from "react-icons/bs";
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Frontend Development',
    description: 'Página para transação, entrada e saída de bens.',
    href: "https://transitions-indol.vercel.app/"
  },
  {
    num: '02',
    title: 'Backend Development',
    description: 'API de academia para registro de usuários de acordo a distância.',
    href: "https://github.com/romeucajamba/academy"
  },
  {
    num: '03',
    title: 'Backend Development',
    description: 'API para transação, entrada e saída de dinheiro.',
    href: "https://bank-transaction-6.onrender.com"
  },
  {
    num: '04',
    title: 'Backend Development',
    description: 'API para rede social de estudantes de programação.',
    href: "https://github.com/romeucajamba/api_yhanko_educational"
  },
  {
    num: '05',
    title: 'Frontend Development',
    description: 'Página de posts.',
    href: "https://postagens-r6p5.onrender.com"
  },
  {
    num: '06',
    title: 'Mobile Development',
    description: 'Bibliotec digital para dispositivos android.',
    href: "https://github.com/romeucajamba/BiblioGest"
  },
  {
    num: '7',
    title: 'Frontend Development',
    description: 'Página para gerenciamento de participanetes',
    href: 'https://event-manager-inky.vercel.app/'
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