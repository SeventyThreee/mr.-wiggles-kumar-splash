import { useState } from "react";
import { motion } from "framer-motion";

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const RippleButton = ({ children, onClick, className = "" }: RippleButtonProps) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 800);
    onClick?.();
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`relative overflow-hidden font-comic text-2xl md:text-3xl px-10 py-5 rounded-lg bg-primary text-primary-foreground comic-border-thick cursor-pointer ${className}`}
      whileHover={{ scale: 1.08, boxShadow: "0 0 40px hsl(3 82% 58% / 0.6)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {/* Spinning ring */}
      <div className="absolute inset-[-8px] rounded-xl border-2 border-dashed border-comic-yellow/60 animate-spin-ring pointer-events-none" />
      
      <span className="relative z-10">{children}</span>

      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-comic-cyan/40 animate-[ripple_0.8s_ease-out]"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}
    </motion.button>
  );
};

export default RippleButton;
