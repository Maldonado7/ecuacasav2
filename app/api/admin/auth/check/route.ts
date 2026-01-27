import { NextResponse } from 'next/server';
import { validateAdminSession } from '@/lib/supabase/admin';

export async function GET() {
  const user = await validateAdminSession();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return NextResponse.json({ authenticated: true, email: user.email });
}
