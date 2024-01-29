import React, { useCallback, useState } from 'react';
import questions from '../questions';
import quizCompleted from '../assets/quiz-complete.png'
import QuestionTimer  from './QuestionTimer';

export const Quiz = () => {
    const [userAnswers, setUserAnswer] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsOver = activeQuestionIndex === questions.length;

    const handleSelectAnswer = useCallback( function handleSelectAnswer(selectedAnswer) {
        setUserAnswer((prevUserAnswer) => {
            return [...prevUserAnswer, selectedAnswer];
        });
    })

    const handleSkipAnswer = useCallback(() => 
        handleSelectAnswer(null), [handleSelectAnswer]
    );

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
                <QuestionTimer 
                    key={activeQuestionIndex}
                    timeout={10000} 
                    onTimeout={handleSkipAnswer}
                />
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



