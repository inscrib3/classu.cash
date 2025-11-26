# classu.cash

Lightweight demo site explaining Cashu (privacy-preserving digital cash using blind signatures).

This repository contains a small Next.js demo app that visualizes the three main phases of a Cashu token lifecycle: Minting, Transfer, and Redemption. The interactive page (`app/page.tsx`) uses simple animations and icons to explain the flow between Alice, Bob (the mint operator), and Carol.

**Quick Links**
- **Website** [https://classu.cash](https://classu.cash)
- **Onepage:** `app/page.tsx`
- **Styles:** `app/globals.css`
- **Config:** `next.config.ts`, `tsconfig.json`

**Tech / Libraries**
- Next.js (App Router)
- React
- Tailwind CSS (for utility styles)
- `lucide-react` for icons

**What this demo shows**
- Phase 1 — Minting: Alice creates a secret, blinds it, Bob signs the blinded secret and Alice unblinds to obtain a token.
- Phase 2 — Transfer: Alice transfers the token privately to Carol (off-chain).
- Phase 3 — Redemption: Carol redeems the token with Bob, Bob checks the spent database and pays Carol, without linking the token back to Alice.

Why: This app is meant as a visual, educational explainer for Cashu-style blind-signature digital cash.

Getting started (development)

Run the following in your terminal (zsh):

```zsh
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

Build for production

```zsh
npm run build
npm start
```

Where to edit
- The main interactive page is `app/page.tsx` — animations and step content live there.
- Global styles are in `app/globals.css`.
- Tailwind / PostCSS config is available in `postcss.config.mjs`.

Notes for contributors
- Keep UI changes small and self-contained. The demo is focused on clear visuals and short copy.
- If you add UI images or assets, place them in a new `public/` folder.

Credits
- Powered with ❤️ by [@warlockbtc](https://x.com/warlockbtc), [@chefpino_](https://x.com/chefpino_), and [@mauropili](https://x.com/mauropili).

License
- This project is released under the MIT License — see the `LICENSE` file.

Next steps (suggested)
- Add unit/integration tests for components.
- Extract animated steps into small components for reuse.
- Add localized copy for multiple languages.
- Nuts, nuts, nuts

