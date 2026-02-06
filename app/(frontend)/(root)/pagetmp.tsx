import HeroSection from "@/components/hero-section";
import PhotoGallery from "@/components/PhotoGallery";
import About from "@/components/About";
import Bento from "@/components/grid/GridLayout3";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Bento />
      <PhotoGallery />
      <Team /> 
    </>
  );
}
