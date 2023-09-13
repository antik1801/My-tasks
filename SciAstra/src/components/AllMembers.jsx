import React, { useEffect, useState } from "react";
import ProfessorsCard from "../miniComponents/cards/ProfessorsCard";
import MentorPagination from "../miniComponents/paginations/MentorPagination";
import ReactPaginate from "react-paginate";

const AllMembers = () => {
  const [allMembers, setAllMembers] = useState([]);
  const [mentors, setAllMentors] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 6;
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllMembers(data[1].mentors);
        setTotalPages(Math.ceil(data[1].mentors.length / itemsPerPage));
      });
  }, []);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = allMembers.slice(startIndex, endIndex);
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
    
  };
  return (
    <div>
    <div
      className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-2"
      id="mentors"
    >
      {subset.map((mentor, index) => (
        <ProfessorsCard key={index} mentor={mentor} />
      ))}
      {/* <MentorPagination items={allMembers}/> */}
    </div>
    <div className="w-full mx-auto flex justify-center gap-3 text-justify mt-8">
        <ReactPaginate
          pageCount={totalPages}
          onPageChange={handlePageChange}
          forcePage={currentPage}
          previousLabel={"<<"}
          nextLabel={">>"}
          containerClassName={"pagination-container"}
          activeClassName={"active-page"}
          className="flex"
        ></ReactPaginate>
      </div>
    </div>
  );
};

export default AllMembers;
