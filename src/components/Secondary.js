import React from 'react';
import {Container} from 'react-bootstrap';
 
import SecondaryLeft1 from '../assets/images/secondaryleft-1.jpg';
const Secondary = () => {
  return (
    <Container>
      <section className="secondary">
        <div className="secondary__left">
            <h3 style={{borderBottom: '2px solid #54483A', textAlign: 'center', fontWeight: '700', padding: '1.5px 3px 3px', backgroundColor: '#1888ff',}}>NAJNOVIJE</h3>
           <img src={SecondaryLeft1} alt="sandzak vijesti 1" className="secondary__left-img--1" />
        </div>

        <div className="secondary__right">

        </div>
      </section>
    </Container>
  );
};

export default Secondary;
