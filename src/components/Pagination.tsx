import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import '../styles/Pagination.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  perPage: number;
  onPageChange: (page: number) => void;
  onPerPageChange: (perPage: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  perPage,
  onPageChange,
  onPerPageChange,
}: PaginationProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const perPageOptions = [5, 10, 15];

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 7;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('...');
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="pagination">
      <div className="per-page-selector">
        <button 
          className="per-page-button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="per-page-text">{perPage} per page</span>
          <ChevronDown className="chevron" />
        </button>
        
        {isDropdownOpen && (
          <div className="per-page-dropdown">
            {perPageOptions.map((option) => (
              <button
                key={option}
                className={`per-page-option ${option === perPage ? 'active' : ''}`}
                onClick={() => {
                  onPerPageChange(option);
                  setIsDropdownOpen(false);
                }}
              >
                {option} per page
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="pagination-controls">
        <button
          className="page-button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {renderPageNumbers().map((page, index) => (
          <button
            key={index}
            className={`page-number ${page === currentPage ? 'active' : ''} ${
              page === '...' ? 'ellipsis' : ''
            }`}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}

        <button
          className="page-button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
