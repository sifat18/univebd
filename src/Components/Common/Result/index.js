import React, { useState } from 'react';
import Stats from './Stats';
import QNA from './QNA';
import { Container, Nav } from 'react-bootstrap';

const Result = ({ totalQuestions,
  correctAnswers,
  timeTaken,
  questionsAndAnswers,
  nextMod, nextIndex, maxMod, handl }) => {

  const [activeTab, setActiveTab] = useState('1');


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

      {activeTab === '1' && (
        <Stats
          totalQuestions={totalQuestions}
          correctAnswers={correctAnswers}
          timeTaken={timeTaken}

        />
      )}
      {activeTab === '2' && <QNA questionsAndAnswers={questionsAndAnswers} />}
      <br />
      {nextIndex <= maxMod && nextMod &&
        <p className='btn btn-info text-white w-50 d-block mt-3 mx-auto' onClick={() => handl(nextIndex, nextMod)}> Go to Next Module</p>
      }
    </Container>
  );
};


export default Result;
