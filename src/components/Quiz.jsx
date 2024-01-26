import React, { useState } from 'react';
import questions from '../questions';
import quizCompleted from '../assets/quiz-complete.png'

export const Quiz = () => {
    const [userAnswers, setUserAnswer] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsOver = activeQuestionIndex === questions.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswer((prevUserAnswer) => {
            return [...prevUserAnswer, selectedAnswer];
        });
    }

    if (quizIsOver) {
        return <div id='summary'>
                <img src={quizCompleted} />
                <h2>Quiz Completed</h2>
            </div>
    } 

    const shuffledAnswer = [...questions[activeQuestionIndex].answers];
        shuffledAnswer.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question" >
            <h2>{questions[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {shuffledAnswer.map(answer => (
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



