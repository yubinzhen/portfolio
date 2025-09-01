"use client";

import NavBar from "@/components/navBar";
import Intro from "@/components/intro";
import Experience from "@/components/experience";

const Home = () => {
  return (
    <div className="bg-portfolio-darkgray font-portfolio-poppins">
      <NavBar />
      <Intro />
      <Experience />
    </div>
  );
};

export default Home;
