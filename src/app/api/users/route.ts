import { NextRequest, NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import connectDB from '@/lib/db';
import User from '@/lib/user';
import { UserUpsertSchema } from '@/lib/validation';

export async function GET() {
  try {
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const dbUser = await User.findOne({ clerkId: user.id });
    
    if (!dbUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(dbUser);
  } catch (error) {
    console.error('GET /api/users error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = UserUpsertSchema.parse(body);

    await connectDB();
    
    const dbUser = await User.findOneAndUpdate(
      { clerkId: user.id },
      {
        ...validatedData,
        email: user.emailAddresses[0]?.emailAddress,
        avatarUrl: user.imageUrl,
        verified: { email: true, phone: false, social: false },
      },
      { 
        upsert: true, 
        new: true,
        runValidators: true 
      }
    );

    return NextResponse.json(dbUser);
  } catch (error) {
    console.error('PATCH /api/users error:', error);
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json({ error: 'Validation failed', details: error }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
