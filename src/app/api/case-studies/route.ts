import { NextResponse } from 'next/server';

import { getCaseStudies } from '@/services/contentful';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const skipParam = searchParams.get('skip');
  const limitParam = searchParams.get('limit');

  if (skipParam && isNaN(skipParam as unknown as number)) {
    return NextResponse.json(
      { message: '`skip` param is not a valid number' },
      { status: 400 },
    );
  }

  if (limitParam && isNaN(limitParam as unknown as number)) {
    return NextResponse.json(
      { message: "'limit' param is not a valid number" },
      { status: 400 },
    );
  }

  const skip = skipParam ? parseInt(skipParam, 10) : undefined;
  const limit = limitParam ? parseInt(limitParam, 10) : undefined;
  const data = await getCaseStudies({
    skip,
    limit,
  });

  return NextResponse.json(data);
}
