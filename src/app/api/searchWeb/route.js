// src/app/api/searchWeb/route.js

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get('searchTerm');
  const start = searchParams.get('start') || '1';

  // Example: Replace with your real search logic or external API fetch
  if (!searchTerm) {
    return new Response(JSON.stringify({ error: 'searchTerm is required' }), { status: 400 });
  }

  // Dummy response for testing
  const dummyResults = {
    items: [
      { title: `Result 1 for ${searchTerm}`, link: '#' },
      { title: `Result 2 for ${searchTerm}`, link: '#' },
    ],
  };

  return new Response(JSON.stringify(dummyResults), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
