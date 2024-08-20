import Link from 'next/link'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pageType: string;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, pageType }) => {
  const pageNumbers = []

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="flex justify-center mt-8">
      <ul className="inline-flex space-x-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <Link
              href={`/${pageType}?page=${number}`}
              className={`px-3 py-1 rounded-md ${
                currentPage === number
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination