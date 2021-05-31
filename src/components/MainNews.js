import React from 'react';

import { mainNews } from './NewsData';

const MainNews = () => {
  return (
    <>
      {mainNews.map((item) => {
        const { title, date, image, info, className } = item;
        return (
          <div className={className}>
            <img src={image} alt={info} className="main__item-img" />
            <div className="main__item-text">
              <h1>{title}</h1>
              <p>{date}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MainNews;
