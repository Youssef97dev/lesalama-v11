"use client";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import About from "./About";
import Events from "./Events";
import Menu from "./Menu";
import Bar from "./Bar";
import Mapbox from "./Mapbox";
import NavbarMobile from "./NavbarMobile";
import SocialsMobile from "./SocialsMobile";
import Socials from "./Socials";
import Gallery from "./Gallery";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isClient ? (
        <div className="relative p-0 lg:p-7 w-full h-full flex flex-col justify-start items-center">
          <SocialsMobile lang="fr" />
          <NavbarMobile
            item1={`Evénements`}
            item2={`La carte`}
            item3={`Gallery`}
          />
          <Navbar
            item1={`Evénements`}
            item2={`La carte`}
            item3={`Gallery`}
            lang="fr"
          />
          <Hero reserveText="Réserver" />
          <About />
          <Events />
          <Menu />
          <Bar />
          <Gallery />
          <Footer
            title1={`Ouvert du Lundi au Dimanche`}
            title2={`Ouvert : 12h00 PM - 02h00 AM`}
          />
          <Socials />
          <Mapbox />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          {/* Initial white background animation */}
          <div className="absolute inset-0 flex z-50">
            <div className="bg-color_1  flex-1 animate-slide-left"></div>
            <div className="bg-color_1  flex-1 animate-slide-right"></div>
          </div>

          {/* Beige background with logo animation */}
          <div className="absolute inset-0 bg-color_2 flex items-center justify-center">
            <img
              src="/logo-salama-humberger-white.png" // Replace with your logo path
              alt="Logo"
              className="w-32 h-32 animate-scale-3d"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
