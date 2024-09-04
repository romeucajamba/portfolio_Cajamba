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
    href: ""
  },
  {
    num: '02',
    title: 'Backend Development',
    description: 'API de academia para registro de usuários de acordo a distância.',
    href: ""
  },
  {
    num: '03',
    title: 'Backend Development',
    description: 'API para transação, entrada e saída de dinheiro.',
    href: ""
  },
  {
    num: '04',
    title: 'Backend Development',
    description: 'API para rede social de estudantes de programação.',
    href: ""
  },
  {
    num: '05',
    title: 'Frontend Development',
    description: 'Página de posts.',
    href: ""
  },
  {
    num: '06',
    title: 'Mobile Development',
    description: 'Bibliotec digital para dispositivos android.',
    href: ""
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
                            <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">{services.num}</div>
                            <Link href={services.href}>
                                <BsArrowRight/>
                            </Link>
                        </div>

                        <h2>{services.title}</h2>
                        <p>{services.description}</p>
                        <div className="border-b border-white/20 w-full"></div>
                     </div>
                  )
                })} 
            </motion.div>
        </div>
    </section>
  );
}