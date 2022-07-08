import React from 'react';

// import ShareButton from '../ShareButton';
// import timeConverter from './timeConverter';
import { Container, ListGroup, Placeholder } from 'react-bootstrap';
import calculateScore from './calculateScore';
import calculateGrade from './calculateGrade';
import timeConverter from '../timeConverter';

const Stats = ({
  totalQuestions,
  correctAnswers,
  timeTaken,

}) => {
  const score = calculateScore(totalQuestions, correctAnswers);
  const { grade, remarks } = calculateGrade(score);
  const { hours, minutes, seconds } = timeConverter(timeTaken);

  return (
    <Container className='text-center'>
      <ListGroup className='mx-auto mt-3 ps-5'>

        <ListGroup.Item   >
          <b>{remarks}</b>
        </ListGroup.Item>
        <ListGroup.Item action  >
          <strong>Your Grade:</strong> {grade}
        </ListGroup.Item>
        <ListGroup.Item action  >
          <strong>Total Questions:</strong> {totalQuestions}
        </ListGroup.Item>
        <ListGroup.Item action  >
          <strong>Correct Answers:</strong> {correctAnswers}
        </ListGroup.Item>
        <ListGroup.Item action  >
          <strong> Your Score:</strong> {score}%
        </ListGroup.Item>
        <ListGroup.Item><strong> Passing Score:</strong> 60%</ListGroup.Item>
        <ListGroup.Item>  <strong> Time Taken:</strong>{' '}
          {`${Number(hours)}h ${Number(minutes)}m ${Number(seconds)}s`}</ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
      </ListGroup >

    </Container >
  );
};


export default Stats;
