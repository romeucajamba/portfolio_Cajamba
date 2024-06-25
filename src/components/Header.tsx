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
                <div className="xl:flex xl:flex items-center gap-8 py-8 xl:py-12">
                    <Nav />
                    <Link href="contact">
                        <Button>estou aqui!</Button>
                    </Link>
                    
                </div>
                {/** */}
                <div className="hidden xl:hidden 2xl:hidden py-8 xl:py-12">Mobile nav</div>
            </div>
        </header>
    )
}