import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';
import Socials from "../components/Socials";


export default function Home() {
  return (
    <section className="h-full">
  
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left">
            <span className="text-xl">Backend Developer</span>
            <h1 className="text-[28px] mb-6">
              Hello I am 
              <br/><span className="text-accent">Romeu Cajamba</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and 
              I an proficient in various programming languages and tecnologies
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button className="uppercase flex items-center gap-2 bg-transparent border-accent" size="md" variant="outline">
                  <span>Download CV</span>
                  <FiDownload/>
              </Button>

              <div className="mb-8 xl:mb-0">
                <Socials/>              
              </div>
            </div>
        </div>

        <div>
          <Photo/>

        </div>
      </div>
    </div>
     
    </section>
  );
}
