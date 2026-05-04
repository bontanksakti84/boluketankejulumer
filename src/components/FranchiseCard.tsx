import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { WHATSAPP_URL } from "@/data/constants";

interface Props {
  name: string;
  price: string;
  highlight?: boolean;
  features: string[];
}

export default function FranchiseCard({ name, price, highlight, features }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-2xl p-6 md:p-8 flex flex-col ${
        highlight
          ? "gradient-hero text-primary-foreground shadow-elevated scale-[1.02]"
          : "bg-card shadow-card"
      }`}
    >
      {highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-cheese text-secondary-foreground text-xs font-bold">
          Paling Populer
        </span>
      )}
      <h3 className={`text-lg font-bold ${highlight ? "" : "text-foreground"}`}>{name}</h3>
      <p className={`mt-2 text-2xl md:text-3xl font-extrabold ${highlight ? "" : "text-primary"}`}>{price}</p>

      <ul className="mt-6 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className={`flex items-start gap-2 text-sm ${highlight ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
            <Check size={16} className={`mt-0.5 shrink-0 ${highlight ? "text-secondary" : "text-primary"}`} />
            {f}
          </li>
        ))}
      </ul>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 block text-center py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90 ${
          highlight
            ? "gradient-cheese text-secondary-foreground"
            : "bg-primary text-primary-foreground"
        }`}
      >
        Hubungi Sekarang
      </a>
    </motion.div>
  );
}
