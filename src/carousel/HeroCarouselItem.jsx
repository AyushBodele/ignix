import { ArrowRight } from "lucide-react";
import {heroCards} from "../utils/Data";

const HeroCarouselItem = ({ slideIndex, slide }) => {
  const activeIndex = slideIndex % heroCards.length;
  if (!slide) return null;

  return (
    <section className="relative w-full h-[117vh] overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src={slide.image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto pt-58 font-robert-medium ml-33">
        <h1 className="
          text-white
          text-2xl sm:text-3xl md:text-5xl
          font-semibold
          leading-tight
          max-w-full sm:max-w-lg md:max-w-xl
          break-words
        ">
          {slide.title}{" "}
          <span className="text-emerald-400">
            {slide.highlight}
          </span>
        </h1>

        <p className="
          text-gray-200
          text-base sm:text-lg md:text-xl
          mt-6
          max-w-full sm:max-w-xl md:max-w-2xl
        ">
          {slide.description}
        </p>

        <button className="
          mt-10
          inline-flex items-center gap-3
          bg-white text-black
          px-6 py-3
          rounded-full
          font-semibold
          whitespace-nowrap
        ">
          {slide.cta}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* BOTTOM CARDS */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 z-20 pt-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-6
          ">
            {heroCards.map((card, i) => {
              const isActive = i === activeIndex;

              return (
                <div
                  key={i}
                  className={`relative rounded-xl p-6 overflow-hidden backdrop-blur-xl
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-emerald-950/40 border border-emerald-400/60 shadow-[0_0_30px_rgba(52,211,153,0.4)]"
                        : "bg-black/40 border border-white/15"
                    }`}
                >
                  <p
                    className={`uppercase tracking-wider font-semibold mb-3 text-xs
                      ${
                        isActive
                          ? "text-emerald-400"
                          : "text-gray-300"
                      }`}
                  >
                    {card.eyebrow}
                  </p>

                  <h3 className="
                    text-white
                    text-sm sm:text-base md:text-[17px]
                    leading-snug
                  ">
                    {card.text}
                  </h3>

                  <div
                    className={`absolute bottom-0 left-0 w-full h-1
                      ${
                        isActive
                          ? "bg-emerald-400"
                          : "bg-white/20"
                      }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarouselItem;
