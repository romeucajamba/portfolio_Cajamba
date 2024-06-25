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
        name: 'work',
        path: '/work'
    },
    {
        name: 'contacto',
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
            <SheetContent className='flex flex-col'>
                <div className='mt-32 mb-48 text-center text-2xl'>
                    <Link href="/">
                        <h1 className='text-4xl font-semibold'>
                            Romeu Cajamba
                            <span className='text-accent'>.</span>
                        </h1>
                    </Link>
                </div>

                <nav>nav</nav>
            </SheetContent>
        </Sheet>
    )


}