import { useState } from "react";

const socialIcons = [
  {
    label: "Facebook",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  }
];

export default function RemoteRecruitFooter() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full bg-white">
      {/* Wave + content area */}
      <div className="relative w-full overflow-hidden" style={{ backgroundColor: "#1e3a6e" }}>

        {/* SVG wave mask — white cutout on top */}
        <div className="absolute top-0 left-0 w-full" style={{ lineHeight: 0 }}>
          <svg
            viewBox="0 0 1440 160"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full"
            style={{ height: "160px", display: "block" }}
          >
            <path
              d="M0,0 L0,0 C180,0 300,20 480,70 C640,115 820,140 1440,130 L1440,0 Z"
              fill="white"
            />
            {/* Teal accent line along the wave edge */}
            <path
              d="M0,0 C180,0 300,20 480,70 C640,115 820,140 1440,130"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Subtle gloss highlight (top-right area) */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            top: "60px",
            right: "80px",
            width: "360px",
            height: "180px",
            background: "radial-gradient(ellipse at 60% 40%, rgba(255,255,255,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Content row */}
        <div
          className="relative flex items-center justify-between px-16"
          style={{ paddingTop: "180px", paddingBottom: "60px" }}
        >
          {/* Logo */}
          <div className="flex flex-col leading-tight select-none">
            <span
              className="font-bold text-4xl tracking-tight"
              style={{ color: "#38bdf8" }}
            >
              <img src="Logo.png" alt="" />
            </span>
            <span
              className="font-bold text-4xl tracking-tight"
              style={{ color: "#ffffff" }}
            >
            </span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialIcons.map((icon, i) => (
              <button
                key={icon.label}
                aria-label={icon.label}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="flex items-center justify-center rounded-full transition-all duration-200"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor:
                    hovered === i
                      ? "rgba(56,189,248,0.25)"
                      : "rgba(255,255,255,0.12)",
                  color: hovered === i ? "#38bdf8" : "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  transform: hovered === i ? "scale(1.1)" : "scale(1)",
                }}
              >
                {icon.svg}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="relative flex items-center justify-center py-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <img src="minlogo.png" height="10" width="30" alt="RemoteRecruit Logo" />
        </div>
      </div>
    </div>
  );
}