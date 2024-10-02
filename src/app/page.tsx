import { Docks } from "@/components/base/Docks";
import Footer from "@/components/base/Footer";
import Freelance from "@/components/base/Freelance";
import HomePage from "@/components/base/HomePage";
import Projects from "@/components/base/Projects";
import Skills from "@/components/base/Skills";
import DotPattern from "@/components/ui/dot-pattern";


export default function Home() {
  return (
    <div className="relative min-h-screen select-none">
      <DotPattern className="fixed inset-0 pointer-events-none" />
      <div className="relative z-10">
        <HomePage/>
        <Projects/>
        <Freelance/>
        <Skills/>
        <Footer/>
        <Docks/>
      </div>
    </div>
  );
}
