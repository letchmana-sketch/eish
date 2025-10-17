# Architecture Overview

## Frontend
- Next.js for SSR/SSG and API routes
- Tailwind CSS for styling
- Components: Auth, Course pages, Dashboard, Admin console (to be implemented)

## Backend
- Firebase (Auth, Firestore) for user, courses, assignments
- Firebase Admin for server-side operations and scheduled jobs
- Stripe for payments (webhooks via /api/webhooks/stripe)

## Key Extensibility Points
- Video: use Mux or Cloudflare Stream for hosted video + HLS; integrate live via Zoom/BBB.
- Real-time: Firestore real-time listeners for live class chat and presence.
- Assessments: store attempts in Firestore, auto-grade for MCQs, manual for projects.
- Analytics: BigQuery export for learning analytics; use scheduled Cloud Functions.

## Security & Compliance
- Use HTTPS, enforce secure cookies, enable Firebase App Check, add role-based rules in Firestore.
- For GDPR/POPIA: data deletion endpoints, consent logging, export user data tool.

