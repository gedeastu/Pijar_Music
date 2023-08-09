import "./HomePage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// Import Header & Components
import Header from "../components/Home/Header";
import TopBar from "../components/Home/topBar";

//Import Main Layouting
import WhoWeAre from "../components/Home/WhoWeAre";
import OurCampaign from "../components/Home/OurCampaign";
import LastestArticles from "../components/Home/LastestArticles";
import WhatPeopleSay from "../components/Home/WhatPeopleSay";
import NeedHelp from "../components/Home/NeedHelp";

// Import Footer
import Footer from "../components/Home/Footer";
import Copyright from "../components/Home/copyright";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
export default function HomePage() {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);
  return (
    <>
      <div
        id="bg"
        className="container mx-auto bg-cover bg-fixed bg-center max-w-full relative flex flex-col h-screen"
      >
        <Header TopBar={<TopBar />} />
        <main className="flex flex-col">
          <article className="flex flex-col gap-10 bg-white">
            <WhoWeAre />
            <OurCampaign />
            <LastestArticles />
            <WhatPeopleSay />
          </article>
          <article className="bg-white">
            <NeedHelp />
          </article>
        </main>
        <Footer Copyright={<Copyright />} />
      </div>
    </>
  );
}
