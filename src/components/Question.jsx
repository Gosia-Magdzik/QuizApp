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

    let timer = 20000;

    if (answer.selectedAnswer) {
        timer = 2000;
    }
    if (answer.isCorrect !== null) {
        timer = 3000;
    }

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
            key={timer}
            timeout={timer} 
            onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
            mode={answerState}
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
