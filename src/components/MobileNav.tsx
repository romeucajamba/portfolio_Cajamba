"use client"

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries} from 'react-icons/ci';

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
        name: 'projectos',
        path: '/work'
    },
    {
        name: 'contactar',
        path: '/contact'
    },
];


export function MobileNav(){
    const pathname = usePathname()
    return(
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className='flex flex-col items-center '>
                <div className='mt-28 mb-34 text-center text-2xl mr-20 w-60'>
                    <Link href="/">
                        <h1 className='text-xl font-semibold'>
                            Romeu Cajamba
                            <span className='text-accent'>.</span>
                        </h1>
                    </Link>
                </div>

                <nav className='flex flex-col justify-center items-center gap-6 mt-6  mr-20'>
                    {
                        links.map((link, index) => {
                            return(
                                <Link href={link.path} key={index}
                                    className={`${link.path === pathname && "text-accent border-b-2 border-accent"}'text-xl capitalize hover:text-accent transition-all'`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })
                    }
                </nav>
            </SheetContent>
        </Sheet>
    )


}