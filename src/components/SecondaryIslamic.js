import React from 'react';

import SecondaryRight1 from '../assets/images/secondaryright-1.jpg';

const SecondaryIslamic = ({ islamicData }) => {
  console.log(islamicData);

  return (
    <>
      {islamicData.map((item, index) => {
        const { title, date } = item;

        return (
          <div className="secondary__popular-content" key={index}>
            <img
              src={SecondaryRight1}
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

export default SecondaryIslamic;
