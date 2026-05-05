import { motion } from "framer-motion";
import { Sparkles, BadgeDollarSign, Clock } from "lucide-react";
import { WHATSAPP_URL } from "@/data/constants";
import heroImage from "@/assets/bolu-ketan.png";

const badges = [
  { icon: BadgeDollarSign, text: "Harga mulai 5K" },
  { icon: Sparkles, text: "Bahan premium" },
  { icon: Clock, text: "Fresh setiap hari" },
];

export default function Hero() {
  return (
    <section id="home" className="relative gradient-hero overflow-hidden pt-24 pb-16 md:pt-36 md:pb-28">
      {/* Decorative circles */}
      <div className="absolute top-10 right-[-60px] w-48 h-48 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute bottom-10 left-[-40px] w-64 h-64 rounded-full bg-cheese/10 blur-3xl" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-foreground"
          >
            Lembut, Kenyal, Keju Lumer —{" "}
            <span className="text-secondary">Camilan Favorit</span> & Peluang Usaha Menjanjikan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-base md:text-lg text-primary-foreground/85 max-w-xl mx-auto"
          >
            BOLU KETAN KEJU LUMER by Ichi Bread hadir dengan rasa premium, harga terjangkau, dan peluang franchise menguntungkan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl gradient-cheese text-secondary-foreground font-bold text-sm shadow-elevated hover:scale-105 transition-transform"
            >
              🧀 Pesan Sekarang
            </a>
            <a
              href="#waralaba"
              className="px-7 py-3.5 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              Info Waralaba
            </a>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {badges.map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground text-xs font-semibold"
              >
                <b.icon size={14} />
                {b.text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 max-w-md lg:max-w-lg"
        >
          <img
            src={heroImage}
            alt="Bolu ketan keju lumer premium by Ichi Bread dengan topping keju meleleh di atas piring"
            width={1024}
            height={768}
            loading="eager"
            className="rounded-3xl shadow-elevated animate-float"
          />
        </motion.div>
        </div>
      </div>
    </section>
  );
}
