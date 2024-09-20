import Navbar from "@/components/Navbar";
import Card3DSlider from "@/components/Card3DSlider";
import CollectionFeatured from "@/pages/CollectionFeatured";
import Discover from "@/pages/Discover";
import HeroSection from "@/pages/HeroSection";
import Overview from "@/pages/Overview";
import PhotoGallery from '@/pages/PhotoGallery';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PhotoGallery />
      <Card3DSlider />
      <Overview />
      <CollectionFeatured />
      <Discover/>
    </div>
  );
}
