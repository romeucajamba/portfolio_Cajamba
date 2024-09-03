import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';
import Socials from "../components/Socials";
import Photo from "../components/Photo";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 ">
        {/* Flex layout that is column on small screens and row on larger screens */}
        <div className="flex flex-col md:flex-row items-center justify-between md:pt-8 md:pb-24 space-y-8 md:space-y-0 md:space-x-8">
          <div className="text-center md:text-left order-2 md:order-none">
            <span className="text-xl">Backend Developer</span>
            <h1 className="text-[28px] mb-6">
              Hello I am 
              <br/><span className="text-accent">Romeu Cajamba</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and 
              I am proficient in various programming languages and technologies.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <Button className="uppercase flex items-center gap-2 bg-transparent border-accent" size="md" variant="outline">
                  <span>Download CV</span>
                  <FiDownload/>
              </Button>

              <div className="flex sm:flex-col md:flex-row xl:flex-row gap-4 mb-8 md:mb-0 w-40">
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
