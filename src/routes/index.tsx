import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/ibuki/Header";
import { Hero } from "@/components/ibuki/Hero";
import { Kobido } from "@/components/ibuki/Kobido";
import { Experience } from "@/components/ibuki/Experience";
import { About } from "@/components/ibuki/About";
import { Location } from "@/components/ibuki/Location";
import { Testimonials } from "@/components/ibuki/Testimonials";
import { Future } from "@/components/ibuki/Future";
import { Reservation } from "@/components/ibuki/Reservation";
import { Payments } from "@/components/ibuki/Payments";
import { Footer } from "@/components/ibuki/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IBUKI — Le souffle du bien-être japonais" },
      {
        name: "description",
        content:
          "IBUKI — Maison de bien-être inspirée des traditions japonaises. Kobido, rituels de relâchement et de présence. Offre découverte 45€.",
      },
      { property: "og:title", content: "IBUKI — Le souffle du bien-être japonais" },
      {
        property: "og:description",
        content:
          "Soins Kobido et rituels japonais — ralentir, respirer, retrouver l'harmonie du corps et de l'esprit.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Kobido />
        <Experience />
        <About />
        <Location />
        <Testimonials />
        <Future />
        <Reservation />
        <Payments />
      </main>
      <Footer />
    </div>
  );
}
