import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-lg mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-primary">Testimoni</span>
          <h2 className="mt-3 text-2xl md:text-4xl font-extrabold text-foreground">
            Apa Kata <span className="text-gradient">Mereka?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
