import React from 'react';

import { mainNews } from './NewsData';

const MainNews = () => {
  return (
    <>
      {mainNews.map((item) => {
        const { title, date, image, info, className } = item;
        return (
          <figure className={className}>
            <img src={image} alt={info} className="main__img" />
            <div className="main__item-text">
              <h1>{title}</h1>
              <p>{date}</p>
            </div>
          </figure>
        );
      })}
    </>
  );
};

export default MainNews;
