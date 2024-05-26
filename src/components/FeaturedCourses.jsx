"use client";
import { HoverEffect } from "./ui/card-hover-effect";

 const projects = [
    {
      "title": "Lotus Yoga Studio",
      "description": "A yoga studio that offers a variety of classes including hatha, vinyasa, and restorative yoga, providing a serene space for practitioners of all levels to find balance and peace.",
      "link": ""
    },
    {
      "title": "Zen Yoga Retreats",
      "description": "An organization that hosts yoga retreats in serene natural settings, allowing participants to immerse themselves in the practice of yoga while rejuvenating their mind, body, and spirit.",
      "link": ""
    },
    {
      "title": "Yogi's Corner",
      "description": "A community-driven platform where yoga enthusiasts can connect, share insights, and explore various yoga practices, fostering a supportive environment for personal growth and development.",
      "link": ""
    },
    {
      "title": "Asana Essentials",
      "description": "A yoga apparel brand that designs high-quality, eco-friendly clothing specifically tailored for yoga practitioners, offering comfort, style, and sustainability.",
      "link": ""
    },
    {
      "title": "Om Meditation App",
      "description": "A mobile application that provides guided meditation sessions, mindfulness exercises, and relaxation techniques, helping users cultivate inner peace and mental clarity through the power of meditation.",
      "link": ""
    },
    {
      "title": "Sunrise Yoga Academy",
      "description": "An educational institution that offers comprehensive yoga teacher training programs accredited by Yoga Alliance, empowering aspiring teachers with the knowledge and skills to share the transformative practice of yoga with others.",
      "link": ""
    }
  ]
export default function FeaturedCourses() {
  return (
    <div className=" text-white">
        <div className="text-center text-5xl ">Feature of Yoga App</div>
    <div className="max-w-5xl mx-auto px-8">

      <HoverEffect items={projects} />
    </div>
    </div>
  );
}
  
  
