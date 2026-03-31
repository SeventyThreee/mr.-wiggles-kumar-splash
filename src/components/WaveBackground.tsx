const WaveBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Wave layer 1 */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] animate-wave opacity-20"
        height="200"
        viewBox="0 0 2880 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C480,200 960,0 1440,100 C1920,200 2400,0 2880,100 L2880,200 L0,200 Z"
          fill="hsl(190 80% 50%)"
        />
      </svg>
      {/* Wave layer 2 */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] animate-wave opacity-10"
        style={{ animationDelay: "-4s", animationDuration: "16s" }}
        height="160"
        viewBox="0 0 2880 160"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 C480,160 960,0 1440,80 C1920,160 2400,0 2880,80 L2880,160 L0,160 Z"
          fill="hsl(190 80% 40%)"
        />
      </svg>
      {/* Top drips */}
      {[10, 25, 55, 78, 92].map((left, i) => (
        <div
          key={i}
          className="absolute top-0 w-1 bg-comic-cyan/30 rounded-b-full animate-drip"
          style={{
            left: `${left}%`,
            height: "40px",
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${3 + i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default WaveBackground;
