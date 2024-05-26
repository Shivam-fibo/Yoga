import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import ScrollReveal from "@/components/ScrollReveal";
import InfiniteCard from "@/components/InfiniteCard";
import Teacher from "@/components/Teacher";
import Footer from "@/components/Footer";



export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96]">
  
    <HeroSection/>
    <FeaturedCourses/>
    <InfiniteCard/>
    <Teacher/>
    <Footer/>
   </main>
  );
} 
