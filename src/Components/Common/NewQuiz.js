import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import Questions from './Questions';
import StartQuiz from './StartQuiz';

export default function NewQuiz({courseData,nextIndex}) {
  // incorrect_answers[],option[],type: "multiple",question:,correct_answer:
  const { q1, q2, q3, q4, q5, qA1, qA2, qA3, qA4, qA5, qOP11, qOP12, qOP13, qOP14, qOP21, qOP22, qOP23, qOP24, qOP31, qOP32, qOP33, qOP34, qOP41, qOP42, qOP43, qOP44, qOP51, qOP52, qOP53, qOP54,Qtype} = courseData.Module[nextIndex - 1]
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [countdownTime, setCountdownTime] = useState(null);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [totalQuestion, settotalQuestion] = useState(0)
   const [result, setResult] = useState([])
  useEffect(() => {
    if (!q1) {
        settotalQuestion(0)
    }
    else if (!q2) {
        settotalQuestion(1)
if(Qtype==='boolean'){
        setResult([
          {question:q1,options:[qOP11, qOP12],incorrect_answers:[qOP12],correct_answer:qA1}
        ])
      }else{
        setResult([
          {question:q1,options:[qOP11, qOP12, qOP13, qOP14],incorrect_answers:[qOP12, qOP13, qOP14],correct_answer:qA1}
        ])}
      }
    else if (!q3) {
        settotalQuestion(2)
        if(Qtype==='boolean'){
          setResult([
            {question:q1,options:[qOP11, qOP12],incorrect_answers:[qOP12],correct_answer:qA1},
            {question:q2,options:[qOP21, qOP22],incorrect_answers:[qOP22],correct_answer:qA2}
          ])
        }else{
          setResult([
            {question:q1,options:[qOP11, qOP12, qOP13, qOP14],incorrect_answers:[qOP12, qOP13, qOP14],correct_answer:qA1},
            {question:q2,options:[qOP21, qOP22, qOP23, qOP24],incorrect_answers:[qOP22, qOP23, qOP24],correct_answer:qA2}
          ])}
    }
    else if (!q4) {
        settotalQuestion(3)
        if(Qtype==='boolean'){
          setResult([
            {question:q1,options:[qOP11, qOP12],incorrect_answers:[qOP12],correct_answer:qA1},
            {question:q2,options:[qOP21, qOP22],incorrect_answers:[qOP22],correct_answer:qA2},
            {question:q3,options:[qOP31, qOP32],incorrect_answers:[qOP32],correct_answer:qA3},
          ])
        }else{
          setResult([
            {question:q1,options:[qOP11, qOP12, qOP13, qOP14],incorrect_answers:[qOP12, qOP13, qOP14],correct_answer:qA1},
            {question:q2,options:[qOP21, qOP22, qOP23, qOP24],incorrect_answers:[qOP22, qOP23, qOP24],correct_answer:qA2},
            {question:q3,options:[qOP31, qOP32, qOP33, qOP34],incorrect_answers:[qOP32, qOP33, qOP34],correct_answer:qA3},
          ])}
    }
    else if (!q5) {
        settotalQuestion(4)
        if(Qtype==='boolean'){
          setResult([
            {question:q1,options:[qOP11, qOP12],incorrect_answers:[qOP12],correct_answer:qA1},
            {question:q2,options:[qOP21, qOP22],incorrect_answers:[qOP22],correct_answer:qA2},
            {question:q3,options:[qOP31, qOP32],incorrect_answers:[qOP32],correct_answer:qA3},
            {question:q4,options:[qOP41, qOP42],incorrect_answers:[qOP42],correct_answer:qA4},
          ])
        }else{
          setResult([
            {question:q1,options:[qOP11, qOP12, qOP13, qOP14],incorrect_answers:[qOP12, qOP13, qOP14],correct_answer:qA1},
            {question:q2,options:[qOP21, qOP22, qOP23, qOP24],incorrect_answers:[qOP22, qOP23, qOP24],correct_answer:qA2},
            {question:q3,options:[qOP31, qOP32, qOP33, qOP34],incorrect_answers:[qOP32, qOP33, qOP34],correct_answer:qA3},
            {question:q4,options:[qOP41, qOP42, qOP43, qOP44],incorrect_answers:[qOP42, qOP43, qOP44],correct_answer:qA4},
          ])}
    } else {
        settotalQuestion(5)
        if(Qtype==='boolean'){
          setResult([
            {question:q1,options:[qOP11, qOP12],incorrect_answers:[qOP12],correct_answer:qA1},
            {question:q2,options:[qOP21, qOP22],incorrect_answers:[qOP22],correct_answer:qA2},
            {question:q3,options:[qOP31, qOP32],incorrect_answers:[qOP32],correct_answer:qA3},
            {question:q4,options:[qOP41, qOP42],incorrect_answers:[qOP42],correct_answer:qA4},
            {question:q5,options:[qOP51, qOP52],incorrect_answers:[qOP52],correct_answer:qA5},
          ])
        }else{
          setResult([
            {question:q1,options:[qOP11, qOP12, qOP13, qOP14],incorrect_answers:[qOP12, qOP13, qOP14],correct_answer:qA1},
            {question:q2,options:[qOP21, qOP22, qOP23, qOP24],incorrect_answers:[qOP22, qOP23, qOP24],correct_answer:qA2},
            {question:q3,options:[qOP31, qOP32, qOP33, qOP34],incorrect_answers:[qOP32, qOP33, qOP34],correct_answer:qA3},
            {question:q4,options:[qOP41, qOP42, qOP43, qOP44],incorrect_answers:[qOP42, qOP43, qOP44],correct_answer:qA4},
            {question:q5,options:[qOP51, qOP52, qOP53, qOP54],incorrect_answers:[qOP52, qOP53, qOP54],correct_answer:qA5},
          ])}
    }
}, [q3, q4, q5, q1, q2])

  const startQuiz = (data, countdownTime) => {
    setLoading(true);
    setCountdownTime(countdownTime);

    setTimeout(() => {
      setData(data);
      setIsQuizStarted(true);
      setLoading(false);
    }, 1000);
  };

  const endQuiz = resultData => {
    setLoading(true);

    setTimeout(() => {
      setIsQuizStarted(false);
      setIsQuizCompleted(true);
      setResultData(resultData);
      setLoading(false);
    }, 2000);
  };

  return (
    <>
       {loading && <Loader />}
       {!loading && !isQuizStarted && !isQuizCompleted && (
        <StartQuiz results={result} startQuiz={startQuiz} numOfQuestions={totalQuestion}/>
      )}
       {!loading && isQuizStarted && (
        <Questions data={data} countdownTime={countdownTime} endQuiz={endQuiz} />
      )}
    
    </>
  )
}
