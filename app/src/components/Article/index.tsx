import React from 'react';

export interface ArticleType {
  title: string;
  author: string;
  content: string;
  creatTime: string;
  editTime: string;
  upNum: string;
  viewNum: string;
}

export interface Props {
  article: ArticleType;
}

export default (props: Props) => {
  const {
    title,
    author,
    content,
    creatTime,
    editTime,
    upNum,
    viewNum,
  } = props.article;

  return (
    <div className="article-container">
      <h3>{title}</h3>
      <div className="article-meta">
        <p>
          <span className='article-author'>{author}</span>
          <span className='article-creatTime'>{creatTime}</span>
          <span className='article-editTime'>{editTime}</span>
        </p>
      </div>
      <div
        className='article-content'
        dangerouslySetInnerHTML={{
          __html: content,
        }} />
    </div>
  )
}
