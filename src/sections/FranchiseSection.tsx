import FranchiseCard from "@/components/FranchiseCard";
import { franchisePackages } from "@/data/franchise";

export default function FranchiseSection() {
  return (
    <section id="waralaba" className="py-16 md:py-24 gradient-green-soft">
      <div className="container">
        <div className="text-center max-w-lg mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-primary">Waralaba</span>
          <h2 className="mt-3 text-2xl md:text-4xl font-extrabold text-foreground">
            Paket Franchise <span className="text-gradient">Terjangkau</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm md:text-base">
            Mulai usaha bolu ketan Anda dengan modal terjangkau dan support penuh dari tim kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-start">
          {franchisePackages.map((pkg) => (
            <FranchiseCard key={pkg.name} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
