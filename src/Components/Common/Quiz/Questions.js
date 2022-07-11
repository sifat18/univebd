import React, { useState } from 'react';

import he from 'he';
import Countdown from './Countdown';
import getLetter from './getLetter';
import { Container, ListGroup, Toast, Button, ToastContainer, } from 'react-bootstrap';
const Questions = ({ data, countdownTime, endQuiz }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userSlectedAns, setUserSlectedAns] = useState(null);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const [timeTaken, setTimeTaken] = useState(null);

  const handleItemClick = (e) => {
    // e.preventDefault()
    setUserSlectedAns(e.target.name);
  };

  const handleNext = () => {
    let point = 0;
    if (userSlectedAns === he.decode(data[questionIndex].correct_answer)) {
      point = 1;
    }

    const qna = questionsAndAnswers;
    qna.push({
      question: he.decode(data[questionIndex].question),
      user_answer: userSlectedAns,
      correct_answer: he.decode(data[questionIndex].correct_answer),
      point
    });

    if (questionIndex === data.length - 1) {
      return endQuiz({
        totalQuestions: data.length,
        correctAnswers: correctAnswers + point,
        timeTaken,
        questionsAndAnswers: qna
      });
    }

    setCorrectAnswers(correctAnswers + point);
    setQuestionIndex(questionIndex + 1);
    setUserSlectedAns(null);
    setQuestionsAndAnswers(qna);
  };

  const timeOver = timeTaken => {
    return endQuiz({
      totalQuestions: data.length,
      correctAnswers,
      timeTaken,
      questionsAndAnswers
    });
  };

  return (
    <Container className='text-center'>

      <ToastContainer position='' className='mb-3 mx-auto  '>
        <Toast className='w-100 p-5' >
          <Toast.Header closeButton={false}>
            {`Question No.${questionIndex + 1} of ${data.length}`}
            <strong className="me-auto"></strong>
            <Countdown
              countdownTime={countdownTime}
              timeOver={timeOver}
              setTimeTaken={setTimeTaken}
            />
          </Toast.Header>
          <Toast.Body>
            <b>{`Q. ${he.decode(data[questionIndex].question)}`}</b>
            <hr />
            <h5>Please choose one of the following answers:</h5>

            <ListGroup>
              {data[questionIndex].options.map((option, i) => {
                const letter = getLetter(i);
                const decodedOption = he.decode(option);
                return (
                  <ListGroup.Item action key={decodedOption}
                    name={decodedOption}
                    active={userSlectedAns === decodedOption}
                    onClick={(e) => handleItemClick(e)}>
                    <b style={{ marginRight: '8px' }}>{letter}</b>
                    {decodedOption}

                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Toast.Body>
        </Toast>

      </ToastContainer >
      <Button
        variant='primary'
        onClick={handleNext}
        className='mb-5 mx-auto d-block'
        size="lg"
        disabled={!userSlectedAns}
      >Next</Button>

    </Container>

  );
};

export default Questions;
