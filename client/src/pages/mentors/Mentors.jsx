import { useState, useEffect } from "react";


import NavBar from "../../compnents/navbar/NavBar"
import Footer from "../../compnents/footer/Footer"
import Search from "../../compnents/search/Search"
import SelectButton from "../../compnents/filtreButtons"
import Pagination from "../../compnents/Pagination"
import axios from "axios"
import MentorCard from "../../compnents/mentorCard/MentorCard"



const Mentors = () => {

  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [animationClass, setAnimationClass] = useState('');
  const mentorsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8082/aprenants/getAvailableMentors", {
          withCredentials: true
        });
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('An error occurred while fetching mentors:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = filterMentors(data);
      setFilteredMentors(filtered);
      setCurrentPage(1); // Reset the current page when search query changes
    } else {
      setFilteredMentors([]);
    }
  }, [searchQuery, data]);

  const filterMentors = (mentors) => {
    const query = searchQuery.toLowerCase();
    return mentors.filter(
      (mentor) =>
        mentor.name.toLowerCase().includes(query) ||
        mentor.domain.toLowerCase().includes(query) ||
        mentor.skills.some((skill) => skill.toLowerCase().includes(query))
    );
  };

  const startIndex = (currentPage - 1) * mentorsPerPage;
  const endIndex = startIndex + mentorsPerPage;
  const displayedMentors = searchQuery ? filteredMentors.slice(startIndex, endIndex) : data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
   
  };

  return (
    <>
      <NavBar />
      <Search setSearchQuery={setSearchQuery} />
      <SelectButton />
      {displayedMentors?.map((mentor) => (
        <MentorCard key={mentor._id} mentor={mentor} className={animationClass}  />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil((searchQuery ? filteredMentors.length : data.length) / mentorsPerPage)}
        onPageChange={handlePageChange}
      />
      <Footer />
    </>
  );
};

export default Mentors;