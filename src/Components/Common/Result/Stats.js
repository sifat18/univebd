import React from 'react';
import PropTypes from 'prop-types';

// import ShareButton from '../ShareButton';
import calculateScore from '../calculateScore';
import calculateGrade from '../calculateGrade';
import timeConverter from '../timeConverter';
import { Container, Placeholder } from 'react-bootstrap';

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
      {/* <div style={{ marginTop: 35 }}>
        <Button
          primary
          content="Play Again"
          onClick={replayQuiz}
          size="big"
          icon="redo"
          labelPosition="left"
          style={{ marginRight: 15, marginBottom: 8 }}
        />
        <Button
          color="teal"
          content="Back to Home"
          onClick={resetQuiz}
          size="big"
          icon="home"
          labelPosition="left"
          style={{ marginBottom: 8 }}
        />
        <ShareButton />
      </div> */}
    </Container>
  );
};


export default Stats;
