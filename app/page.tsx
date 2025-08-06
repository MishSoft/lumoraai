// import Image from "next/image";

import Community from "./components/Commpunity";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Templates from "./components/Templates";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Templates />
      <Community />
      <Pricing />
    </div>
  );
}
