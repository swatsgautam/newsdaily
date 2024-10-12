import React, { useContext } from 'react'
import SearchContext from '../../context/SearchContext'
import './Pagination.css'

const Pagination = () => {
    const { page, setPage, totalPages } = useContext(SearchContext);

    const handleNext = () => {
        if (page < totalPages) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const handlePrev = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
        }
    };

  return (
    <div className='pagination'>
            <button onClick={handlePrev} disabled={page === 1}>Previous</button>
            <span>Page {page} of {totalPages}</span>
            <button onClick={handleNext} disabled={page === totalPages}>Next</button>
        </div>
  )
}

export default Pagination
