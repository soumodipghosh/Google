import Link from 'next/link';
import PaginationButtons from './PaginationButtons';

export default function ImageSearchResults({ results }) {
  return (
    <div className='sm:pb-24 pb-40 mt-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4'>
        {results.items.map((result) => {
  const link = typeof result.link === 'string' ? result.link : '#';
  const contextLink = result.image?.contextLink || '#';
  const title = result.title || 'No title';
  const displayLink = result.displayLink || '';

  return (
    <div className='mb-8' key={link}>
      <div className='group'>
        <Link href={contextLink}>
          <img
            src={link}
            alt={title}
            className='h-60 group-hover:shadow-xl w-full object-contain transition-shadow duration-300'
          />
        </Link>
        <Link href={contextLink}>
          <h2 className='group-hover:underline truncate text-xl'>{title}</h2>
        </Link>
        <Link href={contextLink}>
          <p className='group-hover:underline truncate text-gray-600'>{displayLink}</p>
        </Link>
      </div>
    </div>
  );
})}

      </div>
      <div className='ml-16'>
        <PaginationButtons />
      </div>
    </div>
  );
}