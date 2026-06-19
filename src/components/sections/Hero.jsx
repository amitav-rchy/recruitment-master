export default function RemoteRecruitHero() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(140deg, #1b3c7a 0%, #2358a8 48%, #2d68b5 100%)",
        minHeight: "550px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Decorative SVG layer */}
      <svg
        viewBox="0 0 900 520"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 2 }}
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="0" cy="0" r="80" fill="none" />
        <circle
          cx="2"
          cy="-10"
          r="90"
          fill="rgba(255,255,255,0.03)"
          transform="translate(80, 80)"
        />
        <circle
          cx="570"
          cy="400"
          r="140"
          fill="rgba(255,255,255,0.12)"
          stroke="none"
        />
      </svg>

      {/* Hero Content */}
      <div
        className="relative flex flex-col items-center justify-center text-center mt-10 overflow-hidden"
        style={{ zIndex: 10, padding: "56px 24px 160px", minHeight: "600px" }}
      >
        <h1
          className="font-bold text-white m-0"
          style={{
            fontSize: "50px",
            lineHeight: 1.15,
            letterSpacing: "-0.5px",
            marginBottom: "24px",
          }}
        >
          RemoteRecruit's Difference
        </h1>

        <p
          className="mx-auto m-0"
          style={{
            color: "rgba(255,255,255,0.88)",
            fontSize: "20px",
            maxWidth: "780px",
            lineHeight: 1.8,
          }}
        >
          RemoteRecruit is connecting the world with an easy-to-use platform
          that lets full-time, part-time, and freelance workers showcase their
          talents to businesses that need them. With no paywalls, no fees, and
          no barriers, there's nothing but you, your talents, and the next step
          in your career.
        </p>
      </div>

      {/* Bottom Wave */}
      <div
        className="absolute left-0 w-full pointer-events-none"
        style={{ bottom: "-1px", lineHeight: 0, zIndex: 5 }}
      >
        <svg
          viewBox="0 0 1440 130"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: "130px" }}
        >
          <path
            d="M0,130 L0,30 C180,108 310,130 500,130 C660,130 770,58 980,38 C1140,22 1300,62 1440,130 L1440,130 Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}