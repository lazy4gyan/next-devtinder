import { z } from 'zod';

export const UserUpsertSchema = z.object({
  username: z.string().min(3).max(20).regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  name: z.string().min(2).max(50),
  bio: z.string().max(500).optional(),
  role: z.string().max(100).optional(),
  skills: z.array(z.string()).max(20).optional(),
  intents: z.array(z.string()).max(10).optional(),
  location: z.string().max(100).optional(),
  links: z.object({
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    portfolio: z.string().url().optional(),
  }).optional(),
});

export const OnboardingStepOneSchema = z.object({
  username: z.string().min(3).max(20).regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  name: z.string().min(2).max(50),
});

export type UserUpsertInput = z.infer<typeof UserUpsertSchema>;
export type OnboardingStepOneInput = z.infer<typeof OnboardingStepOneSchema>;
