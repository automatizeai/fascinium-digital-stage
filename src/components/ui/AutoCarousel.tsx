import { useEffect, useRef } from "react";

type AutoCarouselProps = {
  images: { src: string; alt?: string }[];
  speed?: number; // pixels per frame
  pauseOnHover?: boolean;
  className?: string;
  imageClassName?: string;
};

const AutoCarousel = ({
  images,
  speed = 0.6,
  className = "",
  imageClassName = "h-24 md:h-32 lg:h-36 w-auto",
}: AutoCarouselProps) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    let rafId: number;
    let offset = 0;

    const step = () => {
      const track = trackRef.current;
      if (track) {
        const halfWidth = track.scrollWidth / 2; // duplicated content
        if (!pausedRef.current) {
          offset -= speed;
        }
        if (Math.abs(offset) >= halfWidth) {
          offset = 0; // reset for seamless loop
        }
        track.style.transform = `translateX(${offset}px)`;
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [speed]);

  const duplicated = [...images, ...images];

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      {/* fading edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

      {/* track */}
      <div ref={trackRef} className="flex items-center gap-6 will-change-transform">
        {duplicated.map((img, idx) => (
          <div key={idx} className="shrink-0">
            <img
              src={img.src}
              alt={img.alt ?? `caso de sucesso ${idx + 1}`}
              className={`${imageClassName} rounded-md shadow-sm object-cover`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;