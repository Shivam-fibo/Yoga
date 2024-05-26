"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";


const content = [
    {
      title: "Yoga Classes",
      description:
        "Join our yoga classes and practice various styles including hatha, vinyasa, and restorative yoga. Experience the benefits of yoga for your mind, body, and spirit in a supportive and welcoming environment.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white">
          Yoga Classes
        </div>
      ),
    },
    {
      title: "Meditation Sessions",
      description:
        "Participate in guided meditation sessions to cultivate inner peace, mindfulness, and mental clarity. Learn techniques to calm your mind and enhance your overall well-being.",
      content: (
        <div className="h-full w-full bg-white flex items-center justify-center">
          <Image
            src="/meditation.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Meditation Session"
          />
        </div>
      ),
    },
    {
      title: "Yoga Teacher Training",
      description:
        "Embark on a journey to become a certified yoga teacher. Our comprehensive training program, accredited by Yoga Alliance, provides the knowledge and skills necessary to share the transformative practice of yoga with others.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white">
          Yoga Teacher Training
        </div>
      ),
    },
    {
      title: "Mindfulness Workshops",
      description:
        "Attend mindfulness workshops to deepen your understanding of yoga philosophy, meditation techniques, and holistic wellness practices. Explore ways to integrate mindfulness into your daily life for greater peace and fulfillment.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white">
          Mindfulness Workshops
        </div>
      ),
    },
  ];

export default function WhyChooseUs(){
    return(
        <StickyScroll content={content} />
        
    )
}