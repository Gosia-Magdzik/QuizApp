import React, { useState } from 'react';
import questions from '../questions';

export const Quiz = () => {

    const [userAnswers, setUserAnswer] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    return (
        <div id="question" >
            <h2>{questions[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {questions[activeQuestionIndex].answers.map(answer => (
                   <li key={answer} className='answer'>
                        <button>
                            {answer}
                        </button>
                   </li> 
                ))}
            </ul>
        </div>
    )
}
