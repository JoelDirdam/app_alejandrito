import { EVENT_DATA } from "@/lib/invitation-data";
import { AnimateOnScroll } from "./animate-on-scroll";

export function EventInfoSection() {
  return (
    <section className="relative bg-linear-to-b from-[#D7F0F0] via-white to-white px-6 py-12 md:py-16">
      <div className="relative z-10 max-w-md mx-auto">
        {/* Quiero que celebres... - Jura */}
        <AnimateOnScroll>
          <p className="font-sans text-foreground text-center font-bold text-2xl lg:text-3xl leading-relaxed mb-10">
            {'¡Quiero que celebres conmigo mi primer añito!'}
          </p>
        </AnimateOnScroll>

        {/* Date, day number, and time */}
        <AnimateOnScroll delay={100}>
          {/* <div className="flex flex-col items-center gap-1 mb-10"> */}
          {/* Month - Pacifico */}
          {/* <p className="font-mono text-foreground text-3xl md:text-4xl">
              {EVENT_DATA.dateMonth}
            </p> */}
          {/* Day - big number - Pacifico */}
          {/* <p className="font-mono text-primary text-7xl md:text-8xl leading-none font-normal">
              {EVENT_DATA.dateDay}
            </p> */}
          {/* Time - Pacifico */}
          {/* <p className="font-mono text-foreground text-2xl md:text-3xl">
              {EVENT_DATA.time}
            </p> */}
          {/* </div> */}
          <div className="flex items-center justify-center gap-8 mb-8">
            {/* BLOQUE IZQUIERDO */}
            <div className="text-center">
              <p className="font-mono text-primary text-3xl md:text-4xl leading-none">
                {EVENT_DATA.dateMonth}
              </p>
              <p className="font-mono text-primary text-6xl md:text-7xl leading-[0.5]">
                {EVENT_DATA.dateDay}
              </p>
            </div>
            {/* LÍNEA DIVISORA */}
            <div className="h-30 w-px bg-linear-to-t from-[white] via-[#007781]/50 to-white" />
            {/* BLOQUE DERECHO */}
            <div className="text-center">
              <p className="font-mono text-primary text-3xl md:text-4xl">
                {EVENT_DATA.time}
              </p>
            </div>

          </div>
        </AnimateOnScroll>

        {/* Venue info */}
        <AnimateOnScroll delay={200}>
          <div className="flex flex-col items-center mb-8">
            {/* Location name - Jura */}
            <p className="font-sans text-[#007781] text-lg font-bold">
              {EVENT_DATA.locationName}
            </p>
            {/* Address - Pacifico */}
            <p className="font-sans text-[#007781] text-lg font-bold">
              {EVENT_DATA.locationAddress}
            </p>
          </div>
        </AnimateOnScroll>

        {/* Location button with icon */}
        <AnimateOnScroll delay={300}>
          <div className="flex justify-center">
            <a
              href={EVENT_DATA.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-5 px-6 py-4 rounded-full bg-[#5BC1C3]/20 text-primary  font-mono text-lg font-medium transition-all hover:bg-[#5BC1C3]/30"
            >
              <img
                src={EVENT_DATA.images.locationIcon}
                alt=""
                className="w-7"
              />
              {'Ubicacion en el mapa'}
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
