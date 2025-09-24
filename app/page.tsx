import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='px-[10%]'>
        <Header />
        <Experience />
        <Projects />
        <About />
      </div>
    </>
  );
}
