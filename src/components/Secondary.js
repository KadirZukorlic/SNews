import React from 'react';
import { Container } from 'react-bootstrap';

import SecondaryNews from './SecondaryNews';

import SecondaryLeft1 from '../assets/images/secondaryleft-1.jpg';
import SecondaryRight1 from '../assets/images/secondaryright-1.jpg';

// CHANGE ALL THE IMAGES WITH URL ON (COPY IMAGE ADRESS) in the web, INSTEAD UPLOADING THEM
// MAKE SECONDARY VIJEST COMPONENT and PASS DIFERENT NEWS THROUGH PROPS FOR EACH VIJEST IN A COMPONENT

const Secondary = () => {
  // const state = React.useState('')
  // const currentState = state[0];
  // const setStaste = state[1]; //function to update the state

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

  return (
    <Container>
      <h3
        style={{
          borderBottom: '2px solid #54483A',
          textAlign: 'center',
          fontWeight: '700',
          padding: '1.5px 3px 3px',
          display: 'inline-block',
        }}
      >
        NAJNOVIJE
      </h3>

      <h3
        style={{
          borderBottom: '2px solid #54483A',
          textAlign: 'center',
          fontWeight: '700',
          padding: '1.5px 3px 3px',
          float: 'right',
          display: 'inline-block',
        }}
      >
        ISLAM
      </h3>

      <div className="secondary">
        <div className="secondary__left">
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
        </div>

        <div className="secondary__right">
          <SecondaryNews />
        </div>

        <div className="secondary__popular">
          <div className="secondary__popular-content">
            <img
              src={SecondaryRight1}
              alt="sandzak vijesti"
              className="secondary__right-img"
            />
            <div style={{ display: 'block' }}>
              <h3>
                {' '}
                <b>TEST TEST TEST TEST TEST .. TEST TEST...</b>
              </h3>
              <p>29. April 2021</p>
            </div>
          </div>

          <div className="secondary__popular-content">
            <img
              src={SecondaryRight1}
              alt="sandzak vijesti"
              className="secondary__right-img"
            />
            <div style={{ display: 'block' }}>
              <h3>
                {' '}
                <b>TEST TEST TEST TEST TEST .. TEST TEST...</b>
              </h3>
              <p>29. April 2021</p>
            </div>
          </div>

          <div className="secondary__popular-content">
            <img
              src={SecondaryRight1}
              alt="sandzak vijesti"
              className="secondary__right-img"
            />
            <div style={{ display: 'block' }}>
              <h3>
                {' '}
                <b>TEST TEST TEST TEST TEST .. TEST TEST...</b>
              </h3>
              <p>29. April 2021</p>
            </div>
          </div>

          <div className="secondary__popular-content">
            <img
              src={SecondaryRight1}
              alt="sandzak vijesti"
              className="secondary__right-img"
            />
            <div style={{ display: 'block' }}>
              <h3>
                {' '}
                <b>TEST TEST TEST TEST TEST .. TEST TEST...</b>
              </h3>
              <p>29. April 2021</p>
            </div>
          </div>

          <div className="secondary__popular-content">
            <img
              src={SecondaryRight1}
              alt="sandzak vijesti"
              className="secondary__right-img"
            />
            <div style={{ display: 'block' }}>
              <h3>
                {' '}
                <b>TEST TEST TEST TEST TEST .. TEST TEST...</b>
              </h3>
              <p>29. April 2021</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Secondary;
