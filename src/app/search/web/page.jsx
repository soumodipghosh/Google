import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const WebSearchClient = dynamic(() => import('@/app/components/WebSearchClient'), {
  ssr: false,
});

export default function WebSearchPage() {
  return (
    <Suspense fallback={<div className="text-center pt-10 text-xl">Loading...</div>}>
      <WebSearchClient />
    </Suspense>
  );
}
