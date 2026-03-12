# ÀṢÀ Lagos - Luxury African Fashion 🇳🇬


**Where Heritage Meets Elegance**  
Handcrafted luxury fashion celebrating African culture, designed for the modern world. Based in Lagos, Nigeria. Discover vibrant Ankara dresses, embroidered suits, artisan accessories – all meticulously crafted by skilled Nigerian artisans.

Live Demo: [View Site](http://localhost:5173) (run `npm run dev`)

## ✨ Features

- **Elegant Hero Section**: Fullscreen banner with brand story and CTAs (Shop Collection, Our Story).
- **Featured Products Grid**: Curated selection with smooth animations (Framer Motion).
- **Products Catalog**: Filter by category (Women's Wear, Men's Wear, Accessories), responsive grid, detailed cards.
- **Responsive Navigation**: Fixed navbar with mobile hamburger menu, active states, WhatsApp order button.
- **Modern UI/UX**: shadcn/ui components, TailwindCSS, dark mode-ready, gold gradient accents.
- **Performance**: Vite fast builds, React Router, Tanstack Query for data.
- **WhatsApp Integration**: Floating button + nav CTAs for quick customer chats (Nigeria-focused).
- **SEO-Friendly**: Meta tags, alt texts, semantic HTML.
- **Mobile-First**: Fully responsive across devices.

## 🛠️ Quick Start

```bash
# Clone the repo
git clone <your-repo-url> african-fashion
cd african-fashion

# Install dependencies (npm or bun)
npm install
# or
bun install

# Start development server (localhost:5173)
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) and explore!

## 📁 Project Structure

```
african_fashion/
├── public/                 # Static assets (favicon, robots.txt)
├── src/
│   ├── assets/             # Images (hero, products)
│   ├── components/         # Navbar, Footer, ProductCard, shadcn/ui/
│   ├── hooks/              # Custom hooks (mobile, toast)
│   ├── lib/                # utils.ts, products.ts (sample data)
│   ├── pages/              # Index.tsx (home), Products.tsx, About.tsx, etc.
│   ├── App.tsx             # Router + Providers
│   └── main.tsx            # Entry point
├── package.json            # Scripts & deps
├── tailwind.config.ts      # Custom themes (gold gradients)
├── vite.config.ts          # Vite config
└── README.md               # You're reading it!
```

## 🔧 Tech Stack

| Category | Technologies |
|----------|--------------|
| Framework | Vite, React 18, TypeScript 5.8 |
| Styling | TailwindCSS 3.4, shadcn/ui, Framer Motion (animations) |
| Routing/State | React Router, Tanstack Query |
| UI/Icons | Lucide React, Sonner (toasts) |
| Utils | class-variance-authority, clsx, Zod |
| Testing | Vitest, Testing Library |
| Other | React Hook Form, Embla Carousel (ready for sliders) |

## 🚀 Deployment

1. Build: `npm run build` (outputs to `dist/`).
2. Deploy static files to:
   - [Vercel](https://vercel.com) (auto-deploys from GitHub)
   - [Netlify](https://netlify.com)
   - [GitHub Pages](https://pages.github.com)
   - Any static host.

For custom domains or e-commerce (add cart/checkout): Integrate Stripe/Paystack for ₦ payments.

**Lovable.dev users**: Publish via Share → Publish in your project dashboard.

## 📱 Product Catalog (Sample)

| Name | Category | Price | Description |
|------|----------|-------|-------------|
| Ankara Blossom Wrap Dress | Women's Wear | ₦45,000 | Vibrant print with butterfly sleeves |
| Royal Heritage Bead Set | Accessories | ₦28,000 | Yoruba-inspired necklace + earrings |
| Lagos Elite Suit | Men's Wear | ₦85,000 | Tailored with embroidered lapels |
| Artisan Raffia Tote | Accessories | ₦32,000 | Hand-woven with leather trim |
| Silk Ìrísí Kaftan | Women's Wear | ₦62,000 | Flowing jewel tones |
| Embroidered Fila & Shoe Set | Men's Accessories | ₦38,000 | For celebrations |

Data in `src/lib/products.ts` – extend for real backend/API.

## 🤝 Contributing

1. Fork & clone.
2. Create feature branch: `git checkout -b feature/amazing`.
3. Commit: `git commit -m "feat: add amazing"`.
4. Push & PR.

Questions? [WhatsApp us](https://wa.me/2348028277607) or open an issue.

## 📄 License

MIT License – see [LICENSE](LICENSE) (add one if needed).

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/), [shadcn/ui](https://ui.shadcn.com/)
- Assets: Custom African fashion photography
- Inspired by Nigerian artisan craftsmanship

---

⭐ Star on GitHub if you love African fashion! #AfricanFashion #LagosStyle #HeritageElegance
