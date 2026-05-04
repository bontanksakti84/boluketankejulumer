import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Props {
  name: string;
  role: string;
  text: string;
}

export default function TestimonialCard({ name, role, text }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl p-6 shadow-card"
    >
      <div className="flex gap-1 text-cheese mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="currentColor" />
        ))}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed italic">"{text}"</p>
      <div className="mt-4">
        <p className="font-bold text-foreground text-sm">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </motion.div>
  );
}
