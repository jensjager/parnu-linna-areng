// This is a mock endpoint for sectors since the real table doesn't exist in Supabase
import { NextResponse } from 'next/server';

// Mock sectors data based on the valdkond values from the database
export const sectors = [
  { id: 1, nimi: 'Rahvastiku areng' },
  { id: 2, nimi: 'Looduskeskkond' },
  { id: 3, nimi: 'Kultuur' },
  { id: 4, nimi: 'Sport' },
  { id: 5, nimi: 'Ettevõtlus' },
  { id: 6, nimi: 'Elukeskkond' },
  { id: 7, nimi: 'Avalikud teenused' },
  { id: 8, nimi: 'Haridus' },
  { id: 9, nimi: 'Muu' }
];

export async function GET() {
  return NextResponse.json(sectors);
}
