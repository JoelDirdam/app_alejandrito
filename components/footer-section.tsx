import { EVENT_DATA } from "@/lib/invitation-data";
import { AnimateOnScroll } from "./animate-on-scroll";

export function FooterSection() {
  return (
    <footer className="relative bg-linear-to-b from-white via-[#F2FBFB] to-[#CBEBEC]  px-6 pb-16 overflow-hidden">
      <div className="relative z-10 max-w-md mx-auto flex flex-col items-center text-center">
        {/* Trophy image */}
        <AnimateOnScroll>
          <img
            src={EVENT_DATA.images.trophy}
            alt="Gold trophy"
            className="w-52 mb-6"
          />
        </AnimateOnScroll>

        {/* "Quiero celebrar contigo" - Jura */}
        <AnimateOnScroll delay={100}>
          <p className="font-sans text-foreground font-bold text-center text-xl md:text-2xl mb-5">
            Quiero celebrar contigo.
          </p>
        </AnimateOnScroll>

        {/* "Con mucho Carino" - Jura */}
        <AnimateOnScroll delay={200}>
          <p className="font-sans text-foreground font-bold text-center text-xl md:text-2xl mb-4">
            Con mucho cariño
          </p>
        </AnimateOnScroll>

        {/* "Alejandrito" - Pacifico */}
        <AnimateOnScroll delay={300}>
          <p className="font-mono text-primary text-4xl lg:text-5xl">
            {EVENT_DATA.babyNickname}
          </p>
        </AnimateOnScroll>
      </div>
    </footer>
  );
}
