import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import { servicesSlides } from "../utils/Data";

export default function ServicesCarousel() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("right");

  const goTo = (index) => {
    if (index === current || animating) return;
    setDirection(index > current ? "right" : "left");
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 350);
  };

  const next = () =>
    goTo(current === servicesSlides.length - 1 ? 0 : current + 1);

  useEffect(() => {
    const timer = setInterval(() => next(), 5000);
    return () => clearInterval(timer);
  }, [current]);

  // ✅ FIXED HERE
  const slide = servicesSlides[current];

  return (
    <div className="min-h-screen flex items-center justify-center p-6 py-16 bg-slate-100 font-sans">
      <div className="w-full max-w-5xl flex flex-col gap-8">

        {/* Section Heading */}
        <div className="text-center">
          <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${slide.textAccent}`}>
            What We Offer
          </p>

          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight font-serif">
            Services We Provide
          </h1>

          <div className={`mx-auto mt-3 h-1 w-14 rounded-full ${slide.accentSolid}`} />

          <p className="text-gray-500 mt-4 text-sm lg:text-base max-w-xl mx-auto leading-relaxed">
            We deliver end-to-end digital solutions tailored to help your business grow, stay secure, and stand out online.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="relative rounded-3xl shadow-xl border border-slate-200 bg-white p-8 min-h-[360px] overflow-hidden">

          {/* Accent radial gradient */}
          <div
            className={`absolute inset-0 pointer-events-none rounded-3xl bg-gradient-radial ${slide.accent} to-transparent`}
          />

          {/* Slide Content */}
          <div
            className={`flex flex-col md:flex-row items-stretch gap-12 transition-all duration-300 ${
              animating
                ? direction === "right"
                  ? "opacity-0 -translate-x-7"
                  : "opacity-0 translate-x-7"
                : "opacity-100 translate-x-0"
            }`}
          >
            {/* Image Panel */}
            <div className="md:w-80 flex-shrink-0">
              <div className="relative overflow-hidden rounded-2xl min-h-[280px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className={`absolute top-5 left-5 px-3 py-1 rounded-full text-xs font-bold text-white ${slide.accentSolid}`}>
                  {slide.tag}
                </div>
              </div>
            </div>

            {/* Text Panel */}
            <div className="flex-1 flex flex-col justify-center gap-4">
              <h2 className={`text-2xl lg:text-3xl font-extrabold leading-snug font-serif ${slide.textAccent}`}>
                {slide.title}
              </h2>

              <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
                {slide.description}
              </p>

              <div className={`h-[3px] w-10 rounded-full opacity-30 ${slide.accentSolid}`} />

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {slide.bullets.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                    <span className={`w-2 h-2 rounded-full ${slide.accentSolid}`} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-2">
                <Button
                  variant="secondary"
                  className={`${slide.accentSolid} hover:opacity-90`}
                  onClick={() => navigate("/services")}
                >
                  Know More
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-3">
          {servicesSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? `w-8 h-2 ${slide.accentSolid}`
                  : "w-2.5 h-2.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
