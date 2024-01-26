import React, { useState } from 'react';
import questions from '../questions';

export const Quiz = () => {
    const [userAnswers, setUserAnswer] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const fixedAnswer = [...questions[activeQuestionIndex].answers];
    fixedAnswer.sort(() => Math.random() - 0.5);

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswer((prevUserAnswer) => {
            return [...prevUserAnswer, selectedAnswer];
        });
    }

    return (
        <div id="quiz">
            <div id="question" >
            <h2>{questions[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {questions[activeQuestionIndex].answers.map(answer => (
                   <li key={answer} className='answer'>
                        <button onClick={() => handleSelectAnswer(answer)}>
                            {answer}
                        </button>
                   </li> 
                ))}
            </ul>
        </div>
        </div>
    )
}



