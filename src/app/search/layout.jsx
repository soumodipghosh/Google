import React, { Suspense } from 'react';
import './../globals.css';
import Search from '../components/Search';

export default function Layout({ children }) {
  return (
    <div>
      <Search />
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
    </div>
  );
}
