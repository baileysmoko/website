import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import Bailey from './Images/Bailey.png';

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-8 lg:py-16">
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-center lg:gap-12 w-full max-w-6xl mx-auto px-4 pt-8 lg:pt-16">
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start justify-center p-2 pb-10 md:pb-6 lg:pb-0 text-center lg:text-left lg:w-1/2">
          <div>
          <h1 className="text-3xl font-bold leading-10 text-white md:font-bold lg:text-[2rem] lg:leading-[3.5rem]">
              Hi! I'm Bailey.
            </h1>
            <p className="text-sm font-medium leading-6 text-white lg:text-base lg:leading-7 mt-4">
              I'm a rising junior at Brown University, studying Statistics and CS. 
              I am passionate about mathematics, problem-solving, programming, and promoting sustainability. 
              I love tackling complex challenges and leveraging technology to create innovative solutions.
            </p>
          </div>
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-[#16f2b3] hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-[#16f2b3] hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link 
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-[#16f2b3] px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-gray-800 no-underline transition-all duration-200 ease-out hover:bg-[#13d19a] hover:text-gray-900 hover:no-underline md:font-semibold" 
              role="button" 
              target="_blank" 
              href={personalData.resume}
            >
              <span>Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative mb-6 lg:mb-0">
          <Image
            src={Bailey}
            width={280}
            height={280}
            className="rounded-lg transition-all duration-1000 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;