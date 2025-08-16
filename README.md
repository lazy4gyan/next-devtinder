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