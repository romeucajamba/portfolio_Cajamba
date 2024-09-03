"use client"
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const socials = [
    {icon: <FaFacebook/>, path: ""},
    {icon: <FaLinkedin/>},
    {icon: <FaWhatsapp/>, path: ""},
    {icon: <FaGithub/>, path: ""}
]

const Socials = () => {
  return (
    <div className='flex sm:flex-col md:flex-row xl:flex-row'>
        {socials.map(social => (
          <a 
            key={social.path} 
            href={social.path} 
            target="_blank" rel="noopener noreferrer" 
            className="w-9 h-9 border border-accent rounded-full 
                flex justify-center items-center text-accent text-base
                 hover:bg-accent hover:text-primary hover:transition-all duration-500">
            {social.icon}
          </a>
        ))}
  
    </div>
  );
};

export default Socials;
