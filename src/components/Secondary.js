import React from 'react';
import { Container } from 'react-bootstrap';

import SecondaryNews from './SecondaryNews';
import { secondaryNewsData, islamicData } from './NewsData';

import SecondaryLeft1 from '../assets/images/secondaryleft-1.jpg';

import SecondaryIslamic from './SecondaryIslamic';

// CHANGE ALL THE IMAGES WITH URL ON (COPY IMAGE ADRESS) in the web, INSTEAD UPLOADING THEM
// MAKE SECONDARY VIJEST COMPONENT and PASS DIFERENT NEWS THROUGH PROPS FOR EACH VIJEST IN A COMPONENT

const glavnaVijest = {
  title: 'Ovo je nova vijest',
  date: new Date(2021, 5, 9),
  text: 'text vijesti ide ovde ...',
};

const date = glavnaVijest.date.toLocaleString('en-US', {
  year: 'numeric',
  month: 'long',
  day: '2-digit',
});

const Secondary = () => {
  // const state = React.useState('')
  // const currentState = state[0];
  // const setStaste = state[1]; //function to update the state

  return (
    <Container>
      <div className="secondary">
        <div className="secondary__left">
          <h3>Najnovije</h3>
          <SecondaryNewest />
        </div>
        <div className="secondary__right">
          <h3>Popularno</h3>
          <SecondaryNews news={secondaryNewsData} />
        </div>

        <div className="secondary__popular">
          <h3>Islam</h3>
          <SecondaryIslamic islamicData={islamicData} />
        </div>
      </div>
    </Container>
  );
};


//newest component
const SecondaryNewest = () => {
  return (
    <div className="secondary__left-content">
      <img
        src={SecondaryLeft1}
        alt="sandzak vijesti"
        className="secondary__left-img"
      />
      <h1>{glavnaVijest.title}</h1>
      <div>{date}</div>
      <div>{glavnaVijest.text}</div>
    </div>
  );
};

export default Secondary;
