"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'serviços',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contacto',
        path: '/contact'
    },
];

export function Nav() {
    const pathname = usePathname();
    
    return (
        <nav>
            {links.map((link, index) => {
                
                return (
                    <Link href={link.path} key={index}>
                        
                            {link.name}
                       
                    </Link>
                );
            })}
        </nav>
    );
}
