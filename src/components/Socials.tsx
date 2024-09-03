"use client"
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const socials = [
    {icon: <FaFacebook/>, path: "https://www.facebook.com/romeucajamba.cajamba/"},
    {icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/romeu-cajamba-8a9294220/"},
    {icon: <FaWhatsapp/>, path: "https://web.whatsapp.com/"},
    {icon: <FaGithub/>, path: "https://github.com/romeucajamba"}
]

const Socials = () => {
  return (
    <div className='flex sm:flex-col md:flex-row sm:justify-center sm:items-center xl:flex-row w-48 gap-3'>
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
