import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import PracticeAreas from "@/components/sections/PracticeAreas";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Contact />
      </main>
      <Footer />
    </>
  );
}