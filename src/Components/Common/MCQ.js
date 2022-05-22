import React from 'react'
import Checkbox from './Checkbox'

export default function MCQ({ question, option1, option2, option3, option4, cor, handlescore }) {
    return (
        <div>
            <p className='ms-5 ps-5 fs-3'>{question}?</p>
            <div onClick={() => handlescore(cor, option1)} className="answers w-50 mx-auto" >
                <Checkbox className={'answer'} text={option1} />
            </div>
            <div onClick={() => handlescore(cor, option2)} className="answers w-50 mx-auto">
                <Checkbox className={'answer'} text={option2} />
            </div>
            <div onClick={() => handlescore(cor, option3)} className="answers w-50 mx-auto">
                <Checkbox className={'answer'} text={option3} />
            </div>
            <div onClick={() => handlescore(cor, option4)} className="answers w-50 mx-auto">
                <Checkbox className={'answer'} text={option4} />
            </div>

        </div>
    )
}
