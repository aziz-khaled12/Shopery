import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  showPageNumbers = true,
  maxVisiblePages = 2,
  className = "",
}) => {
  // Don't render if there's only one page or less
  if (totalPages <= 1) return null;

  // Generate array of page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const half = Math.floor(maxVisiblePages / 2);

    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);

    // Adjust start if we're near the end
    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    // Add first page and ellipsis if needed
    if (start > 1) {
      pages.push(1);
      if (start > 2) {
        pages.push("...");
      }
    }

    // Add visible pages
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Add ellipsis and last page if needed
    if (end < totalPages) {
      if (end < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageClick = (page) => {
    if (page !== "..." && page !== currentPage && onPageChange) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1 && onPageChange) {
      onPageChange(currentPage - 1);

    }
  };

  const handleNext = () => {
    if (currentPage < totalPages && onPageChange) {
      onPageChange(currentPage + 1);
    }
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={`flex items-center justify-center space-x-1 ${className}`}>
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border transition-all duration-200 ${
          currentPage === 1
            ? "border-gray-200 text-gray-400 cursor-not-allowed"
            : "border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-gray-50 active:scale-95"
        }`}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Page Numbers */}
      {showPageNumbers && (
        <div className="flex items-center space-x-1">
          {pageNumbers.map((page, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(page)}
              disabled={page === "..."}
              className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-sm sm:text-base font-medium transition-all duration-200 ${
                page === currentPage
                  ? "bg-primary text-white border border-primary shadow-sm"
                  : page === "..."
                  ? "text-gray-400 cursor-default"
                  : "border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 active:scale-95"
              }`}
              aria-label={page === "..." ? "More pages" : `Go to page ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          ))}
        </div>
      )}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border transition-all duration-200 ${
          currentPage === totalPages
            ? "border-gray-200 text-gray-400 cursor-not-allowed"
            : "border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-gray-50 active:scale-95"
        }`}
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Page Info for Mobile */}
      <div className="ml-4 text-sm text-gray-600 hidden xs:block sm:hidden">
        {currentPage} / {totalPages}
      </div>
    </div>
  );
};

export default Pagination;
