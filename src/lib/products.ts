import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Ankara Blossom Wrap Dress",
    price: "₦45,000",
    category: "Women's Wear",
    image: product1,
    description: "Vibrant Ankara print wrap dress with butterfly sleeves. Handcrafted for the modern African woman.",
  },
  {
    id: "2",
    name: "Royal Heritage Bead Set",
    price: "₦28,000",
    category: "Accessories",
    image: product2,
    description: "Hand-strung multi-layered bead necklace with matching earrings. Inspired by Yoruba royalty.",
  },
  {
    id: "3",
    name: "Lagos Elite Suit",
    price: "₦85,000",
    category: "Men's Wear",
    image: product3,
    description: "Tailored navy suit with traditional embroidered lapels. Modern sophistication meets African heritage.",
  },
  {
    id: "4",
    name: "Artisan Raffia Tote",
    price: "₦32,000",
    category: "Accessories",
    image: product4,
    description: "Hand-woven raffia tote with premium leather trim. Sustainably crafted in Lagos.",
  },
  {
    id: "5",
    name: "Silk Ìrísí Kaftan",
    price: "₦62,000",
    category: "Women's Wear",
    image: product5,
    description: "Flowing silk kaftan in vivid jewel tones. A statement piece for occasions and celebrations.",
  },
  {
    id: "6",
    name: "Embroidered Fila & Shoe Set",
    price: "₦38,000",
    category: "Men's Accessories",
    image: product6,
    description: "Hand-embroidered traditional cap with matching shoes. Perfect for owambe celebrations.",
  },
];
