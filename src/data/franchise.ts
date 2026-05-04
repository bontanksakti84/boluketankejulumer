export interface FranchisePackage {
  name: string;
  price: string;
  highlight?: boolean;
  features: string[];
}

export const franchisePackages: FranchisePackage[] = [
  {
    name: "Paket Starter",
    price: "Rp 3.500.000",
    features: [
      "Booth mini portable",
      "Peralatan dasar lengkap",
      "Banner usaha",
      "Bahan baku awal",
      "Panduan operasional",
    ],
  },
  {
    name: "Paket Business",
    price: "Rp 7.500.000",
    highlight: true,
    features: [
      "Booth premium eye-catching",
      "Peralatan lengkap profesional",
      "Training basic produksi",
      "Bahan baku lebih banyak",
      "Marketing kit digital",
      "Support 1 bulan",
    ],
  },
  {
    name: "Paket Sultan",
    price: "Rp 15.000.000",
    features: [
      "Booth eksklusif custom",
      "Full equipment set",
      "Branding support total",
      "Training intensif + konsultasi",
      "Bahan baku komplit",
      "Support 3 bulan",
      "Prioritas area eksklusif",
    ],
  },
];
