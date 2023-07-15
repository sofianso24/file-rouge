import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('search');
    setSearchTerm(query || '');
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/mentors?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="max-w-md px-4 mx-auto mt-20 bg-white bg-opacity-20 backdrop-filter backdrop-blur-2 saturate-180"
    >
      <div className="relative shadow-2xl rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={handleSearch}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search for your mentor"
          className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-3xl outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Search;