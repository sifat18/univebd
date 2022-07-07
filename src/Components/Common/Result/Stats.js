import React from 'react';

// import ShareButton from '../ShareButton';
// import timeConverter from './timeConverter';
import { Container, Placeholder } from 'react-bootstrap';
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
    <Container>
      <Placeholder xs={12} bg='light'>
        {remarks}
      </Placeholder >
      <Placeholder xs={12} bg='light'>
        Grade: {grade}
      </Placeholder >
      <Placeholder xs={12} bg='light'>
        Total Questions: {totalQuestions}
      </Placeholder >
      <Placeholder xs={12} bg='light'>
        Correct Answers: {correctAnswers}
      </Placeholder >
      <Placeholder xs={12} bg='light'>
        Your Score: {score}%
      </Placeholder >
      <Placeholder xs={12} bg='light'>
        Passing Score: 60%
      </Placeholder >
      <Placeholder xs={12} bg='light'>
        Time Taken:{' '}
        {`${Number(hours)}h ${Number(minutes)}m ${Number(seconds)}s`}
      </Placeholder >

    </Container>
  );
};


export default Stats;
