
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import NavBar from '../../compnents/navbar/NavBar';
import Footer from '../../compnents/footer/Footer';
import Search from '../../compnents/search/Search';
import FiltreButtons from '../../compnents/filtreButtons';
import Pagination from '../../compnents/Pagination';
import MentorCard from '../../compnents/mentorCard/MentorCard';


const Mentors = () => {

  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSkills, setSelectedSkills] = useState([]);
  
 

  const mentorsPerPage = 5;


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8082/aprenants/getAvailableMentors', {
          withCredentials: true,
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


  // useEffect(() => {
    
  //   const fetchMentorsBySkill = async () => {
  //     if (selectedSkills) {
  //       const mentors = await filterMentorsBySkill(selectedSkill);
  //       setFilteredMentors(mentors);
  //       setCurrentPage(1); // Reset the current page when skill selection changes
  //     } else {
  //       setFilteredMentors([]);
  //     }
  //   };
  
  //   fetchMentorsBySkill();
  // }, [selectedSkills]);


  // useEffect(() => {

  //   const fetchMentorsBySkills = async () => {

  //     if (selectedSkills.length > 0) {
  //       try {
  //         const response = await axios.get(`http://localhost:8082/aprenants/filtreMentorsByskill?skills=${JSON.stringify(selectedSkills)}`);
  //         setFilteredMentors(response.data.mentors);
  //         setCurrentPage(1); // Reset the current page when skill selection changes
  //       } catch (error) {
  //         console.error('An error occurred while fetching mentors by skills:', error);
  //       }
  //     } else {
  //       setFilteredMentors([]);
  //     }
  //   };

  //   fetchMentorsBySkills();
  // }, [selectedSkills]);


  const filterMentors = (mentors) => {

    const query = searchQuery.toLowerCase();

    if (mentors && mentors.length > 0) {
      return mentors.filter((mentor) => {
        const firstName = mentor.firstName ? mentor.firstName.toLowerCase() : '';
        const lastName = mentor.lastName ? mentor.lastName.toLowerCase() : '';
        const fullName = `${firstName} ${lastName}`.trim();
        const company = mentor.company ? mentor.company.toLowerCase() : '';
        const domains = mentor.domain ? mentor.domain.map((domain) => domain.toLowerCase()) : [];
        const skills = mentor.skills ? mentor.skills.map((skill) => skill.toLowerCase()) : [];

        return (
          firstName.includes(query) ||
          lastName.includes(query) ||
          fullName.includes(query) ||
          company.includes(query) ||
          domains.some((domain) => domain.includes(query)) ||
          skills.some((skill) => skill.includes(query))
        );
      });
    } else {
      return [];
    }
  };

 

  
  const startIndex = (currentPage - 1) * mentorsPerPage;
  const endIndex = startIndex + mentorsPerPage;
  const displayedMentors = searchQuery ? filteredMentors.slice(startIndex, endIndex) : data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // const handleCheckboxChange = (e) => {
  //   const skill = e.target.value;
  //   const isChecked = e.target.checked;

  //   if (isChecked) {
  //     setSelectedSkills((prevSkills) => [...prevSkills, skill]);
  //   } else {
  //     setSelectedSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
  //   }
  // };

  // const handleSkillChange = (e) => {
  //   setSelectedSkill(e.target.value);
  // };

  


  return (
    <>
      <NavBar />
      <Search onSearch={handleSearch} />

       <FiltreButtons
       setData={setData}
       
       />     

      {displayedMentors.map((mentor) => (
        <MentorCard key={mentor._id} mentor={mentor} />
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