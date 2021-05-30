import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import MainNews from './MainNews';


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
