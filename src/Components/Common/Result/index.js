import axios from 'axios';
import { useState } from 'react';
import { Button, Container, Modal, Nav } from 'react-bootstrap';
import useAuth from '../../Context/useAuth';
import calculateScore from './calculateScore';
import QNA from './QNA';
import Stats from './Stats';

const Result = ({ totalQuestions,
  correctAnswers,
  timeTaken,
  questionsAndAnswers,
  nextMod, nextIndex, maxMod, handl, total_modules, total_quizes, modComplete, id, mod_complete, index }) => {
  // getting user 
  const { user } = useAuth()
  // tab change
  const [activeTab, setActiveTab] = useState('1');
  //  calculate score
  const score = calculateScore(totalQuestions, correctAnswers);
  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //progress update update
  const progressUpdate = (e) => {
    e.preventDefault();
    // console.log(score>66,score)
    if (modComplete < total_modules && !mod_complete && score > 60) {
      // sending update info to backend
      const update = { index: index, email: user.email, id: id, mod: modComplete + 1, progress: 100 * (modComplete + 1) / total_modules }
      axios.put(`https://fierce-woodland-01411.herokuapp.com/api/orderUpdate`, update).then(res => {
        if (res.data.modifiedCount) {
          // move to next module 
          handl(nextIndex, nextMod)
        }
        console.log(res.data)
        handleShow()

      })
      // 
    } else {
      // if not pass or passed previously
      handleShow()
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


      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        {score < 60 && !mod_complete &&<h2 className='mx-auto ps-5'>OOOPS!!! You Failed</h2>}
          {score < 60 && mod_complete && <h2 className='mx-auto ps-5'>you already progressed</h2>}
        </Modal.Header>
        <Modal.Body>
          {score < 60 && !mod_complete && <p className="text-center"> Score Atleast 60% to progress the course</p>}
          {score && mod_complete &&<p className="text-center"> You already completed this although you passed last time </p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>

      </Modal>
    </Container>
  );
};


export default Result;
