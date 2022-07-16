import React, { useState } from 'react';
import Stats from './Stats';
import QNA from './QNA';
import { Container, Nav } from 'react-bootstrap';
import axios from 'axios';
import useAuth from '../../Context/useAuth';

const Result = ({ totalQuestions,
  correctAnswers,
  timeTaken,
  questionsAndAnswers,
  nextMod, nextIndex, maxMod, handl, total_modules, total_quizes, modComplete, id }) => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('1');

  // 
  const progressUpdate = (e) => {
    e.preventDefault();
    if (modComplete < total_modules) {
      const update = { email: user.email, id: id, mod: modComplete + 1, progress: 100 * (modComplete + 1) / total_modules }
      axios.put(`https://fierce-woodland-01411.herokuapp.com/orderUpdate`, update).then(res => {
        if (res.data.modifiedCount) {
          handl(nextIndex, nextMod)
        }
      })
      // 
    }
  }

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
        <p className='btn btn-info text-white w-50 d-block mt-3 mx-auto' onClick={(e) => progressUpdate(e)}> Go to Next Module</p>
      }
    </Container>
  );
};


export default Result;
