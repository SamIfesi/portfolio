// src/app/api/route.ts
import { NextResponse } from 'next/server';

const QUERY = `
  query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  const login = process.env.GITHUB_USERNAME;

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: QUERY, variables: { login } }),
    // "no-store" tells Next.js's fetch cache to always hit GitHub fresh
    // rather than caching this route's output indefinitely.
    cache: 'no-store',
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: 'GitHub API request failed' },
      { status: res.status }
    );
  }

  const json = await res.json();
  const calendar =
    json?.data?.user?.contributionsCollection?.contributionCalendar;

  if (!calendar) {
    return NextResponse.json(
      { error: 'No contribution data' },
      { status: 404 }
    );
  }

  return NextResponse.json(calendar);
}
