import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const categories = ["All", "Women's Wear", "Men's Wear", "Accessories", "Men's Accessories"];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-3">
            Our Collection
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            The ÀṢÀ Collection
          </h1>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Each piece tells a story of African heritage, crafted with love and precision in Lagos.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-xs tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all ${
                activeCategory === cat
                  ? "gold-gradient text-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} {...product} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
