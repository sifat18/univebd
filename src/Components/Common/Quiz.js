import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import MCQ from './MCQ'
import './style.css'
export default function Quiz({ courseData, maxMod, handl, nextIndex, nextMod }) {
    const { q1, q2, q3, q4, q5, qA1, qA2, qA3, qA4, qA5, qOP11, qOP12, qOP13, qOP14, qOP21, qOP22, qOP23, qOP24, qOP31, qOP32, qOP33, qOP34, qOP41, qOP42, qOP43, qOP44, qOP51, qOP52, qOP53, qOP54 } = courseData.Module[nextIndex - 1]
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [totalQuestion, settotalQuestion] = useState(0)
    // const [showScore, setshowScore] = useState(false)
    useEffect(() => {
        if (!q3) {
            settotalQuestion(2)
        }
        else if (!q4) {
            settotalQuestion(3)
        }
        else if (!q5) {
            settotalQuestion(4)
        } else {
            settotalQuestion(5)

        }
    }, [q3, q4, q5])




    const updateScoreQuestion = (ans, option) => {
        if (ans === option) {
            setScore(score + 1)
        }
        setCurrentQuestion(currentQuestion + 1)

    }
    return (

        <>
            <Container className=''>
                {currentQuestion === 0 && <MCQ question={q1} cor={qA1} option1={qOP11} option2={qOP12} option3={qOP13} option4={qOP14} handlescore={updateScoreQuestion} />}
                {currentQuestion === 1 && <MCQ question={q2} cor={qA2} option1={qOP21} option2={qOP22} option3={qOP23} option4={qOP24} handlescore={updateScoreQuestion} />}
                {q3 && currentQuestion === 2 && <MCQ question={q3} cor={qA3} option1={qOP31} option2={qOP32} option3={qOP33} option4={qOP34} handlescore={updateScoreQuestion} />}
                {q4 && currentQuestion === 3 && <MCQ question={q4} cor={qA4} option1={qOP41} option2={qOP42} option3={qOP43} option4={qOP44} handlescore={updateScoreQuestion} />}
                {q5 && currentQuestion === 4 && <MCQ question={q5} cor={qA5} option1={qOP51} option2={qOP52} option3={qOP53} option4={qOP54} handlescore={updateScoreQuestion} />}

                {currentQuestion === totalQuestion && <p>You scored {score}</p>}
                {nextIndex <= maxMod && nextMod && currentQuestion === totalQuestion &&
                    <p className='btn btn-info text-white w-50 d-block mt-3 mx-auto' onClick={() => handl(nextIndex, nextMod)}> Go to Next Module</p>
                }

            </Container>
        </>
    )
}
