
import { useContext, useEffect } from 'react';
import './App.css';
import NewsList from './components/NewsList/NewsList';
import Pagination from './components/Pagination/Pagination';
import SearchBar from './components/SearchBar/SearchBar';
import SearchContext from './context/SearchContext';
import { fetchAggregatedNews } from './services/addedResult';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  const { keyword, page, setResults, setLoading, setError, totalPages } = useContext(SearchContext)
  
  useEffect(() => {
    const fetchData = async () => {
        if (keyword) {
            setLoading(true);
            const { news, error } = await fetchAggregatedNews(keyword, page);
            setLoading(false);
            setResults(news); // Set results for pagination
            setError(error);
        } else {
            // Reset to mock data if no keyword is present
            setResults([
                { title: "Mock News 1", description: "Description for mock news 1", url: "#" },
                { title: "Mock News 2", description: "Description for mock news 2", url: "#" },
                { title: "Mock News 3", description: "Description for mock news 3", url: "#" },
            ]);
        }
    };

    fetchData();
    // eslint-disable-next-line
}, [keyword, page]);

  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <NewsList />
      {totalPages > 1 && <Pagination />}
      <Footer />
    </div>
  );
}

export default App;
