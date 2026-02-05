import { NextResponse } from 'next/server';

/**
 * Contact endpoint prepared for serverless/Supabase integration.
 * Required env variables:
 * - SUPABASE_URL
 * - SUPABASE_SERVICE_ROLE_KEY
 */
export async function POST(request) {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  // Future integration point (example): insert into Supabase table or trigger notification.
  // Keeping response deterministic for production-ready front-end integration.
  return NextResponse.json({ ok: true, receivedAt: new Date().toISOString() }, { status: 200 });
}
