import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './components/Name.js';
import Price from './components/Price.js';
import Description from './components/Description.js';
import Image from './components/Image.js';
import './App.css';

const App = () => {
  const firstName = "John";

  return (
    <Container className="d-flex flex-column align-items-center my-5">
      <Card className="cardStyle shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <div className="imageContainerStyle">
            <Image />
          </div>
          <div className="contentStyle">
            <Name />
            <Price />
            <Description />
            <div className="button-container">
              <button className="button">Buy Now</button>
            </div>
          </div>
        </Card.Body>
      </Card>

      <div className="greetingContainer mt-4 text-center">
        <h3 className="greetingText">
          {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
        </h3>
        {firstName && (
          <img
            src="https://picsum.photos/100"
            alt="Greeting"
            className="greetingImage mt-3"
          />
        )}
      </div>
    </Container>
  );
};

export default App;
