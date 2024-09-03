"use client"
import React from 'react';
import Link from 'next/link';
import { BsArrowRight} from "react-icons/bs";
import { motion } from 'framer-motion';


const services = [
  {
    num: '01',
    title: 'Frontend Development',
    description: 'Página para transação, entrada e saída de bens em dinheiro',
    href: ""
  },
  {
    num: '02',
    title: 'Frontend Development',
    description: 'Página para transação, entrada e saída de bens em dinheiro',
    href: ""
  },
  {
    num: '03',
    title: 'Backen Development',
    description: 'Página para transação, entrada e saída de bens em dinheiro',
    href: ""
  },
  {
    num: '04',
    title: 'Backend Development',
    description: 'Página para transação, entrada e saída de bens em dinheiro',
    href: ""
  },
  {
    num: '05',
    title: 'Backend Development',
    description: 'Página para transação, entrada e saída de bens em dinheiro',
    href: ""
  },
  {
    num: '06',
    title: 'Mobile Development',
    description: 'Página para transação, entrada e saída de bens em dinheiro',
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
            >
               {/* {services.map((services, index) =< {
                  
                })} */}
            </motion.div>
        </div>
    </section>
  );
}