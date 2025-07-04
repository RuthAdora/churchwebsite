//import Navbar from "@/Components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Contact from "@/components/Contacts";

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import School from "@/components/School";
import Funding from "@/components/Funding";
//import InspirationPage from "@/components/InspirationPage";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <About />
      <CTA />
      <School />
      <Funding />
      <Programs />

      <Contact />

      <Footer />
    </>
  );
}
