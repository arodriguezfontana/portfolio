import Experience from "./components/Experience";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='px-[20%]'>
        <Header />
        <Experience />
      </div>
    </>
  );
}
