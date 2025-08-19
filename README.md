# Project Structure - 

```
devtinder/
├── .github/workflows/ci.yml
├── .env.local (never commit)
├── next.config.js
├── package.json
├── public/
│   └── icons, og images
├── src/
│   ├── app/
│   │   ├── (marketing)/            # public pages: landing, pricing, faq
│   │   ├── (auth)/                 # sign-in, callback routes
│   │   ├── (onboarding)/           # multi-step onboarding
│   │   ├── (app)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx            # feed/discovery
│   │   │   ├── profile/
│   │   │   │   ├── [username]/page.tsx
│   │   │   ├── matches/page.tsx
│   │   │   ├── messages/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [threadId]/page.tsx
│   │   │   ├── posts/
│   │   │   │   ├── page.tsx
│   │   │   │   └── new/page.tsx
│   │   │   ├── events/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [eventId]/page.tsx
│   │   │   └── settings/page.tsx
│   │   ├── api/
│   │   │   ├── auth/route.ts        # if using custom auth
│   │   │   ├── users/route.ts
│   │   │   ├── discovery/route.ts
│   │   │   ├── matches/route.ts
│   │   │   ├── messages/route.ts
│   │   │   ├── posts/route.ts
│   │   │   ├── events/route.ts
│   │   │   ├── payments/
│   │   │   │   ├── razorpay/order/route.ts
│   │   │   │   └── razorpay/webhook/route.ts
│   │   │   └── upload/route.ts
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                      # Button, Modal, Avatar, Badge, Sheet
│   │   ├── feed/
│   │   ├── profile/
│   │   ├── chat/
│   │   ├── posts/
│   │   └── events/
│   ├── lib/
│   │   ├── db.ts                    # Prisma/drizzle/mongoose client
│   │   ├── auth.ts                  # Clerk/NextAuth helpers
│   │   ├── payments.ts              # Razorpay SDK wrapper
│   │   ├── validation.ts            # zod schemas
│   │   ├── cache.ts                 # server cache helpers
│   │   ├── search.ts                # search/index utils
│   │   └── logger.ts
│   ├── styles/
│   ├── utils/
│   │   ├── formatting.ts
│   │   └── constants.ts
│   ├── hooks/
│   │   ├── useRealtime.ts
│   │   └── useUpload.ts
│   └── types/
│       └── domain.ts
└── tests/
    ├── e2e/
    └── unit/
```

16-08-2025 => goal
- Set up UI foundation (Tailwind + shadcn/ui + theme)
- Integrate auth baseline (choose Clerk or NextAuth)
- Add DB connection (MongoDB + Mongoose)
- Create minimal User model and validation
- Build onboarding step 1 (username/name) and profile GET/UPDATE API
- Render a mock Discovery page using real layout and components

Task 1 — UI foundation (Tailwind tokens, shadcn/ui, theme provider)
1) Install UI and utilities
- npm install class-variance-authority clsx tailwind-merge lucide-react next-themes

2) Initialize shadcn/ui and add core components
- npx shadcn-ui@latest init
- npx shadcn-ui@latest add button input textarea select checkbox radio-group switch label badge avatar card alert alert-dialog dialog sheet drawer tooltip popover toast separator progress skeleton accordion hover-card scroll-area tabs dropdown-menu navigation-menu command slider

3) Add theme provider and wrap layout
- Create ThemeProvider (next-themes) and add Toast provider in src/app/(app)/layout.tsx

Commit: feat(ui): shadcn components + theme provider + header shell

Task 2 — Choose and set up auth (pick one)

Option A: Clerk (fastest to start)
1) Install
- npm install @clerk/nextjs

2) Set .env.local
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
- CLERK_SECRET_KEY=...

3) Wire up
- Wrap root layout with 
- Create routes in src/app/(auth) for sign-in/sign-up
- Protect (app) group pages with auth helpers

Commit: feat(auth): integrate Clerk and protect app routes

Option B: NextAuth (OSS)
1) Install
- npm install next-auth

2) Suggested providers
- GitHub/Google—add credentials in .env.local

3) Wire up
- Create src/lib/auth.ts for getServerSession
- Add /api/auth/[...nextauth] or app router route
- Use auth in (app)/layout and pages

Commit: feat(auth): integrate NextAuth with OAuth

Task 3 — Database (MongoDB + Mongoose)

1) Install
- npm install mongoose zod react-hook-form

2) DB connection helper
- src/lib/db.ts connectOnce pattern using MONGODB_URI

3) Models folder
- Create src/lib/models/User.ts with minimal schema: username, name, email, avatarUrl, bio, role, skills[], intents[], preferences, premium, timestamps

4) Validation
- src/lib/validation.ts Zod schemas for onboarding/profile update:
  - UserUpsertSchema: { username, name, role?, skills?: string[], intents?: string[] }

5) .env.local
- MONGODB_URI=mongodb+srv://...

Commit: feat(db): mongoose connection + user model + zod schemas

Task 4 — API: profile GET/UPDATE and onboarding step 1

1) Route handlers
- GET /api/users → return current user profile
- PATCH /api/users → validate with zod, upsert basic fields (username, name)

2) Onboarding page (step 1)
- src/app/(onboarding)/page.tsx
- Form: username + name with react-hook-form + zodResolver
- Submit to PATCH /api/users
- On success, redirect to discovery

Commit: feat(onboarding): step 1 and users API GET/PATCH

Task 5 — Discovery page (mocked)
1) src/app/(app)/page.tsx
- Server component shell + a client component that renders 3 mocked profile cards using shadcn Card, Avatar, Button
- Add a Filter drawer (Sheet) with a couple of selects/sliders (static for now)

Commit: feat(discovery): mock cards + filter drawer

Optional (nice to have today)
- Header with ThemeToggle and Profile menu (Dropdown)
- Toast feedback on form submit or errors

All npm commands (copy/paste)

Core UI and utils
- npm install class-variance-authority clsx tailwind-merge lucide-react next-themes
- npx shadcn-ui@latest init
- npx shadcn-ui@latest add button input textarea select checkbox radio-group switch label badge avatar card alert alert-dialog dialog sheet drawer tooltip popover toast separator progress skeleton accordion hover-card scroll-area tabs dropdown-menu navigation-menu command slider

Auth (choose one)
- Clerk:
  - npm install @clerk/nextjs
- NextAuth:
  - npm install next-auth

DB, validation, forms
- npm install mongoose zod react-hook-form

If planning client caching soon (tomorrow)
- npm install @tanstack/react-query

If using Zustand later (for small client store)
- npm install zustand

What to push by EOD
- UI shell working with theme toggle and header
- Auth wired (even if login not fully themed)
- DB connected (no errors on connect)
- User model and GET/PATCH /api/users working
- Onboarding step 1 submits and persists (username/name)
- Discovery page shows mocked cards

If desired, share the repo after Task 4; I can review and provide a focused next-day plan with diffs.