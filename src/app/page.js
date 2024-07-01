"use client";
import { FirstSection } from "@/components/FirstSection";
import { Navbar } from "@/components/Navbar"
import { SecondSection } from "@/components/SecondSection";
import { ThirdSection } from "@/components/ThirdSection";
import { Section4 } from "@/components/Section4";
import Image from "next/image";
import { Section5 } from "@/components/Section5";
import { useState } from "react";
import { Section6 } from "@/components/Section6";

export default function Home() {
  const [isDark, setIsdark] = useState(false);
  const handleClick = () => {
    setIsdark(!isDark)
  }
  return (
    <>
      <div className={isDark ? "dark" : ""}>
        <button onClick={handleClick}>click</button>
        <div className="bg-white dark:bg-black">
          <Navbar toggle={handleClick} />
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <Section4 />
          <Section5 />
          <Section6 />
        </div>
      </div>
    </>
  )
}

