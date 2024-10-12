import React, { createContext, useState } from 'react';
import { mockNews } from '../utils/mockData';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("");
    const [page, setPage] = useState(1);
    const [newsResults, setNewsResults] = useState(mockNews); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(1);

    // Number of news items per page
    const itemsPerPage = 12;

    const setResults = (results) => {
        setNewsResults(results);
        setTotalPages(Math.ceil(results.length / itemsPerPage)); // Calculate total pages
    };


    return (
        <SearchContext.Provider value={{
            keyword, setKeyword,
            page, setPage,
            newsResults: newsResults.slice((page - 1) * itemsPerPage, page * itemsPerPage), 
            setNewsResults,
            setResults,
            loading, setLoading,
            error, setError,
            totalPages, setTotalPages,
        }}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContext;
