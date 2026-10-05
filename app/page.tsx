'use client';
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#eeeeee] dark:bg-[#1a040d] text-[#8a5743] dark:text-[#dcdcdc] transition-colors duration-300 relative selection:bg-[#ffc3e9] selection:text-[#43031a]">
      {/* Floating or fixed luxury navbar */}
      <Navbar />

      <main className="relative overflow-hidden">
        {/* 1. Hero Section */}
        <Header />

        {/* Central container for editorial sections with immediate header-to-projects flow */}
        <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 mt-2 sm:mt-4 md:mt-6">
          <div className="w-full max-w-7xl space-y-16 md:space-y-24">
            {/* 2. Featured Projects (Grid 3-4 cards) */}
            <Projects />

            {/* 3. Work Experience */}
            <Experience />

            {/* 4. About Me & Skills */}
            <About />
          </div>
        </div>

        {/* 5. Boutique Contact Lounge & Footer with equalized spacing */}
        <div className="mt-20 md:mt-28">
          <Footer />
        </div>
      </main>
    </div>
  );
}