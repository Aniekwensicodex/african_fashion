import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold mb-6 line-decoration text-white">
              Visit Our Boutique
            </h2>
            <div className="space-y-6 mb-8">
              {[
                { icon: MapPin, label: "Address", value: "15 Admiralty Way, Victoria Island, Lagos, Nigeria" },
                { icon: Phone, label: "Phone", value: "+234 800 000 0000" },
                { icon: Mail, label: "Email", value: "hello@asalagos.com" },
                { icon: Clock, label: "Hours", value: "Mon – Sat: 10AM – 7PM" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <item.icon className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-body text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/2348000000000?text=Hello%20ÀṢÀ%20Lagos!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-primary-foreground font-body text-sm tracking-wider px-6 py-3 rounded-sm hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-seco p-8 rounded-sm space-y-6">
              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">Message</label>
                <textarea
                  rows={5}
                  required
                  className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full gold-gradient text-foreground font-body text-sm tracking-widest uppercase py-4 rounded-sm hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
