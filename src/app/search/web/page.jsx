import { Suspense } from 'react';
import WebSearchClientWrapper from '@/app/components/WebSearchClientWrapper';

export default function WebSearchPage() {
  return (
    <Suspense fallback={<div className="text-center pt-10">Loading...</div>}>
      <WebSearchClientWrapper />
    </Suspense>
  );
}
