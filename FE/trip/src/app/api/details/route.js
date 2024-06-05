import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const contentid = searchParams.get('contentid');
  const contenttypeid = searchParams.get('contenttypeid');

  if (!contentid || !contenttypeid) {
    return NextResponse.json({ error: 'Missing query parameters' }, { status: 400 });
  }

  // Replace with your actual data fetching logic
  const details = {
    contentid,
    contenttypeid,
    details: `Details for content ID ${contentid} and content type ID ${contenttypeid}`
  };

  return NextResponse.json(details);
}
