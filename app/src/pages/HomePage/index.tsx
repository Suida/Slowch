import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Article from '@/components/Article';
import { ArticleType } from '@/components/Article';
import './index.css';

export interface PageType {
  pageSize: number;
  pageNum: number;
  articles: ArticleType[];
}

export default () => {
  const [page, setPage]: [PageType, any] = useState({
    pageSize: 10,
    pageNum: 1,
    articles: [],
  });

  const { pageSize, pageNum, articles } = page;

  useEffect(() => {
    setPage({
      ...page,
      articles: [{
        title: 'Fuck',
        author: 'Stallion',
        creatTime: '2020-08-35',
        editTime: '2020-08-35',
        content: 'Fuck content',
        upNum: 114,
        viewNum: 514,
      }],
    })
  }, [])
  console.log(page);

  return (
    <div>
      {
        articles != null
          ? articles.map((article) => {
            return (
              <Article
                key={article.title}
                article={article} />
            )
          })
          : null
      }
    </div>
  );
};
