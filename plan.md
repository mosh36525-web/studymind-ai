# StudyMind AI — Phase 1 Plan

## Implementation approach

StudyMind AI is a Next.js 15 App Router web application written in TypeScript. The landing, features, about, authentication, and dashboard routes share a small reusable component system styled with Tailwind CSS utility classes and Shadcn-inspired primitives. Framer Motion provides restrained page and card transitions.

Authentication is wired for Supabase Auth through browser-safe environment variables (`NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`). The client helper stays inert when variables are not configured so the preview can render the product shell without inventing a user session; production setup enables real email/password sign-up and sign-in. Middleware preserves the protected `/dashboard` boundary when Supabase is configured.

The first phase deliberately avoids pricing, payments, subscriptions, or billing. The dashboard uses realistic local presentation data and a lightweight study workspace so the information architecture is usable before persistence and AI orchestration are added in a later phase.

## Project structure

- `app/`: App Router routes, metadata, global CSS, and health endpoint.
- `components/`: reusable marketing navigation, brand mark, auth form, dashboard shell, and Shadcn-style UI primitives.
- `lib/`: Supabase browser client and class-name utility.
- `public/manus-routes.json`: complete route manifest for the managed preview.
- `middleware.ts`: session-aware dashboard boundary with a safe unconfigured preview fallback.
- `.env.example`: required Supabase values for Vercel.

## Design direction

### Alternatives considered

- **0.07 — Editorial study atelier:** warm paper surfaces, serif headlines, and notebook-like panels.
- **0.05 — Neon command center:** high-contrast black canvas, electric gradients, and dense control surfaces.
- **0.06 — Quiet orbital workspace (chosen):** deep navy glass panels, calm cyan-violet signals, and a focused learning cockpit.

### Design Movement

A quiet orbital workspace: a blend of Linear’s precise product language, Notion’s approachable organization, and Framer’s soft motion, translated into a premium student cockpit.

### Core Principles

1. Make focus feel visible: hierarchy, progress, and the next step are always obvious.
2. Use glass as depth, not decoration: layered surfaces separate context without visual noise.
3. Keep AI assistive, not theatrical: the workspace invites a student to think first and ask second.
4. Preserve warmth inside a technical system through friendly copy, rounded geometry, and subtle glow.

### Color Philosophy

The base is an almost-black blue (`#08111f`) that feels calm during long study sessions. A signature cyan (`#5eead4`) signals momentum and clarity; indigo-violet (`#8b5cf6`) marks intelligence and transitions. Warm amber is reserved for streaks and attention, preventing the interface from feeling clinical.

### Layout Paradigm

A narrative rail layout: marketing pages move from a left-aligned proposition into asymmetric proof clusters; the dashboard uses a fixed navigation rail with a flexible workspace column, so the student always knows where they are and what deserves attention.

### Signature Elements

- An orbital brand mark: two intersecting arcs around a bright study spark.
- Thin gradient rule-lines and radial glows that make sections feel connected.
- Compact status chips that turn progress into a calm, glanceable language.

### Interaction Philosophy

Every interactive surface answers one of three questions: Where am I? What changed? What should I do next? Buttons have clear intent, cards reveal affordances on hover, and the dashboard keeps destructive or distracting actions out of the primary flow.

### Animation

Use 160–260ms ease-out transitions for hover, navigation, and chip changes. Use a single 600ms entrance cascade for hero and dashboard content, with small y-offsets and opacity only. Avoid continuous motion except for the ambient orbital glow and the active workspace pulse.

### Typography System

Use Geist Sans for product UI and display hierarchy, with tight tracking on large headlines and relaxed line-height for Arabic copy. Labels are 11–12px uppercase/semibold in Latin microcopy or compact Arabic labels; section titles are 18–28px; the main hero is clamp(3rem, 8vw, 6.8rem) with a narrow measure.

### Brand Essence

StudyMind AI is the calm, free study cockpit for students who want momentum without the overwhelm of another noisy productivity app. **Focused, optimistic, quietly intelligent.**

### Brand Voice

Headlines sound direct and hopeful; CTAs promise a next step, not a fantasy. Example lines: “ذاكر بوضوح. تقدّم بثبات.” and “ابدأ جلسة تركيزك التالية”.

### Wordmark & Logo

The wordmark pairs a custom orbital spark icon with “StudyMind” in a semibold geometric sans. The mark is recognizable at 20px and can stand alone in the dashboard rail.

### Signature Brand Color

`#5EEAD4` — StudyMint, a luminous cyan-green that signals an achievable next step.

## Scalability notes

Phase 1 keeps presentation data local but isolates auth and UI boundaries so a future database layer can replace arrays without changing route composition. A later phase can add Supabase profile, goals, activity, and study-session tables plus streaming AI routes under `app/api` while keeping the current workspace contract stable.
