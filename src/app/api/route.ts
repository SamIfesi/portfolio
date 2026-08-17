import { NextResponse } from 'next/server';

const CONTRIBUTIONS_QUERY = `
  query($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
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

function getCurrentYearRange() {
  const now = new Date();
  const from = new Date(Date.UTC(now.getFullYear(), 0, 1)).toISOString();
  const to = now.toISOString();
  return { from, to };
}

export async function GET() {
  const login = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!login || !token) {
    return NextResponse.json(
      { error: 'Missing GITHUB_USERNAME or GITHUB_TOKEN env var' },
      { status: 500 }
    );
  }

  try {
    const { from, to } = getCurrentYearRange();

    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: CONTRIBUTIONS_QUERY,
        variables: { login, from, to },
      }),
      cache: 'no-store',
    });

    const json = await res.json();

    if (json.errors) {
      console.error('GitHub GraphQL error:', json.errors);
      return NextResponse.json(
        { error: json.errors[0]?.message ?? 'GraphQL error' },
        { status: 400 }
      );
    }

    const calendar = json.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
      return NextResponse.json({ error: 'No contribution data returned' }, { status: 404 });
    }

    return NextResponse.json(calendar);
  } catch (err) {
    console.error('Route handler crashed:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Unknown server error' },
      { status: 500 }
    );
  }
}
