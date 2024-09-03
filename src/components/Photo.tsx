"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import RomeuPhoto from "../../public/cajamba.jpeg"

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div 
                initial={{opacity: 0}}
                animate={{ opacity: 1,
                    transition: {
                        delay: 2,
                        duration: 0.4,
                        ease: "easeIn"
                    }
                }}
            >
               <motion.div 
                    initial={{opacity: 0}}
                    animate={{ opacity: 1,
                    transition: {
                    delay: 2,
                    duration: 0.4,
                        ease: "easeInOut"}}}

                    className="w-[350px] h-[350px] xl:w-[498px] xl:h-[498px] md:w-[350px] md:h-[350px] sm:w-[100px] sm:h-[100px] sm:mt-20 mix-blend-lighten">
                    <Image src={RomeuPhoto} priority quality={100} fill alt="photo" 
                    className="obejct-contain"
                    />
               </motion.div>
            </motion.div>
        </div>
    )
}

export default Photo;