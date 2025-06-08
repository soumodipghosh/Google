'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import WebSearchResults from '@/app/components/WebSearchResults';
import Link from 'next/link';

export default function WebSearchClient() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const startIndex = searchParams.get('start') || '1';

  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchResults() {
      try {
        const response = await fetch(
          `/api/searchWeb?searchTerm=${searchTerm}&start=${startIndex}`
        );
        if (!response.ok) throw new Error('Something went wrong');
        const data = await response.json();
        setResults(data.items);
      } catch (err) {
        setError(err.message);
      }
    }

    if (searchTerm) fetchResults();
  }, [searchTerm, startIndex]);

  if (error) {
    return (
      <div className='text-center pt-10'>
        <h1 className='text-3xl mb-4'>Error: {error}</h1>
        <Link href='/' className='text-blue-500'>Go Home</Link>
      </div>
    );
  }

  if (!results) {
    return (
      <div className='text-center pt-10'>
        <h1 className='text-3xl'>Loading...</h1>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>No results found for {searchTerm}</h1>
        <p className='text-lg'>
          Try searching something else{' '}
          <Link href='/' className='text-blue-500'>Home</Link>
        </p>
      </div>
    );
  }

  return <WebSearchResults results={{ items: results }} />;
}
