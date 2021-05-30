import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import MainNews from './MainNews';

import main1 from '../assets/images/main-1.jpg';
import main2 from '../assets/images/main-2.jpg';
import main3 from '../assets/images/main-3.jpg';
import main4 from '../assets/images/main-4.jpg';

const Main = () => {
  return (
    <Container>
      <div className="main">
        <MainNews />
      </div>
    </Container>
  );
};
export default Main;
