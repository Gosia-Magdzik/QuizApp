import React, { useCallback, useState } from 'react';
import questions from '../questions';
import { Question } from './Question';
import { Summary } from './Summary';

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
        return  <Summary userAnswers={userAnswers} />
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



