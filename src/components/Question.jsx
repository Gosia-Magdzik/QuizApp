import React, { useState } from 'react';
import QuestionTimer from './QuestionTimer';
import { Answers } from './Answers';
import questions from '../questions';

export const Question = ({
        index,
        onSelectAnswer, 
        onSkipAnswer,  
    }) => {

    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        });

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: questions[index].answers[0] === answer
            });

            setTimeout(() => {
                onSelectAnswer(answer);
            }, 3000);
        }, 2000);
    }

    let answerState = '';

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'answered'
    }

    return (
    <div id="question" >
        <QuestionTimer 
            timeout={10000} 
            onTimeout={onSkipAnswer}
        />
        <h2>{questions[index].text}</h2>
        <Answers 
            answers={questions[index].answers}
            selectedAnswer={answer.selectedAnswer}
            answerState={answerState}
            onSelect={handleSelectAnswer}
        />
    </div>
  )
}
