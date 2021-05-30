import React from 'react';
import { Link } from 'react-router-dom';

import main1 from '../assets/images/main-1.jpg';
import main2 from '../assets/images/main-2.jpg';
import main3 from '../assets/images/main-3.jpg';
import main4 from '../assets/images/main-4.jpg';

const mainNews = [
  {
    title: 'TEST TEST TEST TEST TEST .. TEST TEST...',
    date: '29. April 2021',
    image: 'https://static.dw.com/image/19566112_303.jpg',
    info: '',
    className: 'main__item main__item-1',
  },

  {
    title: 'TEST TEST TEST TEST TEST .. TEST TEST...',
    date: '29. April 2021',
    image:
      'https://www.balcanicaucaso.org/var/obc/storage/images/articoli-da-pubblicare-2/sarajevo-la-mia-citta-192658/1865254-2-ita-IT/Sarajevo-la-mia-citta.jpg',
    info: '',
    className: 'main__item main__item-2',
  },

  {
    title: 'TEST TEST TEST TEST TEST .. TEST TEST...',
    date: '29. April 2021',
    image:
      'https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg',
    info: '',
    className: 'main__item main__item-3',
  },

  {
    title: 'TEST TEST TEST TEST TEST .. TEST TEST...',
    date: '29. April 2021',
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    info: '',
    className: 'main__item main__item-4',
  },
];

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
