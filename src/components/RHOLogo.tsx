import React, { useId } from 'react';

export interface RHOLogoProps {
  variant?: 'horizontal' | 'crest' | 'stacked' | 'white' | 'full' | 'image';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  className?: string;
  showTagline?: boolean;
  useImage?: boolean;
  tagline?: string;
  subtitle?: string;
}

export const RHOLogo: React.FC<RHOLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  showTagline = true,
  useImage = false,
  tagline = 'BUILDING BRIGHTER FUTURE TOGETHER',
  subtitle = 'Tanzanian NGO • Non-Profit • Community-Focused'
}) => {
  // Generate unique ID prefix to prevent SVG gradient clashing between multiple instances
  const rawId = useId();
  const id = rawId.replace(/[^a-zA-Z0-9]/g, '');

  const goldGradId = `rhoGold_${id}`;
  const navyGradId = `rhoNavy_${id}`;
  const sunGlowId = `rhoSun_${id}`;
  const rayGradId = `rhoRay_${id}`;
  const heartGradId = `rhoHeart_${id}`;
  const handLId = `rhoHandL_${id}`;
  const handRId = `rhoHandR_${id}`;

  // Pixel dimensions for crest / logo
  const dimensions = {
    xs: 32,
    sm: 40,
    md: 52,
    lg: 72,
    xl: 96,
    '2xl': 140,
    '3xl': 200
  }[size];

  // If user requested image or variant="image", render the official high-res logo asset
  if (variant === 'image' || useImage) {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <img
          src="/rho-logo.jpg"
          alt="Rising Hands Organisation Official Logo"
          width={dimensions}
          height={dimensions}
          className="rounded-sm object-contain drop-shadow-sm transition-transform duration-200 hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // The official vector crest SVG of Rising Hands Organisation
  const CrestSVG = (
    <svg
      viewBox="0 0 400 400"
      width={dimensions}
      height={dimensions}
      className="shrink-0 drop-shadow-sm transition-transform duration-200 hover:scale-105 select-none"
      aria-label="Rising Hands Organisation Official Emblem"
    >
      <defs>
        {/* Metallic Gold Gradient */}
        <linearGradient id={goldGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C99424" />
          <stop offset="25%" stopColor="#F5D880" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="80%" stopColor="#FCE79D" />
          <stop offset="100%" stopColor="#9C731A" />
        </linearGradient>

        {/* Deep Navy Gradient for Hands */}
        <linearGradient id={navyGradId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#102E5C" />
          <stop offset="50%" stopColor="#081A38" />
          <stop offset="100%" stopColor="#030C1A" />
        </linearGradient>

        {/* Hand highlights for 3D sculptured curvature */}
        <linearGradient id={handLId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#255494" />
          <stop offset="45%" stopColor="#0E2850" />
          <stop offset="100%" stopColor="#051429" />
        </linearGradient>

        <linearGradient id={handRId} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#255494" />
          <stop offset="45%" stopColor="#0E2850" />
          <stop offset="100%" stopColor="#051429" />
        </linearGradient>

        {/* Sun Glow */}
        <radialGradient id={sunGlowId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#FFF1A8" />
          <stop offset="70%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </radialGradient>

        {/* Sun Rays Gradient */}
        <linearGradient id={rayGradId} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="60%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>

        {/* Golden Heart Gradient */}
        <radialGradient id={heartGradId} cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FFF7CC" />
          <stop offset="40%" stopColor="#F4CB58" />
          <stop offset="80%" stopColor="#C99424" />
          <stop offset="100%" stopColor="#7E560B" />
        </radialGradient>
      </defs>

      {/* Sky Canvas / Light Disc */}
      <circle cx="200" cy="200" r="162" fill="#FFFFFF" />

      {/* Top Golden Frame Arch */}
      <path
        d="M 58,200 A 150,150 0 0,1 342,200"
        fill="none"
        stroke={`url(#${goldGradId})`}
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Golden Inner Rim Highlight */}
      <path
        d="M 66,200 A 142,142 0 0,1 334,200"
        fill="none"
        stroke="#FFF8D6"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* ================= RADIANT SUN RAYS ================= */}
      <g fill={`url(#${rayGradId})`}>
        {/* Center vertical ray */}
        <polygon points="197,148 200,56 203,148" />
        {/* Left rays */}
        <polygon points="186,150 178,61 192,152" />
        <polygon points="175,155 158,72 181,159" />
        <polygon points="166,163 140,88 172,168" />
        <polygon points="159,173 126,108 165,179" />
        <polygon points="155,185 118,132 161,192" />
        {/* Right rays */}
        <polygon points="214,150 222,61 208,152" />
        <polygon points="225,155 242,72 219,159" />
        <polygon points="234,163 260,88 228,168" />
        <polygon points="241,173 274,108 235,179" />
        <polygon points="245,185 282,132 239,192" />
      </g>

      {/* Radiant Rising Sun */}
      <circle cx="200" cy="158" r="38" fill={`url(#${sunGlowId})`} />
      <circle cx="200" cy="158" r="38" fill="none" stroke={`url(#${goldGradId})`} strokeWidth="1" opacity="0.6" />

      {/* Soaring Birds */}
      <g fill="#081A38">
        <path d="M 124,102 C 128,96 134,98 138,102 C 142,98 148,96 152,102 C 146,101 142,104 138,106 C 134,104 130,101 124,102 Z" />
        <path d="M 114,122 C 117,118 122,119 125,122 C 128,119 133,118 136,122 C 132,121 128,124 125,125 C 122,124 119,121 114,122 Z" />
        <path d="M 264,100 C 268,95 273,97 277,100 C 281,97 286,95 290,100 C 285,99 281,102 277,104 C 273,102 269,99 264,100 Z" />
        <path d="M 270,126 C 273,122 277,123 280,126 C 283,123 287,122 290,126 C 286,125 283,128 280,129 C 277,128 274,125 270,126 Z" />
      </g>

      {/* Gentle Mound / Hill Underneath */}
      <path
        d="M 118,236 Q 200,208 282,236 L 282,260 Q 200,240 118,260 Z"
        fill="#081A38"
      />

      {/* ================= THREE JOYFUL CHILDREN ================= */}
      <g fill="#081A38">
        {/* CENTER CHILD (Both arms raised high in victory) */}
        <circle cx="200" cy="144" r="8.5" />
        <circle cx="196" cy="140" r="2.5" />
        <circle cx="200" cy="138" r="2.8" />
        <circle cx="204" cy="140" r="2.5" />
        <path d="M 194,153 L 206,153 L 204,175 L 196,175 Z" />
        <path d="M 195,154 L 180,132 L 183,130 L 198,154 Z" />
        <circle cx="179" cy="130" r="2.2" />
        <path d="M 205,154 L 220,132 L 217,130 L 202,154 Z" />
        <circle cx="221" cy="130" r="2.2" />
        <path d="M 196,175 L 204,175 L 206,188 L 201,188 L 200,181 L 199,188 L 194,188 Z" />
        <path d="M 195,188 L 194,208 L 198,208 L 199,188 Z" />
        <path d="M 201,188 L 202,208 L 206,208 L 205,188 Z" />

        {/* LEFT CHILD (Girl with ponytail, arm waving) */}
        <circle cx="165" cy="153" r="7.5" />
        <path d="M 160,152 C 150,148 144,156 142,163 C 148,166 154,161 159,156 Z" />
        <path d="M 160,161 L 170,161 L 176,188 L 154,188 Z" />
        <path d="M 168,162 L 181,146 L 183,148 L 171,166 Z" />
        <circle cx="182" cy="146" r="2" />
        <path d="M 160,163 L 152,176 L 155,178 L 162,167 Z" />
        <path d="M 160,188 L 159,211 L 163,211 L 164,188 Z" />
        <path d="M 166,188 L 167,211 L 171,211 L 170,188 Z" />

        {/* RIGHT CHILD (Young child pointing up) */}
        <circle cx="236" cy="159" r="7" />
        <path d="M 231,167 L 241,167 L 240,185 L 232,185 Z" />
        <path d="M 232,168 L 221,153 L 223,151 L 234,167 Z" />
        <circle cx="221" cy="151" r="2" />
        <path d="M 241,169 L 248,181 L 246,183 L 239,173 Z" />
        <path d="M 232,185 L 240,185 L 241,194 L 237,194 L 236,189 L 235,194 L 231,194 Z" />
        <path d="M 232,194 L 232,212 L 235,212 L 236,194 Z" />
        <path d="M 237,194 L 238,212 L 241,212 L 240,194 Z" />
      </g>

      {/* ================= CRADLING RISING HANDS ================= */}
      {/* Left Cupped Hand */}
      <path
        d="M 200,344 
           C 165,338 120,305 92,262 
           C 68,224 58,180 58,160 
           C 64,165 72,176 77,194 
           C 82,172 90,162 96,168 
           C 99,182 101,198 100,214 
           C 105,190 114,178 120,184 
           C 123,196 122,216 118,230 
           C 134,204 148,206 150,214 
           C 152,226 142,246 132,260 
           C 150,268 174,286 182,300 
           C 188,312 196,330 200,344 Z"
        fill={`url(#${handLId})`}
      />

      {/* Right Cupped Hand */}
      <path
        d="M 200,344 
           C 235,338 280,305 308,262 
           C 332,224 342,180 342,160 
           C 336,165 328,176 323,194 
           C 318,172 310,162 304,168 
           C 301,182 299,198 300,214 
           C 295,190 286,178 280,184 
           C 277,196 278,216 282,230 
           C 266,204 252,206 250,214 
           C 248,226 258,246 268,260 
           C 250,268 226,286 218,300 
           C 212,312 204,330 200,344 Z"
        fill={`url(#${handRId})`}
      />

      {/* Base Palm Outline / Shadow Accent */}
      <path
        d="M 68,185 C 64,220 78,265 106,300 C 134,332 170,345 200,348 C 230,345 266,332 294,300 C 322,265 336,220 332,185 C 330,172 334,165 338,162 C 342,185 332,232 308,270 C 278,315 235,348 200,352 C 165,348 122,315 92,270 C 68,232 58,185 62,162 C 66,165 70,172 68,185 Z"
        fill={`url(#${navyGradId})`}
        opacity="0.9"
      />

      {/* Outer Hand Golden Rim Contour */}
      <path
        d="M 60,195 C 60,240 85,290 120,325 C 145,348 175,356 200,358 C 225,356 255,348 280,325 C 315,290 340,240 340,195"
        fill="none"
        stroke={`url(#${goldGradId})`}
        strokeWidth="3.2"
        opacity="0.9"
      />

      {/* ================= GOLDEN HEART (Base Junction) ================= */}
      <g transform="translate(0, 5)">
        <path
          d="M 200,336 
             C 194,328 178,312 178,298 
             C 178,286 188,278 197,284 
             C 199,285 200,288 200,289 
             C 200,288 201,285 203,284 
             C 212,278 222,286 222,298 
             C 222,312 206,328 200,336 Z"
          fill="#FFFFFF"
          opacity="0.95"
        />
        <path
          d="M 200,334 
             C 195,327 181,313 181,300 
             C 181,289 189,282 197,287 
             C 199,288 200,290 200,291 
             C 200,290 201,288 203,287 
             C 211,282 219,289 219,300 
             C 219,313 205,327 200,334 Z"
          fill={`url(#${heartGradId})`}
          stroke="#FFF2AA"
          strokeWidth="1"
        />
      </g>
    </svg>
  );

  // Variant: Just the Circular Crest
  if (variant === 'crest') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{CrestSVG}</div>;
  }

  // Variant: Stacked Logo (Emblem + Serif Typography + Tagline)
  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {CrestSVG}
        <div className="mt-3">
          <h1 className="text-xl sm:text-2xl font-black tracking-tight text-[#002147] font-serif leading-tight">
            RISING HANDS
          </h1>
          <div className="flex items-center justify-center gap-2 mt-0.5">
            <span className="h-[1px] w-6 bg-[#D4AF37]" />
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#D4AF37] uppercase">
              ORGANISATION
            </span>
            <span className="h-[1px] w-6 bg-[#D4AF37]" />
          </div>
          {showTagline && (
            <div className="mt-2 py-1 border-y border-[#D4AF37]/40">
              <p className="text-[11px] sm:text-xs font-bold tracking-wider text-[#002147] uppercase">
                {tagline}
              </p>
            </div>
          )}
          <p className="mt-1 text-[10px] text-slate-500 font-medium">{subtitle}</p>
        </div>
      </div>
    );
  }

  // Variant: White/Light On Dark (Navbar & Footer on Tanzanian Navy #002147)
  if (variant === 'white') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="p-0.5 bg-white/10 rounded-full border border-[#D4AF37]/40 shrink-0">
          {CrestSVG}
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-base sm:text-lg font-black tracking-tight text-white font-serif leading-none drop-shadow-sm">
              RISING HANDS
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-[#D4AF37] tracking-widest uppercase leading-none">
              ORGANISATION
            </span>
          </div>
          {showTagline && (
            <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#FCD34D] uppercase mt-1 leading-none">
              “{tagline.replace(/^“|”$/g, '')}”
            </span>
          )}
          <span className="text-[9px] text-slate-300 font-medium tracking-wide mt-0.5 leading-none">
            {subtitle}
          </span>
        </div>
      </div>
    );
  }

  // Variant: Full Brand Lockup with the 4 Pillars
  if (variant === 'full') {
    return (
      <div className={`p-6 sm:p-8 bg-white rounded-sm border-2 border-slate-200 shadow-lg text-center ${className}`}>
        <div className="flex justify-center mb-4">
          {CrestSVG}
        </div>
        <h2 className="text-2xl sm:text-3xl font-black font-serif text-[#002147] tracking-tight">
          RISING HANDS
        </h2>
        <div className="flex items-center justify-center gap-3 my-1.5">
          <span className="h-[1.5px] w-8 sm:w-12 bg-[#D4AF37]" />
          <span className="text-xs sm:text-sm font-extrabold tracking-[0.3em] text-[#D4AF37] uppercase">
            ORGANISATION
          </span>
          <span className="h-[1.5px] w-8 sm:w-12 bg-[#D4AF37]" />
        </div>
        <div className="my-3 py-1.5 border-y border-[#D4AF37]/50 max-w-md mx-auto relative">
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.18em] text-[#002147] uppercase">
            BUILDING BRIGHTER FUTURE TOGETHER
          </p>
          <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#D4AF37]" />
        </div>

        {/* 4 Pillars Badge Grid */}
        <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto text-center">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-sm bg-slate-50 border border-slate-200 flex items-center justify-center mb-1 text-[#002147]">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" opacity="0" />
                <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
              </svg>
            </div>
            <span className="text-[10px] sm:text-xs font-black tracking-wider text-[#002147] uppercase">
              EDUCATE
            </span>
          </div>

          <div className="flex flex-col items-center border-l border-slate-200">
            <div className="w-8 h-8 rounded-sm bg-slate-50 border border-slate-200 flex items-center justify-center mb-1 text-[#D4AF37]">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <span className="text-[10px] sm:text-xs font-black tracking-wider text-[#002147] uppercase">
              EMPOWER
            </span>
          </div>

          <div className="flex flex-col items-center border-l border-slate-200">
            <div className="w-8 h-8 rounded-sm bg-slate-50 border border-slate-200 flex items-center justify-center mb-1 text-[#002147]">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <span className="text-[10px] sm:text-xs font-black tracking-wider text-[#002147] uppercase">
              INSPIRE
            </span>
          </div>

          <div className="flex flex-col items-center border-l border-slate-200">
            <div className="w-8 h-8 rounded-sm bg-slate-50 border border-slate-200 flex items-center justify-center mb-1 text-[#002147]">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <span className="text-[10px] sm:text-xs font-black tracking-wider text-[#002147] uppercase">
              TRANSFORM
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Default: Horizontal Brand Lockup (for Light Backgrounds)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {CrestSVG}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-base sm:text-lg font-black tracking-tight text-[#002147] font-serif leading-none">
            RISING HANDS
          </span>
          <span className="text-xs sm:text-sm font-extrabold text-[#D4AF37] tracking-widest uppercase leading-none">
            ORGANISATION
          </span>
        </div>
        {showTagline && (
          <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#002147] uppercase mt-1 leading-none">
            “{tagline.replace(/^“|”$/g, '')}”
          </span>
        )}
        <span className="text-[9px] text-slate-500 font-medium tracking-wide mt-0.5 leading-none">
          {subtitle}
        </span>
      </div>
    </div>
  );
};
