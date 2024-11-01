'use client';
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../spinner/Spinner";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchNews, selectNews } from "@/redux/slices/newsSlice";

const NewsHeadlines: React.FC = () => {
  const dispatch = useAppDispatch();  
  const newsHeadlines = useAppSelector(selectNews)
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);

  const fetchNewItems = async () => {
    dispatch(fetchNews({page: page, limit: 5}));
    setPage(page+1);
  }

  useEffect(() => {
    dispatch(fetchNews({page: page, limit: 5}));
  }, newsHeadlines);

  return (
    <InfiniteScroll
      dataLength={newsHeadlines.length}
      next={fetchNewItems}
      hasMore={newsHeadlines.length < totalResult}
      loader={<Spinner />}
    >
      <div className="container mt-4">
        <div className="row">
          {newsHeadlines.map((article, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100">
                <a href={article.url} target="_blank" rel="noreferrer"><img src={article.urlToImage} className="card-img-top" alt={article.title} /></a>
                <div className="card-body">
                  <h6 className="card-title">{article.title}</h6>
                  <p className="card-text">{article.description && article.description.substring(0, 80) + "..."}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );  
}

export default NewsHeadlines;