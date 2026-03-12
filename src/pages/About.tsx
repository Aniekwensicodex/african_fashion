import { motion } from "framer-motion";
import aboutImage from "@/assets/about-store.jpg";

const About = () => (
  <main className="pt-24 pb-20">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-3">
          Our Story
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold">About ÀṢÀ Lagos</h1>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={aboutImage} alt="ÀṢÀ Lagos boutique" className="rounded-sm w-full aspect-square object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 line-decoration">
            Heritage Reimagined
          </h2>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
            <p>
              Founded in the vibrant heart of Lagos, ÀṢÀ (meaning "style" in Yoruba) is more than a fashion brand — it's a celebration of African identity through contemporary design.
            </p>
            <p>
              Every garment is handcrafted by skilled Nigerian artisans who pour generations of knowledge into each stitch, each bead, and each weave. We source the finest Ankara, Aso-Oke, and silk fabrics, transforming them into statement pieces that command attention.
            </p>
            <p>
              Our mission is simple: to showcase the beauty of African fashion on the global stage while empowering local craftspeople and preserving the cultural heritage that makes our work unique.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Artisan Craftsmanship", desc: "Every piece is handmade by skilled artisans, ensuring exceptional quality and uniqueness." },
          { title: "Sustainable Fashion", desc: "We champion ethical sourcing and production, supporting local communities and the environment." },
          { title: "Cultural Preservation", desc: "Our designs honour traditional techniques while pushing the boundaries of modern fashion." },
        ].map((value, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-secondary p-8 rounded-sm"
          >
            <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">{value.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </main>
);

export default About;
