import Link from 'next/link'
import React from 'react'
import  Spotlight  from "./ui/spotlight";
import { cn } from "@/utils/cn";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};



const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 text-cyan-50'>
      <Spotlight
        className="-top-40  left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className='p-4 relative z-10 w-full text-center'>
        <h1 className='mt-20 md:mt-0 text-5xl md:t7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500'>
          Master the art of yoga
        </h1>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit dolores vero corrupti in architecto distinctio minus dolore tempora, quibusdam, explicabo doloribus? Quod, et commodi nostrum ratione est repudiandae possimus earum illum non facere repellat officiis? 
        </p>
      </div>
      <div className='mt-4'>
        <Link href={"/course"}>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <AceternityLogo/> 
            <span>Explore Courses</span>
          </HoverBorderGradient>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
