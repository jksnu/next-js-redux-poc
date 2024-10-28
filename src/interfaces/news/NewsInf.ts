export interface NewsInf {
  totalResults: number;
  articles: ArticleInf[];
}

export interface ArticleInf {
  url: string;
  urlToImage: string;
  title: string;
  description: string;
}