"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

const contacts = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+244) 943 558 106",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "romeucajamba@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Luanda/Angola",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Função para atualizar os dados do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Função para atualizar o serviço selecionado
  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      service: value,
    });
  };

  // Função de envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // useEffect para enviar os dados para a API após o envio
  useEffect(() => {
    if (submitted) {
      axios.post('/api/contact', formData)
        .then(response => {
          console.log('Formulário enviado com sucesso:', response.data);
        })
        .catch(error => {
          console.error('Erro ao enviar o formulário:', error);
        })
        .finally(() => {
          setSubmitted(false);  // Resetar o estado após o envio
        });
    }
  }, [submitted, formData]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>

          <div className='xl:h-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#272728] rounded-xl' onSubmit={handleSubmit}>
              <h3 className='text-2xl text-accent mb-4'>Let{"'"}s work together</h3>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input name="firstName" type="text" placeholder='First name' value={formData.firstName} onChange={handleChange} />
                <Input name="lastName" type="text" placeholder='Last name' value={formData.lastName} onChange={handleChange} />
                <Input name="email" type="email" placeholder='Email address' value={formData.email} onChange={handleChange} />
                <Input name="phone" type="text" placeholder='Phone number' value={formData.phone} onChange={handleChange} />
              </div>

              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value='frontend'>Frontend Development</SelectItem>
                    <SelectItem value='mobile'>Mobile Development</SelectItem>
                    <SelectItem value='backend'>Backend Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea name="message" className='h-[200px]' placeholder='Type your message here' value={formData.message} onChange={handleChange} />

              <Button size="md" className='max-w-40 bg-accent text-primary font-bold' type="submit">Send message</Button>
            </form>
          </div>

          <div className='flex-1 flex items-center xl:justify-end  order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {contacts.map((item, index) => (
                <li key={index} className='flex items-center gap-6'>
                  <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                    <div>{item.icon}</div>
                  </div>

                  <div className='flex-1'>
                    <p className='text-white/60'>{item.title}</p>
                    <h3>{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
