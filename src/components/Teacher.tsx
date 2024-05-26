import React from 'react'
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Aarav Sharma",
    designation: "Yoga Class Teacher",
    image:
      "https://images.unsplash.com/photo-1549045337-967927d923c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Rohan Mehta",
    designation: "Yoga Class Teacher",
    image:
    "https://images.unsplash.com/photo-1577760960310-c49bbb09161e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Priya Kapoor",
    designation: "Yoga Class Teacher",
    image:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Ananya Singh",
    designation: "Yoga Class Teacher",
    image:
    "https://images.unsplash.com/photo-1623091410901-00e2d268901f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    name: "Kabir Malhotra",
    designation: "Yoga Class Teacher",
    image:
    "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    name: "Diya Patel",
    designation: "Yoga Class Teacher",
    image:
    "https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGluZGlhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
  },
];

const teacher = () => {
  return (

   <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
     <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
    <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
      Meet out yoga teacher
    </p>
    <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
      Leverage the power of yoga to make life more joyfull
    </p>
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  </WavyBackground>
   </div>
  )
}

export default teacher
