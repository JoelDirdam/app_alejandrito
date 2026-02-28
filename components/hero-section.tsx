import { EVENT_DATA } from "@/lib/invitation-data";
import { AnimateOnScroll } from "./animate-on-scroll";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden px-4 pt-6 pb-12">
      {/* Triangle flags at the very top */}
      <img
        src={EVENT_DATA.images.triangleFlags}
        alt=""
        aria-hidden="true"
        className="w-full max-w-md mx-auto mb-4"
      />

      {/* YOU ARE INVITED - Julius Sans One */}
      <AnimateOnScroll>
        <p className="font-serif text-lg md:text-xl text-foreground text-center">
          You are invited
        </p>
      </AnimateOnScroll>

      {/* Car + baby + flag illustration */}
      <AnimateOnScroll delay={100}>
        <img
          src={EVENT_DATA.images.carBabyFlag}
          alt="Baby driving a red race car with a checkered flag"
          className="w-72 md:w-80 mx-auto mt-2"
        />
      </AnimateOnScroll>

      {/* "Alejandro is turning" - Pacifico */}
      <AnimateOnScroll delay={200}>
        <p className="font-mono text-foreground text-xl md:text-2xl text-center mt-4">
          {EVENT_DATA.babyName} is turning
        </p>
      </AnimateOnScroll>

      {/* THE FAST - Jura + the "one" image */}
      <AnimateOnScroll delay={300}>
        <div className="flex flex-col items-center mt-2">
          <h1 className="font-sans text-5xl md:text-6xl text-primary tracking-[0.15em] uppercase text-center leading-tight">
            THE FAST
          </h1>
          <img
            src={EVENT_DATA.images.oneImage}
            alt="Number one"
            className="w-full -mt-3 lg:-mt-6 -rotate-2 scale-120 lg:scale-none"
          />
        </div>
      </AnimateOnScroll>
    </section>
  );
}
