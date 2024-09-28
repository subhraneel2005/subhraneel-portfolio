import { Docks } from "@/components/base/Docks";
import Footer from "@/components/base/Footer";
import Freelance from "@/components/base/Freelance";
import HomePage from "@/components/base/HomePage";
import Projects from "@/components/base/Projects";
import Skills from "@/components/base/Skills";


export default function Home() {
  return (
    <>
      <HomePage/>
      <Projects/>
      <Freelance/>
      <Skills/>
      <Footer/>
      <Docks/>
    </>
  );
}
