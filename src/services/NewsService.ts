import { ArticleInf, NewsInf } from "@/interfaces/news/NewsInf";

export const getNews = async (page: number, limit: number): Promise<NewsInf> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_NEWS_API_URL}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}&pageSize=${limit}&page=${page}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw error;
  }
}