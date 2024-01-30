import React, { useCallback, useState } from 'react';
import questions from '../questions';
import quizCompleted from '../assets/quiz-complete.png'
import { Question } from './Question';

export const Quiz = () => {
    const [userAnswers, setUserAnswer] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsOver = activeQuestionIndex === questions.length;

    const handleSelectAnswer = useCallback( function handleSelectAnswer(
        selectedAnswer
        ) {
        setUserAnswer((prevUserAnswer) => {
            return [...prevUserAnswer, selectedAnswer];
        });
    },
    []);

    const handleSkipAnswer = useCallback(() => 
        handleSelectAnswer(null), [handleSelectAnswer]
    );

    if (quizIsOver) {
        return <div id='summary'>
                <img src={quizCompleted} />
                <h2>Quiz Completed</h2>
            </div>
    } 
    
    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}



