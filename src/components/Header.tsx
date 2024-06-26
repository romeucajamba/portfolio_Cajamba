import Link from "next/link";
import  { Nav }  from "./Nav";
import { Button } from "./ui/button";
import { MobileNav } from "./MobileNav";


export function Header(){
    return(
        <header className="py-4 xl:py-8 text-white bg-pink-50/20">
            <div className="container mx-auto flex justify-between items-center">
                
                <Link href="/">
                    <h1 className="text-2xl font-semibold">
                        Romeu Cajamba
                        <span className="text-accent">.</span>
                    </h1>
                </Link>
                
                <div className="2xl:flex xl:flex items-center gap-8 py-4 xl:py-8">
                    <Nav />
                    <Link href="contact">
                        <Button>estou aqui!</Button>
                    </Link>
                    
                </div>
               
                <div className="xl:hidden 2xl:hidden"><MobileNav/></div>
            </div>
        </header>
    )
}