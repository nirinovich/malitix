
interface Logo {
  id: string | number;
  name: string;
  logo: string;
}

interface LogoCarouselProps {
  logos: Logo[];
  title?: string;
  speed?: number; // Duration in seconds
}

export function LogoCarousel({ logos, title, speed = 30 }: LogoCarouselProps) {
  return (
    <div className="w-full">
      {title && (
        <p className="text-center text-xs sm:text-sm uppercase tracking-widest mb-6 sm:mb-8 text-[var(--text-muted)]">
          {title}
        </p>
      )}
      
      <div className="overflow-hidden relative group">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none bg-gradient-to-r from-[var(--bg-primary)] to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none bg-gradient-to-l from-[var(--bg-primary)] to-transparent"></div>
        
        {/* Scrolling Container */}
        <div 
            className="flex animate-scroll-left hover:pause"
            style={{ animationDuration: `${speed}s` }}
        >
          {/* First set of logos */}
          {logos.map((company) => (
            <div
              key={`first-${company.id}`}
              className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8 w-24 sm:w-32 lg:w-36 h-14 sm:h-16 lg:h-20 flex items-center justify-center"
            >
              <img
                src={company.logo}
                alt={company.name}
                loading="lazy"
                className="max-w-full max-h-full object-contain p-2 sm:p-3 filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
          
          {/* Duplicate set for infinite scroll effect */}
          {logos.map((company) => (
            <div
              key={`second-${company.id}`}
              className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8 w-24 sm:w-32 lg:w-36 h-14 sm:h-16 lg:h-20 flex items-center justify-center"
            >
              <img
                src={company.logo}
                alt={company.name}
                loading="lazy"
                className="max-w-full max-h-full object-contain p-2 sm:p-3 filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
