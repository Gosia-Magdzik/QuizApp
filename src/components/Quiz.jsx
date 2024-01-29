import React, { useCallback, useRef, useState } from 'react';
import questions from '../questions';
import quizCompleted from '../assets/quiz-complete.png'
import QuestionTimer  from './QuestionTimer';

export const Quiz = () => {
    const shuffledAnswers = useRef();
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

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...questions[activeQuestionIndex].answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
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
                <ul id="answers">
                    {shuffledAnswers.current.map(answer => {
                       const isSelected = userAnswers[userAnswers.length - 1] === answer
                       let cssClass = '';

                       if (answerState === 'answered' && isSelected) {
                        cssClass = 'selected'
                       }

                       if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                        cssClass = answerState;
                       }
                        
                        return (
                            <li key={answer} className='answer'>
                                <button 
                                    onClick={() => handleSelectAnswer(answer)}
                                    className={cssClass}
                                >
                                    {answer}
                                </button>
                            </li> 
                        )                            
                    })}
                </ul>
            </div>
        </div>
    )
}



