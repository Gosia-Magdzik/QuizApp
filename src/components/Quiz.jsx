import React, { useCallback, useState } from 'react';
import questions from '../questions';
import quizCompleted from '../assets/quiz-complete.png'
import QuestionTimer  from './QuestionTimer';
import { Answers } from './Answers';

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
            <div id="question" >
                <QuestionTimer 
                    key={activeQuestionIndex}
                    timeout={10000} 
                    onTimeout={handleSkipAnswer}
                />
                <h2>{questions[activeQuestionIndex].text}</h2>
                <Answers 
                    key={activeQuestionIndex}
                    answers={questions[activeQuestionIndex].answers}
                    selectedAnswer={userAnswers[userAnswers.length - 1]}
                    answerState={answerState}
                    onSelect={handleSelectAnswer}
                />
            </div>
        </div>
    )
}



