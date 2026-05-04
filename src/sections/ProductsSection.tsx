import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsSection() {
  return (
    <section id="produk" className="py-16 md:py-24 gradient-green-soft">
      <div className="container">
        <div className="text-center max-w-lg mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-primary">Varian Rasa</span>
          <h2 className="mt-3 text-2xl md:text-4xl font-extrabold text-foreground">
            Pilihan Rasa yang <span className="text-gradient">Menggoda</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm md:text-base">
            Setiap varian dibuat dengan bahan pilihan dan keju lumer premium.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
