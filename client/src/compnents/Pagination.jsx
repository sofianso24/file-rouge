import { useState } from "react";

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const mentorsPerPage = 5; // Number of mentors to display per page
    const totalMentors = 50; // Total number of mentors
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    const totalPages = Math.ceil(totalMentors / mentorsPerPage);
  
    const generatePages = () => {
      const pages = [];
  
      // Generate the page numbers
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
  
      return pages;
    };
  
    const pages = generatePages();
  
    return (
      <div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
        {/* Pagination UI */}
        <div className="flex items-center justify-between">
          {/* Previous button */}
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-3 py-2 rounded-lg duration-150 hover:text-indigo-600 hover:bg-indigo-50"
          >
            Previous
          </button>
  
          {/* Page numbers */}
          <ul className="flex items-center gap-1">
            {pages.map((page) => (
              <li key={page} className="text-sm">
                <button
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 rounded-lg duration-150 hover:text-indigo-600 hover:bg-indigo-50 ${
                    currentPage === page ? "bg-indigo-50 text-indigo-600 font-medium" : ""
                  }`}
                >
                  {page}
                </button>
              </li>
            ))}
          </ul>
  
          {/* Next button */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-3 py-2 rounded-lg duration-150 hover:text-indigo-600 hover:bg-indigo-50"
          >
            Next
          </button>
        </div>
      </div>
    );
  };


  export default Pagination