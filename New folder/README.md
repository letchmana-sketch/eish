# Teaching & Learning Platform — Prototype

This repository is a ready-to-upload scaffold for a teaching & learning platform (Next.js + Firebase + Tailwind).  
It focuses on core architecture and files you can expand. It **is not** a complete production app but is deployable and intended as a solid starter kit.

## What's included
- Next.js app (pages/ + components/)
- Firebase integration (Auth + Firestore) — initial config placeholder
- Tailwind CSS setup
- Minimal course CRUD, roles, auth flows
- Placeholders for Payments (Stripe), Video/Live class integration, and analytics
- Dockerfile and GitHub Actions CI for deploy (example)
- `README` with local setup and deploy steps

## Quick start (local)
1. Clone repo
2. `cd teaching-platform-prototype`
3. Copy `.env.example` → `.env.local` and fill values (NEXT_PUBLIC_FIREBASE_*, FIREBASE_PRIVATE_KEY, STRIPE_*)
4. `npm install`
5. `npm run dev`
6. Open http://localhost:3000

## Deploy
- Works with Vercel (recommended) or Docker (see Dockerfile)
- For production, set environment variables in your hosting provider and configure Firebase project & Stripe.

## License
MIT
