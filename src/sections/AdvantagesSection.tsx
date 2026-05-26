import { motion } from "framer-motion";
import { Award, Leaf, Clock, BadgeDollarSign, TrendingUp } from "lucide-react";

const items = [
  { icon: Award, title: "Keju Lumer Premium", desc: "Keju berkualitas tinggi yang meleleh sempurna di setiap gigitan." },
  { icon: Leaf, title: "Bahan Pilihan", desc: "Hanya menggunakan bahan-bahan terbaik dan terjamin kualitasnya." },
  { icon: Clock, title: "Fresh Setiap Hari", desc: "Diproduksi fresh setiap hari untuk menjaga kelezatan optimal." },
  { icon: BadgeDollarSign, title: "Harga Terjangkau", desc: "Rasa premium dengan harga yang ramah di kantong mulai 5 ribu." },
  { icon: TrendingUp, title: "Cocok untuk Usaha", desc: "Produk laris dengan margin tinggi, ideal untuk peluang kemitraan." },
];

export default function AdvantagesSection() {
  return (
    <section id="tentang" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-lg mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-primary">Keunggulan</span>
          <h2 className="mt-3 text-2xl md:text-4xl font-extrabold text-foreground">
            Kenapa Pilih <span className="text-gradient">Ichi Bread?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-accent flex items-center justify-center text-primary">
                <item.icon size={24} />
              </div>
              <h3 className="mt-4 font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
