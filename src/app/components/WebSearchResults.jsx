import Link from 'next/link';
import Parser from 'html-react-parser';
import PaginationButtons from './PaginationButtons';

export default function WebSearchResults({ results }) {
  return (
    <div className='w-full mx-auto px-3 sm:pb-24 pb-40 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
      <p className='text-gray-600 text-sm mb-5 mt-3'>
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
  <div className='mb-8 max-w-xl' key={result.link}>
    <div className='group flex flex-col'>
      <Link href={result.link}>
        <a
          target='_blank'
          rel='noopener noreferrer'
          className='text-sm text-gray-600'
        >
          {result.formattedUrl}
        </a>
      </Link>
      <Link href={result.link}>
        <a
          target='_blank'
          rel='noopener noreferrer'
          className='group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800'
        >
          {result.title}
        </a>
      </Link>
    </div>
    <p className='text-gray-600'>
      {typeof result.htmlSnippet === 'string' ? Parser(result.htmlSnippet) : ''}
    </p>
  </div>
))}
      <PaginationButtons />
    </div>
  );
}
