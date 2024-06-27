import About from "@/components/about/main";
import Main from "@/components/main";
import Navbar from "@/components/navbar";
import Project from "@/components/project/main";
import Social from "@/components/social/main";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Project />
      <Social />
    </>
  );
}
