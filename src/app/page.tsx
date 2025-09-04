"use client";

import NavBar from "@/components/navBar";
import Intro from "@/components/intro";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className="bg-portfolio-darkgray font-portfolio-poppins">
      <NavBar />
      <Intro />
      <Experience />

      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
