import React from 'react';


const SecondaryNews = ({ news }) => {
  console.log(news);
  return (
    <>
      {news.map((news, index) => {
        const { title, date, image } = news;
        return (
          <div className="secondary__right-content" key={index}>
            <img
              src={image}
              alt="sandzak vijesti"
              className="secondary__right-img"
            />

            <div style={{ display: 'block' }}>
              <h3>
                <b>{title}</b>
              </h3>
              <p>{date}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SecondaryNews;
