import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';
import Socials from "../components/Socials";
import Photo from "../components/Photo";

export default function Home() {
  return (
    <section className="h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex layout that is column on small screens and row on larger screens */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="text-center md:text-left order-2 md:order-none">
            <span className="text-lg md:text-xl lg:text-2xl">Backend Developer</span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-6">
              Hello I am 
              <br/><span className="text-accent text-2xl md:text-3xl lg:text-4xl">Romeu Cajamba</span>
            </h1>

            <p className="text-sm md:text-base lg:text-lg max-w-[500px] mb-9 text-white/80">
              As a backend developer, I specialize in creating efficient and reliable solutions 
              for complex systems. I am skilled in designing and implementing scalable backend 
              services that meet business needs. My focus is on delivering high-quality, 
              well-structured code that ensures robust performance and seamless integration 
              with various systems..
            </p>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <Button className="uppercase flex items-center gap-2 bg-transparent border-accent text-sm md:text-base" size="md" variant="outline">
                  <span>Download CV</span>
                  <FiDownload/>
              </Button>

              <div className="flex sm:flex-col md:flex-row sm:items-center sm:justify-center  xl:flex-row gap-4 mb-8 md:mb-0 w-40 ">
                <Socials/>              
              </div>
            </div>
          </div>

          <div className="order-1 md:order-none mb-8 md:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
    </section>
  );
}
