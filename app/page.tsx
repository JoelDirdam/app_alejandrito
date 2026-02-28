import { HeroSection } from "@/components/hero-section";
import { EventInfoSection } from "@/components/event-info-section";
import { MapSection } from "@/components/map-section";
import { GiftRegistrySection } from "@/components/gift-registry-section";
import { FooterSection } from "@/components/footer-section";

export default function InvitationPage() {
  return (
    <main className="min-h-svh bg-white">
      {/* <div className="mx-auto w-full max-w-[430px] overflow-hidden rounded-[28px]  bg-white shadow-[0_24px_80px_rgba(32,86,89,0.18)]"> */}
      <div className="mx-auto w-full max-w-[450px] overflow-hidden bg-white shadow-[0_24px_80px_rgba(32,86,89,0.18)]">
        <HeroSection />
        <EventInfoSection />
        <MapSection />
        <GiftRegistrySection />
        <FooterSection />
      </div>
    </main>
  );
}
