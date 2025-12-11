'use client';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className=" bg-gray-50 min-h-screen">
      <Navbar />
      <Header />
      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl">
          <Experience />
          <Projects />
          <About />
        </div>
      </div>
      <Footer />
    </main>
  );
}