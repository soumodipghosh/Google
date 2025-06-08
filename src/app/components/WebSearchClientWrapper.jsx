'use client';

import dynamic from 'next/dynamic';

const WebSearchClient = dynamic(() => import('./WebSearchClient'), {
  ssr: false,
});

export default function WebSearchClientWrapper(props) {
  return <WebSearchClient {...props} />;
}
