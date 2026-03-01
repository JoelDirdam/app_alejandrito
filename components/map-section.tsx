import { EVENT_DATA } from "@/lib/invitation-data";
import { AnimateOnScroll } from "./animate-on-scroll";

const CONFETTI_PIECES = [
  // fila superior
  {
    src: "/confeti_cian.svg",
    positionClass: "top-[8%] left-[85%]",
  },
  {
    src: "/confeti_orange.svg",
    positionClass: "top-[6%] left-[38%]",
  },
  {
    src: "/confeti_grayblue.svg",
    positionClass: "top-[5%] left-[15%]",
  },
  {
    src: "/confeti_red.svg",
    positionClass: "top-[45%] left-[35%]",
  },
  // alrededor del bebé
  {
    src: "/confeti_beige.svg",
    positionClass: "top-[32%] left-[90%]",
  },
  {
    src: "/confeti_coral.svg",
    positionClass: "top-[45%] left-[5%]",
  },
  {
    src: "/confeti_green.svg",
    positionClass: "top-[0%] left-[60%]",
  },
  // parte baja
  {
    src: "/confeti_gray.svg",
    positionClass: "top-[20%] left-[8%]",
  },
  {
    src: "/confeti_cian.svg",
    positionClass: "top-[25%] left-[30%]",
  },
  {
    src: "/confeti_coral.svg",
    positionClass: "top-[56%] left-[85%]",
  },
];

export function MapSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Baby with helmet image */}
      <AnimateOnScroll>
        <div className="relative flex justify-center px-4 pt-8 pb-0 bg-white">
          {/* Confeti de fondo entre bandera y bebé */}
          <div className="pointer-events-none absolute left-0 right-0 top-0 bottom-0 z-5">
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
          <img
            src={EVENT_DATA.images.babyHelmet}
            alt="Baby Alejandro with a racing helmet"
            className="w-64 md:w-72 mx-auto relative z-10"
          />
          <img
            src={EVENT_DATA.images.flagBackground}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-right md:object-contain absolute -bottom-24 lg:-bottom-28 md:scale-125 lg:scale-none z-0"
          />
        </div>
      </AnimateOnScroll>
    </section>
  );
}
