"use client";

import { useCallback, useEffect, useState } from "react";
import { About } from "@/components/About";
import { BookingModal } from "@/components/BookingModal";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Preloader } from "@/components/Preloader";
import { Pricing } from "@/components/Pricing";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SpaceGallery } from "@/components/SpaceGallery";
import { BookingProvider, useBooking } from "@/shared/hooks/useBooking";

function HomeContent() {
  const [booting, setBooting] = useState(true);
  const { open, closeBooking } = useBooking();
  const onPreloaderDone = useCallback(() => setBooting(false), []);

  useEffect(() => {
    const t = window.setTimeout(() => setBooting(false), 3200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      {booting && <Preloader onDone={onPreloaderDone} />}
      {!booting && <SmoothScroll />}

      <Header />
      <main>
        <Hero />
        <About />
        <SpaceGallery />
        <Gallery />
        <Services />
        <Pricing />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <BookingModal open={open} onClose={closeBooking} />
    </>
  );
}

export function HomePage() {
  return (
    <BookingProvider>
      <HomeContent />
    </BookingProvider>
  );
}
