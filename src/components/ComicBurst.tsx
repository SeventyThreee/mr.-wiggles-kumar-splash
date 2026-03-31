import { motion } from "framer-motion";

interface ComicBurstProps {
  text: string;
  className?: string;
  rotate?: number;
  variant?: "splash" | "pow";
}

const ComicBurst = ({ text, className = "", rotate = 0, variant = "pow" }: ComicBurstProps) => {
  const isSplash = variant === "splash";

  return (
    <motion.div
      className={`absolute font-comic select-none pointer-events-none ${className}`}
      style={{ rotate: `${rotate}deg` }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div
        className={`relative px-4 py-2 text-2xl md:text-3xl lg:text-4xl font-bold ${
          isSplash
            ? "text-comic-cyan drop-shadow-[0_0_10px_hsl(190_80%_50%/0.5)]"
            : "text-comic-yellow drop-shadow-[0_2px_0_hsl(0_0%_0%)]"
        }`}
        style={{
          textShadow: isSplash
            ? "0 0 20px hsl(190 80% 50% / 0.6), 2px 2px 0 hsl(0 0% 0%)"
            : "3px 3px 0 hsl(0 0% 0%), -1px -1px 0 hsl(0 0% 0%)",
        }}
      >
        {text}
      </div>
    </motion.div>
  );
};

export default ComicBurst;
