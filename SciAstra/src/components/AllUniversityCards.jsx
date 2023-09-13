import React, { useEffect, useState } from 'react'
import UniversityCards from '../miniComponents/cards/UniversityCards'
import Demo from '../miniComponents/cards/Demo'
import ReactPaginate from 'react-paginate'

const AllUniversityCards = () => {
  const [universities, setUniversities] = useState([])
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 6;
  useEffect(()=>{
    fetch("fakeData.json")
    .then(res => res.json())
    .then(data => {
      setUniversities(data[2].universities)
    })
  },[])
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = universities.slice(startIndex, endIndex);
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
    
  };
  return (
    <dir>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-2' id='university'>
      {
        universities.map((university, index) => <Demo key={index} university={university}/>)
      }
    </div>
    {/* <div className="w-full mx-auto flex justify-center gap-3 text-justify ">
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
      </div> */}
    </dir>
  )
}

export default AllUniversityCards
