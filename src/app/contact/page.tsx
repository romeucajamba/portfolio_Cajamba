"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import {Input} from "@/components/ui/input"
import { Textarea} from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select"
import {FaPhoneAlt,FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import { motion } from 'framer-motion';

const contacts = [
  {
    icon: <FaPhoneAlt/>,
    title: "Phone",
    description:"(+244) 943 558 106",

  },
  {
    icon: <FaEnvelope/>,
    title: "Eamil",
    description:"romeucajamba@gmail.com",

  },
  {
    icon: <FaMapMarkerAlt/>,
    title: "Address",
    description: "Luanda/Angola",

  },
]

export default function Contact(){
  return(
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
    className="py-6"
  >
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-[30px]'>

        <div className='xl:h-[54%] order-2 xl:order-none'>
          <form className='flex flex-col gap-6 p-10 bg-[#272728] rounded-xl'>
              <h3 className='text-2xl text-accent mb-4'>Let{"'"}s work together</h3>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <Input type="Firstname" placeholder='first name'/>
                  <Input type="lastname" placeholder='Last name'/>
                  <Input type="email" placeholder='Email address'/>
                  <Input type="phone" placeholder='Phone number'/>
              </div>

              <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder="Select a service"/>
                  </SelectTrigger>
                  <SelectContent>
                      <SelectGroup>
                          <SelectLabel>Select a service</SelectLabel>
                          <SelectItem value='est'>Frontend Development</SelectItem>
                          <SelectItem value='cst'>Mobile Development</SelectItem>
                          <SelectItem value='mst'>Backend Backend</SelectItem>
                      </SelectGroup>
                  </SelectContent>
              </Select>
          </form>
        </div>

        <div className='flex-1 flex items-center xl:justify-end 2xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>info</div>
      </div>
    </div>
  </motion.section>
  );
}