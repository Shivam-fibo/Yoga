import React from "react";
import { Meteors } from "@/components/ui/meteors";
import ContactMe from "./ContactMe"

export default function MeteorsDemo() {
  return (
    <div className="">
      <div className=" min-h-screen bg-black py-1 pt-16 px-10">
      
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 my-12  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start z-10">
        


       

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
          <ContactMe/>
        </div>
      </div>
    </div>
  );
}