import { motion } from "framer-motion";

const Bubbles = () => {
  const bubbles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: 4 + Math.random() * 12,
    delay: Math.random() * 10,
    duration: 6 + Math.random() * 8,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full border border-comic-cyan/30 bg-comic-cyan/10 animate-bubble"
          style={{
            left: b.left,
            bottom: "-20px",
            width: b.size,
            height: b.size,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Bubbles;
