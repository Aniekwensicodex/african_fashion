import { Link } from "react-router-dom";
import { Instagram, MessageCircle, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="font-display text-2xl font-bold mb-4">
            <span className="text-gold">ÀṢÀ</span> LAGOS
          </h3>
          <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
            Where African heritage meets contemporary elegance. Handcrafted luxury fashion from the heart of Lagos.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Collection" },
              { to: "/about", label: "Our Story" },
              { to: "/contact", label: "Contact Us" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-primary-foreground/70 text-sm hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Connect With Us</h4>
          <div className="flex gap-4 mb-4">
            <a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-gold transition-colors" aria-label="WhatsApp">
              <MessageCircle size={20} />
            </a>
            <a href="mailto:hello@asalagos.com" className="text-primary-foreground/70 hover:text-gold transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-primary-foreground/70 text-sm">
            Victoria Island, Lagos, Nigeria
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-8 text-center">
        <p className="text-primary-foreground/50 text-xs tracking-widest uppercase">
          © 2026 ÀṢÀ Lagos. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
