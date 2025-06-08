export const dynamic = 'force-dynamic';

import ImageSearchResults from '@/app/components/ImageSearchResults';
import Link from 'next/link';

export default async function ImageSearchPage({ searchParams }) {
  const startIndex = searchParams?.start || '1';
  const searchTerm = searchParams?.searchTerm;

  if (!searchTerm) {
    return (
      <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>No search term provided</h1>
        <p className='text-lg'>
          Try searching again from{' '}
          <Link href='/' className='text-blue-500'>Home</Link>
        </p>
      </div>
    );
  }

  if (!process.env.API_KEY || !process.env.CONTEXT_KEY) {
    throw new Error('Missing API_KEY or CONTEXT_KEY in environment variables');
  }

  try {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}&searchType=image&start=${startIndex}`,
    { cache: 'no-store' }
  );

  if (!response.ok) {
    console.error('Google API response not OK', response.statusText);
    throw new Error('Something went wrong');
  }

  const data = await response.json();
  const results = data.items;

  if (!results || results.length === 0) {
    return (
      <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>No results found for "{searchTerm}"</h1>
        <p className='text-lg'>
          Try searching something else <Link href='/' className='text-blue-500'>Home</Link>
        </p>
      </div>
    );
  }

  return <ImageSearchResults results={data} />;
} catch (error) {
  console.error('Fetch failed:', error);
  return (
    <div className='flex flex-col justify-center items-center pt-10'>
      <h1 className='text-3xl mb-4'>Error loading images</h1>
      <p className='text-lg'>
        Please try again later. <Link href='/' className='text-blue-500'>Home</Link>
      </p>
    </div>
  );
}

}
