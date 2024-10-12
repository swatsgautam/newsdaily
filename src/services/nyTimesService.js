export const fetchNYTimesNews = async (keyword, page = 1) => {
    const apiKey = 'QzdmhVeM1TCVFZk2n6Yhvg5UcAa5rgCK'; 
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&page=${page}&api-key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch from NYTimes API');
        const data = await response.json();
        return data.response.docs.map(article => ({
            title: article.headline.main,
            url: article.web_url,
            description: article.abstract || 'No description available',
        }));
    } catch (error) {
        console.error('Error fetching from NYTimes:', error);
        return [];
    }
};
