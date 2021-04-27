import React from 'react';
import {Container} from 'react-bootstrap';
 
import SecondaryLeft1 from '../assets/images/secondaryleft-1.jpg';


const Secondary = () => {
  // const state = React.useState('')
  // const currentState = state[0]; 
  // const setStaste = state[1]; //function to update the state

  return (
    <Container>
      <section className="secondary">
        <div className="secondary__left">
            <h3 style={{borderBottom: '2px solid #54483A', textAlign: 'center', fontWeight: '700', padding: '1.5px 3px 3px', backgroundColor: '#1888ff',}}>NAJNOVIJE</h3>
            <div className="secondary__left-big">
           <img src={SecondaryLeft1} alt="sandzak vijesti 1" className="secondary__left-img--1" />
           <div className="secondary__left-big--description">
           <h3>TEST TEST TEST TEST TEST TEST TEST</h3>
           <p>27. April 2021</p>
           <p>short description</p>
           </div>
           </div>
        </div>

        <div className="secondary__right">

        </div>
      </section>
    </Container>
  );
};

export default Secondary;



