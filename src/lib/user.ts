import { Schema, model, models } from 'mongoose';

export interface IUser {
  clerkId: string;
  username: string;
  name: string;
  email: string;
  avatarUrl?: string;
  bio?: string;
  role?: string;
  skills: string[];
  intents: string[];
  location?: string;
  links?: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
  preferences?: {
    distanceKm?: number;
    roles?: string[];
    skills?: string[];
  };
  verified: {
    email: boolean;
    phone: boolean;
    social: boolean;
  };
  premium: {
    active: boolean;
    plan?: string;
    expiresAt?: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  clerkId: { type: String, required: true, unique: true, index: true },
  username: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  avatarUrl: String,
  bio: String,
  role: String,
  skills: { type: [String], default: [], index: true },
  intents: { type: [String], default: [] },
  location: String,
  links: {
    github: String,
    linkedin: String,
    portfolio: String,
  },
  preferences: {
    distanceKm: { type: Number, default: 50 },
    roles: [String],
    skills: [String],
  },
  verified: {
    email: { type: Boolean, default: false },
    phone: { type: Boolean, default: false },
    social: { type: Boolean, default: false },
  },
  premium: {
    active: { type: Boolean, default: false },
    plan: String,
    expiresAt: Date,
  },
}, {
  timestamps: true
});

export default models.User || model<IUser>('User', UserSchema);
