import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import {
  FaRocket,
  FaShieldAlt,
  FaPalette,
  FaUserSecret,
  FaEthereum,
} from "react-icons/fa";

const slides = [
  {
    title: "Supercharged Speed",
    desc: "Blazingly fast transactions. Blink and it's done.",
    bg: "bg-[#fee2e2]",
    blobColor: "#fca5a5",
    icons: [FaRocket],
  },
  {
    title: "Military-Grade Security",
    desc: "Your assets guarded like national treasure.",
    bg: "bg-[#dbeafe]",
    blobColor: "#60a5fa",
    icons: [FaShieldAlt],
  },
  {
    title: "Gorgeous Design",
    desc: "Built to impress. Tap into elegance.",
    bg: "bg-[#f0fdf4]",
    blobColor: "#86efac",
    icons: [FaPalette],
  },
  {
    title: "Radical Privacy",
    desc: "It’s your wallet. Nobody’s watching.",
    bg: "bg-[#fdf4ff]",
    blobColor: "#e9d5ff",
    icons: [FaUserSecret],
  },
  {
    title: "Chain Agnostic",
    desc: "Ethereum. Solana. ZK. You're everywhere.",
    bg: "bg-[#fef9c3]",
    blobColor: "#facc15",
    icons: [FaEthereum],
  },
];

export default function Features() {
  const [startIndex, setStartIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(2);

  // Handle responsive slide count
  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width < 768) setSlidesPerView(1);
      else setSlidesPerView(2);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const prev = () => setStartIndex((i) => Math.max(i - 1, 0));
  const next = () =>
    setStartIndex((i) => Math.min(i + 1, slides.length - slidesPerView));

  const visibleSlides = slides.slice(startIndex, startIndex + slidesPerView);

  const handlers = useSwipeable({
  onSwipedLeft: () => next(),
  onSwipedRight: () => prev(),
  preventDefaultTouchmoveEvent: true,
  trackMouse: true,
});

  return (
    <section data-aos="fade-down" className="w-full h-screen px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Arrows */}
       {/* Left Arrow */}
<button
  onClick={prev}
  className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 disabled:opacity-30"
  disabled={startIndex === 0}
>
  <ChevronLeft className="w-5 h-5" />
</button>

{/* Right Arrow */}
<button
  onClick={next}
  className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 disabled:opacity-30"
  disabled={startIndex >= slides.length - slidesPerView}
>
  <ChevronRight className="w-5 h-5" />
</button>

        {/* Slider */}
        <div
  {...handlers}
  className="flex justify-center gap-6 transition-all duration-700 ease-in-out mt-10 flex-wrap"
>
  {visibleSlides.map((slide, i) => (
            <div
              key={i}
              className={`relative w-full sm:w-[90%] md:w-[45%] h-[400px] rounded-3xl p-6 shadow-xl overflow-hidden ${slide.bg}`}
            >
              {/* Blobs */}
              <div
                className="absolute w-28 h-28 rounded-full opacity-80 mix-blend-multiply filter animated-wrapper blur-xl"
                style={{ backgroundColor: slide.blobColor, top: "10%", left: "10%" }}
              />
              <div
                className="absolute w-24 h-24 rounded-full opacity-80 mix-blend-multiply filter animated-wrapper blur-xl"
                style={{ backgroundColor: slide.blobColor, bottom: "5%", right: "5%" }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1 text-gray-800">
                    {slide.title}
                  </h3>
                  <p className="text-sm text-gray-600">{slide.desc}</p>
                </div>

                {/* Sticker icons */}
                <div className="flex justify-center gap-4 text-[200px] opacity-30 mt-6">
                  {slide.icons.map((Icon, index) => (
                    <div
                      key={index}
                      className="relative text-gray-800 hover:scale-110 transition-transform"
                    >
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Swipe cue on small screens */}
<p className="text-center text-sm text-gray-900 mt-6 sm:hidden animate-pulse">
  Swipe to explore →
</p>

      </div>
    </section>
  );
}
