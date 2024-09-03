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
                        ease: "easeInOut"
                    }}}
                    className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
               >
                    <Image 
                        src={RomeuPhoto} 
                        priority 
                        quality={100} 
                        fill 
                        alt="photo" 
                        className="object-cover" // Note that the correct class is 'object-cover' instead of 'obejct-contain'
                    />
               </motion.div>
            </motion.div>
        </div>
    )
}

export default Photo;
