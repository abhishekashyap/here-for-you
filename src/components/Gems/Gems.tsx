import { useEffect, useRef } from "react";
import Gem1 from "../../static/gem-1.svg";
import Gem2 from "../../static/gem-2.svg";
import Gem3 from "../../static/gem-3.svg";
import Gem4 from "../../static/gem-4.svg";
import Gem5 from "../../static/gem-5.svg";
import Gem6 from "../../static/gem-6.svg";

export default function Gems() {
  const ref = useRef<HTMLDivElement>(null);

  function parallax(e: MouseEvent) {
    const images = Array.from(ref.current?.children!);

    for (const el of images as HTMLImageElement[]) {
      const image = el;
      const speed = parseInt(image.getAttribute("data-speed")!);
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;
      image.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
  }

  useEffect(() => {
    window.addEventListener("mousemove", parallax);
    return () => window.removeEventListener("mousemove", parallax);
  }, [parallax]);

  return (
    <div ref={ref}>
      <img
        src={Gem1}
        className="hidden lg:block absolute left-30 top-10 md:ml-12 ml-20 mt-0 md:mt-8"
        data-speed="2"
      />
      <img
        src={Gem2}
        className="absolute left-1/3 sm:left-auto mt-4 sm:ml-0 sm:right-0 top-0 sm:mr-20 lg:mr-60 lg:mt-20"
        data-speed="-5"
      />
      <img
        src={Gem3}
        className="hidden lg:block absolute right-0 top-1/4"
        data-speed="1"
      />
      <img
        src={Gem4}
        className="absolute right-0 bottom-0 mb-20 sm:mb-0 sm:bottom-1/4 mr-8 sm:mr-16 md:mr-28 lg:mr-40"
        data-speed="-3"
      />
      <img
        src={Gem5}
        className="absolute left-0 bottom-0 sm:bottom-1/4 mb-20 sm:mb-0 ml-0 md:ml-12 lg:ml-40"
        data-speed="-5"
      />
      <img
        src={Gem6}
        className="hidden sm:block absolute left-20 top-0 mt-20 lg:top-1/3 lg:-mt-2 rotate-45"
        data-speed="-2"
      />
    </div>
  );
}
