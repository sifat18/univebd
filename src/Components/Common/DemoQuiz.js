import React, { useState } from 'react'
import './style.css'
export default function DemoQuiz({question,cor,option1,option2,option3,option4}) {
    const [choice, setChoice] = useState(null);
const handleChange = (event) => {
    setChoice(event.target.value)
    console.log(choice)
  }

    return (
        <>
         <p>{question}</p>
     <div className={choice === option1?'bg-success':''} >
        <input type="radio"
          onChange={handleChange} 
           value={option1}
          checked={choice === option1}
          
           /> {option1}
      </div>
      <div className={choice === option2?'bg-success':''}>
        <input type="radio"
          value={option2}
          checked={choice === option2}
          onChange={handleChange} /> {option2}
          </div>
      <div className={choice === option3?'bg-success':''}>
        <input type="radio"
          value={option3}
          checked={choice === option3}
          onChange={handleChange} /> {option3}
          </div>
      <div   className={choice === option4?'bg-success':''}>
        <input type="radio"
          value={option4}
          checked={choice === option4}
          onChange={handleChange} /> {option4}
          </div>
      
      </>
       )
}
