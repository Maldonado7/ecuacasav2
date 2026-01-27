import { NextResponse } from 'next/server';
import { validateAdminSession } from './admin';

/**
 * Validates admin session for API routes.
 * Returns null if authorized, or a NextResponse 401 if not.
 */
export async function requireAdmin(): Promise<NextResponse | null> {
  const user = await validateAdminSession();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return null;
}
