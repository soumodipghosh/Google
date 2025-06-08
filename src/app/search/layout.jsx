'use client';  // Important if you use client components inside

import React, { Suspense } from 'react';
import './../globals.css';
import Search from '../components/Search';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
  <Search />
  <Suspense fallback={<div>Loading...</div>}>
    <main className="px-4">{children}</main>
  </Suspense>
</div>

  );
}
