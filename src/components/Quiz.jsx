import React, { useCallback, useState } from 'react';
import questions from '../questions';
import quizCompleted from '../assets/quiz-complete.png'
import { Question } from './Question';

export const Quiz = () => {
    const [answerState, setAnswerState] = useState('');
    const [userAnswers, setUserAnswer] = useState([]);

    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length -1;
    const quizIsOver = activeQuestionIndex === questions.length;

    const handleSelectAnswer = useCallback( function handleSelectAnswer(
        selectedAnswer
        ) {
        setAnswerState('answered')
        setUserAnswer((prevUserAnswer) => {
            return [...prevUserAnswer, selectedAnswer];
        });

        setTimeout(() => {
            if (selectedAnswer === questions[activeQuestionIndex].answers[0]) {
              setAnswerState('correct')  
            } else {
              setAnswerState('wrong') 
            }

            setTimeout(() => {
                setAnswerState('');
            }, 2000)
        }, 1000);
    },
    [activeQuestionIndex]);

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
                questionText={questions[activeQuestionIndex].text}
                answers={questions[activeQuestionIndex].answers}
                answerState={answerState}
                selectedAnswer={userAnswers[userAnswers.length - 1]}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}



