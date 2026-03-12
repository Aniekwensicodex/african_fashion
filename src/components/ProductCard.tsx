import { motion } from "framer-motion";
import { MessageCircle, CreditCard } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  category: string;
  index?: number;
}

const ProductCard = ({ image, name, price, category, index = 0 }: ProductCardProps) => {
  const handlePayNow = () => {
    toast.success("Payment gateway coming soon! For now, order via WhatsApp.");
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ÀṢÀ Lagos! I'd like to order: ${name} (${price})`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-sm mb-4">
        <img
          src={image}
          alt={name}
          className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex gap-2">
          <a
            href={`https://wa.me/2348000000000?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-primary-foreground py-3 rounded-sm text-sm font-body tracking-wider hover:bg-green-700 transition-colors"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <button
            onClick={handlePayNow}
            className="flex-1 flex items-center justify-center gap-2 gold-gradient text-foreground py-3 rounded-sm text-sm font-body tracking-wider hover:opacity-90 transition-opacity"
          >
            <CreditCard size={16} />
            Pay Now
          </button>
        </div>
      </div>
      <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1 font-body">
        {category}
      </p>
      <h3 className="font-display text-lg font-medium mb-1 text-white">{name}</h3>
      <p className="text-gold font-body font-semibold">{price}</p>
    </motion.div>
  );
};

export default ProductCard;
