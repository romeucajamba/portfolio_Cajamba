import Link from "next/link";
import { Nav } from "./Nav";
import { Button } from "./ui/button";
import { MobileNav } from "./MobileNav";

export function Header() {
    return (
        <header className="py-4 xl:py-8 text-white bg-pink-50/20">
            <div className="container mx-auto flex justify-between items-center">
                
                <Link href="/">
                    <h1 className="text-2xl font-semibold">
                        Romeu Cajamba
                        <span className="text-accent">.</span>
                    </h1>
                </Link>
                
                {/* Menu links for larger screens */}
                <div className="hidden lg:flex items-center gap-8 py-4 xl:py-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>estou aqui!</Button>
                    </Link>
                </div>
               
                {/* Mobile menu icon */}
                <div className="lg:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}
