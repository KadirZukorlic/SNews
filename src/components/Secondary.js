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
      <section className="secondary">
        <h3 style={{borderBottom: '2px solid #54483A', textAlign: 'center', fontWeight: '700', padding: '1.5px 3px 3px', backgroundColor: '#1888ff', width: '66.7%', }}>
          NAJNOVIJE
        </h3>
        <div className="secondary__left">
          <div className="secondary__left-big">
            <img
              src={SecondaryLeft1}
              alt="sandzak vijesti"
              className="secondary__left-big--img"
            />
            <div className="secondary__left-big--description">
              <h3>TEST TEST TEST TEST TEST TEST TEST</h3>
              <p>27. April 2021</p>
              <p>short description</p>
            </div>
          </div>

          <div className="secondary__left-small">
            <img
              src={SecondaryRight1}
              alt="sandzak vijesti"
              className="secondary__left-small--img"
            />
            <div className="secondary__left-small--description">
              <h3>TEST TEST TEST TEST TEST .. TEST TEST...</h3>
              <p>29. April 2021</p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Secondary;
