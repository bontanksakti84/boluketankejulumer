import { motion } from "framer-motion";
import { WHATSAPP_URL, EMAIL_URL } from "@/data/constants";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 gradient-hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-primary-foreground">
            Mulai Usaha Bolu Ketan Anda{" "}
            <span className="text-secondary">Hari Ini</span>
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-sm md:text-base">
            Hubungi kami sekarang untuk informasi lengkap paket kemitraan dan mulai raih keuntungan bersama Ichi Bread.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl gradient-cheese text-secondary-foreground font-bold text-sm shadow-elevated hover:scale-105 transition-transform"
            >
              💬 WhatsApp Kemitraan
            </a>
            <a
              href={EMAIL_URL}
              className="px-7 py-3.5 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              ✉️ Email Kemitraan
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
