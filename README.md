# StudyMind AI — Phase 1

StudyMind AI is a free-first AI learning workspace for students. Phase 1 ships the product shell, Arabic RTL experience, Supabase Auth wiring, and a polished dashboard foundation without pricing, payments, or subscription features.

## Included

The App Router contains the landing page (`/`), features (`/features`), about (`/about`), login (`/login`), register (`/register`), and protected dashboard (`/dashboard`). The dashboard includes a responsive sidebar and navbar, user profile surface, progress metrics, weekly chart, goals, study workspace, and recent activity.

The visual system uses Tailwind CSS, reusable Shadcn-style primitives, Framer Motion transitions, a dark glassmorphism palette, StudyMint accents, and RTL Arabic copy. Presentation data is intentionally local in Phase 1; the UI boundaries are ready for future Supabase tables and streaming AI routes.

## Local development

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Set these values in `.env.local` or Vercel Project Settings:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

In Supabase, enable Email provider under **Authentication → Providers → Email**. If email confirmation is enabled, new users see a confirmation message before signing in. The dashboard middleware checks the Supabase session when both public environment variables are configured; an unconfigured local preview renders the product shell without fabricating an authenticated session.

## Quality checks

```bash
pnpm exec tsc --noEmit
pnpm build
```

`/api/health` returns a small unauthenticated readiness response. `public/manus-routes.json` declares the complete user-facing route set for managed preview tooling.

## Vercel deployment

Import the repository into Vercel, keep the framework preset as **Next.js**, add the two `NEXT_PUBLIC_SUPABASE_*` variables, and deploy. Vercel will use the existing `pnpm-lock.yaml` and Next.js build script automatically. Add the deployed callback URL to Supabase under **Authentication → URL Configuration** if you later add OAuth providers.

## Product boundary

This release is completely free. There is no pricing page, payment integration, billing flow, or subscription entitlement logic. The next scalable step is to add Supabase profile, goals, activity, and study-session tables plus a server-side AI route while preserving the current component contracts.
