import Link from "next/link";
import  { Nav }  from "./Nav";
import { Button } from "./ui/button";


export function Header(){
    return(
        <header className="py-8 xl:py-12 text-white bg-pink-50/20">
            <div className="container mx-auto flex justify-between items-center">
                {/**Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Cajamba
                        <span className="text-accent">.</span>
                    </h1>
                </Link>
                {/**Desktop nav */}
                <div className="hidden xl:flex 2xl:flex items-center gap-8">
                    <Nav />
                    <Link href="contact">
                        <Button>estou aqui!</Button>
                    </Link>
                    
                </div>
                {}
                <div className="xl:hidden 2xl:hidden">Mobile nav</div>
            </div>
        </header>
    )
}