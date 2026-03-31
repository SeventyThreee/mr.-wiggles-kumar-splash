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
        <section className="flex justify-center px-4 pb-8">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -1.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
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
          </motion.div>
        </section>

        {/* CTA */}
        <section className="flex flex-col items-center gap-4 pb-12 px-4">
          <motion.p
            className="font-comic text-secondary text-xl md:text-2xl tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ textShadow: "2px 2px 0 hsl(0 0% 0%)" }}
          >
            READ NOW!
          </motion.p>
          <RippleButton onClick={handleDownload}>
            ⬇ Download Comic
          </RippleButton>
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
