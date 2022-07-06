import React, { useState } from 'react'
import { Button, Container, Toast } from 'react-bootstrap';
import COUNTDOWN_TIME from './countdownTime';
import Offline from './Offline';
import shuffle from './shuffle';

export default function StartQuiz({ startQuiz,numOfQuestions,results }) {
    const [countdownTime, setCountdownTime] = useState({
      hours: 0,
      minutes: 120,
      seconds: 0,
    });
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [offline, setOffline] = useState(false);
  
    const handleTimeChange = (e, { name, value }) => {
      setCountdownTime({ ...countdownTime, [name]: value });
    };
  
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
      
      if(results){
      setTimeout(() => {
    
            if (numOfQuestions<0) {
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
  
            results.forEach(element => {
              element.options = shuffle([
                element.correct_answer,
                ...element.incorrect_answers,
              ]);
            });
  
            setProcessing(false);
            startQuiz(
              results,
              countdownTime.hours + countdownTime.minutes + countdownTime.seconds
            );
          }, 1000)
        }else{
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
      <Container>
        <div>
        <Toast>
  <Toast.Header>
  
    <strong className="me-auto">Quiz</strong>
  </Toast.Header>
  <Toast.Body>  
          
          
                         </Toast.Body>
</Toast>
                
               
                  <Button
                    primary
                    size="big"
                    icon="play"
                    labelPosition="left"
                    content={processing ? 'Processing...' : 'Play Now'}
                    onClick={fetchData}
                    disabled={!allFieldsSelected || processing}
                  />
        </div>
        <br />
      </Container>
  )
}
