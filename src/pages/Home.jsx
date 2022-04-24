import React, { useRef, useEffect } from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import PhotoSection from "../partials/PhotoSection";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import SaveTheDate from "../partials/SaveTheDate";
import Rsvp from "../partials/Rsvp";

function Home() {
  const dateRef = useRef(null);
  const topRef = useRef(null);
  const rsvpRef = useRef(null);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-slate-400">
      {/*  Site header */}
      <Header dateRef={dateRef} topRef={topRef} rsvpRef={rsvpRef} />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome topRef={topRef} />
        <PhotoSection />
        <SaveTheDate dateRef={dateRef} />
        <Rsvp rsvpRef={rsvpRef} />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
