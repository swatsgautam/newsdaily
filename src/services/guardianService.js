export const fetchGuardianNews = async (keyword, page = 1) => {
    const apiKey = 'b5039e34-7106-4a93-a889-7fb2187f262b'; 
    const url = `https://content.guardianapis.com/search?q=${keyword}&page=${page}&api-key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch from Guardian API');
        const data = await response.json();
        console.log("data", data)
        return data.response.results.map(article => ({
            title: article.webTitle,
            url: article.webUrl,
            description: article.fields ? article.fields.trailText : 'No description available',
        }));
    } catch (error) {
        console.error('Error fetching from Guardian:', error);
        return [];
    }
};
