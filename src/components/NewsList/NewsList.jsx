import React, { useContext } from 'react';
import SearchContext from '../../context/SearchContext';
import './NewsList.css';

const NewsList = () => {
    const { newsResults, loading, error } = useContext(SearchContext);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className='news-list'>
            {newsResults.map((news, index) => (
                <div className='news-card' key={index}>
                    <a href={news.url} target="_blank" rel="noopener noreferrer">
                        <h3 className='news-title'>{news.title}</h3>
                    </a>
                    <p className="news-description">{news.description}</p>
                </div>
            ))}
        </div>
    );
}

export default NewsList;
