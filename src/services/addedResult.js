import { fetchGuardianNews } from './guardianService';
import { fetchNYTimesNews } from './nyTimesService';
import { mockNews } from '../utils/mockData';

export const fetchAggregatedNews = async (keyword, page, offlineMode = false) => {
    if (offlineMode) {
        return { news: mockNews, error: null };
    }

    try {
        const [guardianNews, nyTimesNews] = await Promise.all([
            fetchGuardianNews(keyword, page),
            fetchNYTimesNews(keyword, page)
        ]);

        const aggregatedNews = [...guardianNews, ...nyTimesNews];
        const uniqueNews = aggregatedNews.filter((news, index, self) =>
            index === self.findIndex((t) => t.url === news.url)
        );

        return { news: uniqueNews, error: null };
    } catch (error) {
        return { news: [], error: 'Unable to fetch news. Please try again later.' };
    }
};
