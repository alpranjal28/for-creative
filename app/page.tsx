"use client";
import Header from "./Header";
import HeroLeft from "@/components/HeroLeft";
import HeroRight from "@/components/HeroRight";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen h-screen bg-[#2d3748]">
      <Header />
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col items-center justify-evenly w-full h-full">
          <h1 className="text-2xl text-white mt-8">
            Welcome to Formik 
          </h1>
          <HeroLeft />
        </div>
        <div className="flex flex-col items-center justify-evenly  w-full h-full">
          <HeroRight />
        </div>
      </div>
    </main>
  );
}
