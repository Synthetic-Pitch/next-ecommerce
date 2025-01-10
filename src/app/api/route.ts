// File: app/api/employees/route.ts

import { NextResponse } from 'next/server';

const employees = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Peter' },
  { id: 4, name: 'Carl' },
  { id: 5, name: 'Matthew' },
  { id: 6, name: 'Sean' },
];

// Handle GET requests
export async function GET() {
  return NextResponse.json({ employees });
}

// Handle POST requests
export async function POST(req: Request) {
  try {
    const body = await req.json();
    employees.push(body); // Simple in-memory update
    return NextResponse.json({ company: employees }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}