import { motion } from "framer-motion";

interface Props {
  name: string;
  description: string;
  label?: string;
  image: string;
}

export default function ProductCard({ name, description, label, image }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="group bg-card rounded-2xl shadow-card hover:shadow-elevated transition-shadow overflow-hidden"
    >
      <div className="relative aspect-[4/3] bg-accent overflow-hidden">
        <img src={image} alt={`Bolu ketan ${name} keju lumer by Ichi Bread`} loading="lazy" width={400} height={300} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        {label && (
          <span
            className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${
              label === "Top Seller"
                ? "gradient-cheese text-secondary-foreground"
                : "bg-primary text-primary-foreground"
            }`}
          >
            {label}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-foreground">{name}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
