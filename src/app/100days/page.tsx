"use client";
import React from "react";
import Image from "next/image";
import { Label } from '@radix-ui/react-label';

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 mt-10 z-5000">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {yogaClasses.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
 
            <p className={("text-xl mb-4")}>
              {item.title}
            </p>
 
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const yogaClasses = [
  {
    title: "Morning Flow Yoga",
    description: (
      <>
        <p>
          Start your day with a gentle yoga session. Suitable for all levels.
        </p>
        <p>
          Instructor: Emily White, 8 years of experience.
        </p>
        <p>
          Time: Monday to Friday, 7 AM.
        </p>
        <p>
          Location: 123 Yoga Studio, Wellness St.
        </p>
        <p>
          Fee: $15 per class.
        </p>
        <p>
          Contact: 555-9876
        </p>
      </>
    ),
    badge: "Morning Class",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hatha Yoga",
    description: (
      <>
        <p>
          Traditional Hatha Yoga for strength and flexibility. Open to all.
        </p>
        <p>
          Instructor: John Doe, 10 years of experience.
        </p>
        <p>
          Time: Tuesday and Thursday, 6 PM.
        </p>
        <p>
          Location: 456 Peace Blvd, Yoga Center.
        </p>
        <p>
          Fee: $20 per class.
        </p>
        <p>
          Contact: 555-1234
        </p>
      </>
    ),
    badge: "Evening Class",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Weekend Relaxation Yoga",
    description: (
      <>
        <p>
          Relax and rejuvenate with a calming yoga session. Suitable for all.
        </p>
        <p>
          Instructor: Sarah Green, 5 years of experience.
        </p>
        <p>
          Time: Saturday and Sunday, 10 AM.
        </p>
        <p>
          Location: 789 Tranquil Lane, Yoga Studio.
        </p>
        <p>
          Fee: $18 per class.
        </p>
        <p>
          Contact: 555-4321
        </p>
      </>
    ),
    badge: "Weekend Class",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

