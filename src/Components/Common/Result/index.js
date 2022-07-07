import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import QNA from './QNA';
import { Container, ListGroup, Button, Nav } from 'react-bootstrap';

const Result = ({ totalQuestions,
  correctAnswers,
  timeTaken,
  questionsAndAnswers,
}) => {

  const [activeTab, setActiveTab] = useState('1');

  const handleTabClick = (e) => {
    e.preventDefault()
    console.log(e)
    setActiveTab(e.target.outerText);
  };
  const handleSelect = (eventKey) => setActiveTab(eventKey);
  return (
    <Container>
      <Nav variant="pills" activeKey={activeTab} onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link eventKey="1" >Stats</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2">QNA</Nav.Link>
        </Nav.Item>

      </Nav>
      {/* <ListGroup >
        <ListGroup.Item
          name="Stats"
          action
          onClick={(e) => handleTabClick(e)}
        >Stats</ListGroup.Item>
        <ListGroup.Item
          name="QNA"
          action
          onClick={(e) => handleTabClick(e)}
        >QNA</ListGroup.Item>
      </ListGroup> */}
      {activeTab === '1' && (
        <Stats
          totalQuestions={totalQuestions}
          correctAnswers={correctAnswers}
          timeTaken={timeTaken}

        />
      )}
      {activeTab === '2' && <QNA questionsAndAnswers={questionsAndAnswers} />}
      <br />
    </Container>
  );
};


export default Result;
