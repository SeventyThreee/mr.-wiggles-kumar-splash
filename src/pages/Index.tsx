import { motion } from "framer-motion";
import titleImg from "@/assets/title.png";
import posterImg from "@/assets/poster.png";
import preview1 from "@/assets/preview1.jpg";
import preview2 from "@/assets/preview2.jpg";
import preview3 from "@/assets/preview3.jpg";
import WaveBackground from "@/components/WaveBackground";
import Bubbles from "@/components/Bubbles";
import ComicBurst from "@/components/ComicBurst";
import RippleButton from "@/components/RippleButton";

const Index = () => {
  const handleDownload = () => {
    window.open("#", "_blank");
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <WaveBackground />
      <Bubbles />

      {/* Comic bursts scattered */}
      <ComicBurst text="SPLASH!" className="top-[15%] left-[3%] hidden md:block" rotate={-15} variant="splash" />
      <ComicBurst text="POW!" className="top-[30%] right-[5%] hidden md:block" rotate={12} />
      <ComicBurst text="KAPOW!" className="top-[60%] left-[2%] hidden lg:block" rotate={-8} />
      <ComicBurst text="SPLASH!" className="bottom-[30%] right-[3%] hidden md:block" rotate={10} variant="splash" />
      <ComicBurst text="WHOOSH!" className="top-[75%] right-[8%] hidden lg:block" rotate={-5} variant="splash" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header / Title */}
        <header className="pt-10 md:pt-16 pb-6 flex justify-center">
          <motion.img
            src={titleImg}
            alt="Mr. Wiggles Kumar"
            className="w-[280px] md:w-[420px] lg:w-[500px] drop-shadow-[0_4px_20px_hsl(0_0%_0%/0.5)] animate-float"
            width={500}
            height={120}
          />
        </header>

        {/* Hero - Poster */}
        <section className="flex justify-center px-4 pb-14">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -1.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Rotating comic star burst */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg
                className="absolute w-[340px] h-[340px] md:w-[460px] md:h-[460px] lg:w-[540px] lg:h-[540px] animate-spin-ring"
                viewBox="0 0 200 200"
                style={{ animationDuration: "20s" }}
              >
                <polygon
                  points={Array.from({ length: 16 }, (_, i) => {
                    const angle = (i * Math.PI * 2) / 16 - Math.PI / 2;
                    const r = i % 2 === 0 ? 98 : 78;
                    return `${100 + r * Math.cos(angle)},${100 + r * Math.sin(angle)}`;
                  }).join(" ")}
                  fill="none"
                  stroke="hsl(45 100% 55%)"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                  opacity="0.6"
                />
              </svg>
              <svg
                className="absolute w-[380px] h-[380px] md:w-[500px] md:h-[500px] lg:w-[580px] lg:h-[580px] animate-spin-ring"
                viewBox="0 0 200 200"
                style={{ animationDuration: "30s", animationDirection: "reverse" }}
              >
                <polygon
                  points={Array.from({ length: 12 }, (_, i) => {
                    const angle = (i * Math.PI * 2) / 12 - Math.PI / 2;
                    const r = i % 2 === 0 ? 98 : 82;
                    return `${100 + r * Math.cos(angle)},${100 + r * Math.sin(angle)}`;
                  }).join(" ")}
                  fill="none"
                  stroke="hsl(3 82% 58%)"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                  opacity="0.4"
                />
              </svg>
            </div>

            {/* Splash corners */}
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-comic-cyan/20 blur-xl" />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-full bg-comic-cyan/15 blur-xl" />

            <img
              src={posterImg}
              alt="Mr. Wiggles Kumar Comic Poster"
              className="w-[300px] md:w-[380px] lg:w-[440px] comic-border-thick rounded-sm"
              width={440}
              height={620}
            />

            {/* Download button overlaid at bottom of poster */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20">
              <RippleButton onClick={handleDownload}>
                ⬇ Download Comic
              </RippleButton>
            </div>
          </motion.div>
        </section>

        {/* Preview Strip */}
        <section className="px-4 pb-16">
          <motion.h2
            className="font-comic text-secondary text-center text-3xl md:text-4xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textShadow: "3px 3px 0 hsl(0 0% 0%)" }}
          >
            Sneak Peek
          </motion.h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-5xl mx-auto">
            {[
              { src: preview1, rotate: -3, delay: 0 },
              { src: preview2, rotate: 2, delay: 0.15 },
              { src: preview3, rotate: -1.5, delay: 0.3 },
            ].map((panel, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: panel.delay, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                style={{ rotate: `${panel.rotate}deg` }}
              >
                <img
                  src={panel.src}
                  alt={`Preview panel ${i + 1}`}
                  className="w-[220px] md:w-[240px] lg:w-[260px] comic-border rounded-sm"
                  loading="lazy"
                  width={260}
                  height={325}
                />
                {/* Ripple on hover */}
                <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-comic-cyan/50 group-hover:animate-[ripple_1s_ease-out_infinite]" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-10 text-center border-t border-border/30">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-comic-cyan/40 to-transparent" />
          <p className="font-comic-body text-muted-foreground text-lg mb-2">
            A comic by <span className="text-secondary font-bold">Jeevakrishna Vetrivel</span> :)
          </p>
          <p
            className="font-comic text-comic-cyan text-2xl tracking-wide"
            style={{ textShadow: "0 0 15px hsl(190 80% 50% / 0.4)" }}
          >
            To be continued…
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
