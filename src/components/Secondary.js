import React from 'react';
import {Container} from 'react-bootstrap';

import SecondaryLeft1 from '../assets/images/secondaryleft-1.jpg';
import SecondaryRight1 from '../assets/images/secondaryright-1.jpg';

const Secondary = () => {
  // const state = React.useState('')
  // const currentState = state[0];
  // const setStaste = state[1]; //function to update the state

  return (
    <Container>
      <h3
        style={{
          borderBottom: '2px solid #54483A',
          textAlign: 'center',
          fontWeight: '700',
          padding: '1.5px 3px 3px',
          backgroundColor: '#1888ff',
          width: '100%',
        }}
      >
        NAJNOVIJE
      </h3>
      <div className="secondary">
        <div className="secondary__left">
          <div className="secondary__left-content">
            <img src={SecondaryLeft1} alt="sandzak vijesti" className="secondary__left-img" />
            <h1>TEST TEST TEST TEST TEST TEST TEST</h1>
            <p>27. April 2021</p>
            <p>short description</p>
          </div>
        </div>

        <div className="secondary__right">

          <div className="secondary__right-content">
            <img
              src={SecondaryRight1}
              alt="sandzak vijesti"
              className="secondary__right-img"
            />
            <div style={{display: 'block'}}>
            <h3> <b>TEST TEST TEST TEST TEST .. TEST TEST...</b></h3>
            <p>29. April 2021</p>
            </div>
          </div>

          <div className="secondary__right-content">
            <img
              src={SecondaryRight1}
              alt="sandzak vijesti"
              className="secondary__right-img"
            />
            <div style={{display: 'block'}}>
            <h3> <b>TEST TEST TEST TEST TEST .. TEST TEST...</b></h3>
            <p>29. April 2021</p>
            </div>
          </div>

          <div className="secondary__right-content">
            <img
              src={SecondaryRight1}
              alt="sandzak vijesti"
              className="secondary__right-img"
            />
            <div style={{display: 'block'}}>
            <h3> <b>TEST TEST TEST TEST TEST .. TEST TEST...</b></h3>
            <p>29. April 2021</p>
            </div>
          </div>

          <div className="secondary__right-content">
            <img
              src={SecondaryRight1}
              alt="sandzak vijesti"
              className="secondary__right-img"
            />
            <div style={{display: 'block'}}>
            <h3> <b>TEST TEST TEST TEST TEST .. TEST TEST...</b></h3>
            <p>29. April 2021</p>
            </div>
          </div>

          <div className="secondary__right-content">
            <img
              src={SecondaryRight1}
              alt="sandzak vijesti"
              className="secondary__right-img"
            />
            <div style={{display: 'block'}}>
            <h3> <b>TEST TEST TEST TEST TEST .. TEST TEST...</b></h3>
            <p>29. April 2021</p>
            </div>
          </div>

        </div>
      </div>
    </Container>
  );
};

export default Secondary;
