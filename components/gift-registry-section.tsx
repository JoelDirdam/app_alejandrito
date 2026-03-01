import { EVENT_DATA } from "@/lib/invitation-data";
import { AnimateOnScroll } from "./animate-on-scroll";

export function GiftRegistrySection() {
  return (
    <section className="relative">
      {/* Franja de fondo a ancho completo al inicio para continuidad con la sección anterior */}
      <div
        className="relative left-1/2 -translate-x-1/2 overflow-hidden"
      >
        <img
          src="https://res.cloudinary.com/dv1u9zrhl/image/upload/v1772326163/race_track_ng9ldz.png"
          alt="Imagen pista de carreras"
          className="w-full h-14 object-cover object-top"
        />
      </div>
      <div className="relative z-10 px-6 pt-12 pb-6 md:py-16">
        <div className="max-w-md mx-auto">
        <AnimateOnScroll>
          <p className="font-sans text-foreground font-bold text-center text-xl md:text-2xl leading-relaxed mb-8">
            Tu presencia es mi mejor regalo, pero si deseas darme un obsequio
            aqui tienes algunas opciones.
          </p>
        </AnimateOnScroll>

        {/* MESAS DE REGALOS heading - Julius Sans One */}
        <AnimateOnScroll delay={100}>
          <h2 className="font-serif text-lg md:text-xl  text-foreground text-center mb-8">
            MESAS DE REGALOS
          </h2>
        </AnimateOnScroll>

        {/* Gift registry buttons */}
        <div className="flex flex-row gap-3 items-center justify-center">
          {EVENT_DATA.giftRegistryLinks.map((link, index) => (
            <AnimateOnScroll key={link.label} delay={150 + index * 100}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-43 py-3.5 px-3 rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: `${link.color}33`,
                }}
              >
                <img
                  src={link.icon}
                  alt=""
                  className="w-10"
                />
                {/* Label - Pacifico */}
                <span className="font-mono text-foreground text-lg" style={{ color: `${link.color}` }}>
                  {link.label}
                </span>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
