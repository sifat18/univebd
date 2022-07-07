import React, { useState } from 'react'
import { Button, Container, Toast } from 'react-bootstrap';
import Offline from './Offline';
import shuffle from './shuffle';

export default function StartQuiz({ startQuiz, numOfQuestions, results }) {
  const [countdownTime, setCountdownTime] = useState({
    hours: 0,
    minutes: 120,
    seconds: 0,
  });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [offline, setOffline] = useState(false);



  let allFieldsSelected = false;
  if (

    numOfQuestions &&
    (countdownTime.hours || countdownTime.minutes || countdownTime.seconds)
  ) {
    allFieldsSelected = true;
  }

  const fetchData = () => {
    setProcessing(true);

    if (error) setError(null);

    if (results) {
      setTimeout(() => {

        if (numOfQuestions < 0) {
          const message = (
            <p>
              no questions
              <br />

            </p>
          );

          setProcessing(false);
          setError({ message });

          return;
        }

        setProcessing(false);
        startQuiz(
          results,
          countdownTime.hours + countdownTime.minutes + countdownTime.seconds
        );
      }, 1000)
    } else {
      setTimeout(() => {
        if (!navigator.onLine) {
          setOffline(true);
        } else {
          setProcessing(false);
          setError(error);
        }
      }, 1000)
    };
  }

  if (offline) return <Offline />;

  return (
    <Container className='text-center'>
      <div>

        <Button
          variant='primary'
          size="lg"
          content={processing ? 'Processing...' : 'Play Now'}
          onClick={fetchData}
          disabled={!allFieldsSelected || processing}
        >Start Quiz</Button>
      </div>
      <br />
    </Container>
  )
}
