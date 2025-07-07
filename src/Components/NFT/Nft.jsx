import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  FaFeather,
  FaChartLine,
  FaGem,
  FaUsers,
} from "react-icons/fa";

const slides = [
  {
    title: "NFT Mint Engine",
    desc: "Create & deploy NFTs in minutes — no dev needed.",
    bg: "bg-yellow-100",
    blobColor: "#fbbf24",
    icons: [FaFeather],
  },
  {
    title: "Live Floor Tracker",
    desc: "Monitor real-time prices across top marketplaces.",
    bg: "bg-blue-100",
    blobColor: "#60a5fa",
    icons: [FaChartLine],
  },
  {
    title: "Rarity Tools",
    desc: "Analyze rarity scores instantly with visual grading.",
    bg: "bg-green-100",
    blobColor: "#34d399",
    icons: [FaGem],
  },
  {
    title: "Community Gating",
    desc: "Token-gate Discord, Telegram or exclusive drops.",
    bg: "bg-purple-100",
    blobColor: "#a78bfa",
    icons: [FaUsers],
  },
];

export default function Nft() {
  const [startIndex, setStartIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(2);

  // Responsively adjust slide count
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setSlidesPerView(width < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prev = () => setStartIndex((i) => Math.max(i - 1, 0));
  const next = () =>
    setStartIndex((i) => Math.min(i + 1, slides.length - slidesPerView));

  const visibleSlides = slides.slice(startIndex, startIndex + slidesPerView);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
 
  return (
    <section data-aos="fade-down" className="w-full h-screen px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Arrows - hidden on small screens */}
        <button
          onClick={prev}
          className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 disabled:opacity-30"
          disabled={startIndex === 0}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
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

                {/* Icons */}
                <div className="flex justify-center gap-3 text-[400px] mt-6">
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

        {/* Swipe cue for mobile */}
        <p className="text-center text-sm text-gray-900 mt-6 sm:hidden animate-pulse">
          Swipe to explore →
        </p>
      </div>
    </section>
  );
}
