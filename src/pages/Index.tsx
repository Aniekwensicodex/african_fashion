import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Gem } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const Index = () => {
  const featuredProducts = products.slice(0, 3);

  return ( 
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="ÀṢÀ Lagos luxury fashion" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              Luxury African Fashion
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Where Heritage Meets Elegance
            </h1>
            <p className="text-white font-body text-lg leading-relaxed mb-8 max-w-md">
              Discover handcrafted fashion pieces that celebrate the beauty and richness of African culture, designed for the modern world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="gold-gradient text-white font-body text-sm tracking-widest uppercase px-8 py-4 rounded-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Shop Collection <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="border border-gold text-white font-body text-sm tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-background/10 transition-colors text-center"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Gem, title: "Handcrafted Quality", desc: "Every piece meticulously crafted by skilled Nigerian artisans" },
              { icon: Truck, title: "Nationwide Delivery", desc: "Swift delivery across Nigeria within 3-5 business days" },
              { icon: Shield, title: "Secure Payments", desc: "Pay safely via bank transfer, card, or pay on delivery" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="text-center py-6"
              >
                <feature.icon className="mx-auto mb-4 text-gold" size={32} />
                <h3 className="font-display text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-3">
              Curated Selection
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Featured Pieces
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} {...product} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase border-b-2 border-gold text-white pb-1 hover:text-gold transition-colors"
            >
              View Full Collection <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Ready to Elevate Your Style?
            </h2>
            <p className="text-primary-foreground/70 font-body text-lg mb-8 max-w-lg mx-auto">
              Chat with us on WhatsApp for personalized styling advice and exclusive offers.
            </p>
            <a
              href="https://wa.me/2348000000000?text=Hello%20ÀṢÀ%20Lagos!%20I'd%20like%20styling%20advice."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gold-gradient text-foreground font-body text-sm tracking-widest uppercase px-10 py-4 rounded-sm hover:opacity-90 transition-opacity"
            >
              Chat on WhatsApp <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
