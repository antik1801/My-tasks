import React, { useEffect, useState } from "react";
import MentorAndAdvisirsCard from "../miniComponents/cards/MentorAndAdvisirsCard";
import ReactPaginate from "react-paginate";

const AllMentorAndAdvisors = () => {
  const [allMentorAndAdvisors, setAllMentorAndAdvisors] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 6;
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllMentorAndAdvisors(data[0].mentors_Advisor);
        setTotalPages(Math.ceil(data[0].mentors_Advisor.length / itemsPerPage));
      });
  }, []);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = allMentorAndAdvisors.slice(startIndex, endIndex);
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
    
  };

//   console.log(allMentorAndAdvisors);
  return (
    <div className="my-6">
      <div
        className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-10"
        id="mentors-and-advisors"
      >
        {subset.map((mentor, index) => (
          <MentorAndAdvisirsCard key={index} mentor={mentor} />
        ))}
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

export default AllMentorAndAdvisors;
