"use client"
import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaPython, FaGit, FaGithub, FaReact} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMysql, SiSqlite, SiPrisma, SiPostgresql} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {ScrollArea} from "@/components/ui/scroll-area";
import { motion } from "framer-motion"


const about = {
  title: "About me",
  description: `sdfaaaaaaaaaaaaajkdjkjkuivf
      89gru89y89g895ujkjkgfjkfjkrjklrjkfjkl
      dfsuiweruioeruierhjdhjfdjkfjkfjkdfjkf`,
  info: [
    {
      fieldName: "Name",
      fiedlValue: "Romeu Cajamba"
    },
    {
      fieldName: "Phone",
      fiedlValue: "(+244) 943 558 106"
    },
    {
      fieldName: "Expreience",
      fiedlValue: "+3 Years"
    },
    {
      fieldName: "Nationality",
      fiedlValue: "Angolan"
    },
    {
      fieldName: "Email",
      fiedlValue: "romeucajamba@gmail.com"
    },
    {
      fieldName: "Name",
      fiedlValue: "Romeu Cajamba"
    },
    {
      fieldName: "Backend Developer",
      fiedlValue: "Available"
    },
    {
      fieldName: "Language",
      fiedlValue: "Portuguese"
    },
  ]
}


const experience = {
  icon: '../../public/assets/resume/',
  title:"My experience",
  description: `hjdhhjdfhjsdfsdfjkdfjkldfjkldfjkldfnkdfnmdfnmdfjkdfjkdf`,

  items: [
    {
      company: "Global Service Corporation",
      position: "Backend Developer",
      duration: "8 month"
    },
    {
      company: "Ocaso",
      position: "Backend Developer",
      duration: "2 month"
    },
    {
      company: "AngoVerso",
      position: "Mobile Developer",
      duration: "2023 - Present"
    },
    {
      company: "Yhanko Startup",
      position: "Backend Developer",
      duration: "2023 - Present"
    }
  ]
}

const education = {
  icon: '../../public/assets/resume/',
  title: "My education",
  description: "hjsdhjdfjkdfjkldfklsdflçdfkldfdfjkldfjklgfjklgfkl",
  items:[
    {
      institution: "Lusiada University of Angola",
      degree: "Computer Engineer",
      duration: "2021 - Present"
    },
    {
      institution: "Rocktseat - Online Course Plataform",
      degree: "Backend Deveolpment",
    },
    {
      institution: "Rocktseat - Online Course Plataform",
      degree: "Fronetnd Deveolpment",
    },
    {
      institution: "Rocktseat - Online Course Plataform",
      degree: "Mobile Deveolpment",
    }
  ]
}

const skills = {
  title: "My skills",
  description: "hjsdhjdjidfhjdfhjdfjdfjkdfjkadfjkadfndfdfjk",
  skillslist:[
    {
      icon: <FaHtml5/>,
      name: "HTML5"
    },
    {
      icon: <FaCss3/>,
      name: "CSS3"
    },
    {
      icon: <SiTailwindcss/>,
      name: "TailwindCSS"
    },
    {
      icon: <FaJs/>,
      name: "Javscript"
    },
    {
      icon: <SiTypescript/>,
      name: "Typescript"
    },
    {
      icon: <FaReact/>,
      name: "ReactJs"
    },
    {
      icon: <FaPython/>,
      name: "Python"
    },
    {
      icon: <FaNodeJs/>,
      name: "NodeJs"
    },
    {
      icon: <SiPrisma/>,
      name: "ORM Prisma"
    },
    {
      icon: <SiMysql/>,
      name: "MYSQL"
    },
    {
      icon: <SiSqlite/>,
      name: "SQLITE3"
    },
    {
      icon: <SiPostgresql/>,
      name: "POSTGRESQL"
    },
    {
      icon: <FaGithub/>,
      name: "Github"
    },
    {
      icon: <FaGit/>,
      name: "Git"
    },

  ]
}

export default function Resume(){
  return(
    <motion.div initial={{opacity:0}}
      animate={{opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className='container mx-auto'>
          <Tabs
            defaultValue='experience'
            className='flex flex-col xl:flex-row 2xl:flex-row md:flex-row gap-[60px]'
          >
              <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                  <TabsTrigger value='experience'>Experience</TabsTrigger>
                  <TabsTrigger value='education'>Education</TabsTrigger>
                  <TabsTrigger value='skills'>Skills</TabsTrigger>
                  <TabsTrigger value='about'>About me</TabsTrigger>
              </TabsList>

              <div className='min-h-[70vh] w-full'>
                  <TabsContent value="experience" className='w-full'>
                      experience
                  </TabsContent>

                  <TabsContent value="education" className='w-full'>
                      education
                  </TabsContent>

                  <TabsContent value="skills" className='w-full'>
                      skills
                  </TabsContent>

                  <TabsContent value="about" className='w-full'>
                     about
                  </TabsContent>
              </div>
          </Tabs>
      </div> 
    </motion.div>
  );
}