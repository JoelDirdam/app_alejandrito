import { EVENT_DATA } from "@/lib/invitation-data";
import { AnimateOnScroll } from "./animate-on-scroll";

export function FooterSection() {

  const CONFETTI_PIECES = [
    // fila superior
    {
      src: "/confeti_cian.svg",
      positionClass: "top-[1%] left-[85%]",
    },
    {
      src: "/confeti_orange.svg",
      positionClass: "top-[18%] left-[16%]",
    },
    {
      src: "/confeti_red.svg",
      positionClass: "top-[50%] left-[70%]",
    },
    // alrededor del bebé
    {
      src: "/confeti_beige.svg",
      positionClass: "top-[35%] left-[35%]",
    },
    {
      src: "/confeti_coral.svg",
      positionClass: "top-[40%] left-[5%]",
    },
    {
      src: "/confeti_green.svg",
      positionClass: "top-[0%] left-[13%]",
    },
    // parte baja
    {
      src: "/confeti_gray.svg",
      positionClass: "top-[20%] left-[70%]",
    },
    {
      src: "/confeti_cian.svg",
      positionClass: "top-[52%] left-[20%]",
    },
    {
      src: "/confeti_coral.svg",
      positionClass: "top-[35%] left-[95%]",
    },
  ];

  return (
    <footer className="relative bg-linear-to-b from-white via-[#F2FBFB] to-[#CBEBEC]  px-6 pb-16 overflow-hidden">
      <div className="relative z-10 max-w-md mx-auto flex flex-col items-center text-center">
        {/* Confeti de fondo entre bandera y bebé */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 bottom-0 z-0">
          {CONFETTI_PIECES.map((piece, index) => (
            <img
              key={index}
              src={piece.src}
              alt=""
              aria-hidden="true"
              className={`absolute w-4 opacity-80 ${piece.positionClass}`}
            />
          ))}
        </div>
        {/* Trophy image */}
        <AnimateOnScroll>
          <img
            src={EVENT_DATA.images.trophy}
            alt="Gold trophy"
            className="w-52 mb-6 z-10"
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
