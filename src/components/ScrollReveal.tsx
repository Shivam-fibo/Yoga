"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content =[
  {
    title: "Beginner Yoga",
    description:
      "Start your yoga journey with our beginner classes. Learn the basics of yoga postures, breathing techniques, and meditation. Perfect for those new to yoga, these classes will help you build a strong foundation for your practice.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
        Beginner Yoga
      </div>
    ),
  },
  {
    title: "Intermediate Yoga",
    description:
      "Take your yoga practice to the next level with our intermediate classes. Focus on more challenging postures and sequences, deepen your understanding of yoga principles, and enhance your strength, flexibility, and balance.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/yoga-intermediate.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Intermediate Yoga"
        />
      </div>
    ),
  },
  {
    title: "Advanced Yoga",
    description:
      "Push your limits with our advanced yoga classes. Designed for experienced practitioners, these classes focus on complex postures, advanced breathing techniques, and deep meditation practices. Enhance your practice and achieve new levels of mastery.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--orange-500))] flex items-center justify-center text-white">
        Advanced Yoga
      </div>
    ),
  },
  {
    title: "Yoga for Relaxation",
    description:
      "Unwind and relax with our gentle yoga classes. Perfect for all levels, these sessions focus on restorative postures, calming breath work, and relaxation techniques to help you de-stress and rejuvenate your mind and body.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--blue-500))] flex items-center justify-center text-white">
        Yoga for Relaxation
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
