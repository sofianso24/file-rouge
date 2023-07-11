import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
import Pagination from '../../compnents/Pagination'
import NavBar from '../../compnents/navbar/NavBar'
import Search from '../../compnents/search/Search'
import SelectButton from '../../compnents/filtreButtons'
import MentorCard from '../../compnents/mentorCard/MentorCard'
import Footer from '../../compnents/footer/Footer'

const Mentors = () => {

  const [data, setData] = useState(null)
  useEffect(() => {

    const fetchdata = async () => {
      await axios.get("http://localhost:8082/aprenants/getAvailableMentors", {
        withCredentials: true
      })

        .then(response => {
          setData(response.data)

          console.log(response.data);

        })
        .catch(error => {
          console.error('An error occurred while updating the profile:', error);
        });
    }
    fetchdata()
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = 10; // Total number of pages (you can adjust this based on your data)

  const mentorsPerPage = 5; // Number of mentors to display per page

  // Sample mentors data
  const mentors = [
    { id: 1, name: "Mentor 1" },
    { id: 2, name: "Mentor 2" },
    { id: 3, name: "Mentor 3" },
    { id: 4, name: "Mentor 4" },
    { id: 5, name: "Mentor 5" },
    { id: 6, name: "Mentor 6" },
    { id: 7, name: "Mentor 7" },
    { id: 8, name: "Mentor 8" },
    { id: 9, name: "Mentor 9" },
    { id: 10, name: "Mentor 10" },
    // ... Add more mentors
  ];

  // Calculate the index range of mentors to display based on the current page
  const startIndex = (currentPage - 1) * mentorsPerPage;
  const endIndex = startIndex + mentorsPerPage;

  // Get the mentors to display on the current page
  const displayedMentors = mentors.slice(startIndex, endIndex);

  return (
    <>
      <NavBar />
      <Search />
      <SelectButton />

      {data?.map((mentor) => (
        <MentorCard key={mentor._id} mentor={mentor}  />
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <Footer />
    </>
  );
};

export default Mentors