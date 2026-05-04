import imgKetanHitam from "@/assets/product-ketan-hitam.jpg";
import imgPandan from "@/assets/product-pandan.jpg";
import imgKetanPandan from "@/assets/product-ketan-pandan.jpg";
import imgRedVelvet from "@/assets/product-red-velvet.jpg";
import imgCoklat from "@/assets/product-coklat.jpg";
import imgMilo from "@/assets/product-milo.jpg";

export interface Product {
  name: string;
  description: string;
  label?: "Top Seller" | "New";
  image: string;
}

export const products: Product[] = [
  {
    name: "Ketan Hitam",
    description: "Perpaduan ketan hitam legit dengan keju lumer yang creamy. Rasa tradisional, sensasi modern.",
    label: "Top Seller",
    image: imgKetanHitam,
  },
  {
    name: "Pandan",
    description: "Aroma pandan wangi dengan tekstur bolu lembut dan topping keju lumer yang menggoda.",
    label: "Top Seller",
    image: imgPandan,
  },
  {
    name: "Ketan Pandan",
    description: "Kombinasi ketan kenyal dan pandan harum, dilengkapi keju lumer premium.",
    image: imgKetanPandan,
  },
  {
    name: "Red Velvet",
    description: "Tampilan cantik merah beludru dengan rasa lembut dan keju lumer yang meleleh sempurna.",
    label: "New",
    image: imgRedVelvet,
  },
  {
    name: "Coklat",
    description: "Bolu coklat rich dan decadent dengan lelehan keju yang bikin nagih.",
    image: imgCoklat,
  },
  {
    name: "Milo",
    description: "Rasa milo khas yang disukai semua kalangan, dengan sentuhan keju lumer spesial.",
    label: "New",
    image: imgMilo,
  },
];
