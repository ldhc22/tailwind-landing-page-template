import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import PhotoSection from "../partials/PhotoSection";
import Presents from "../partials/Presents";
import Recepcion from "../partials/Recepcion";
//import MapContainer from "../maps/MapContainer";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-danse-green-125">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <PhotoSection />
        <Recepcion />
        <Presents />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
