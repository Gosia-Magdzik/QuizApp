import React from 'react';
import quizCompleted from '../assets/quiz-complete.png'
import questions from '../questions';

export const Summary = ({ userAnswers }) => {


    return (
        <div id='summary'>
            <img src={quizCompleted} />
            <h2>Quiz Completed</h2>
            <div id='summary-stats'>
                <p>
                    <span className='number'>10%</span>
                    <span className='number'>skipped</span>
                </p>
                <p>
                    <span className='number'>10%</span>
                    <span className='number'>answered correctly</span>
                </p>
                <p>
                    <span className='number'>10%</span>
                    <span className='number'>answered correctly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    return (
                    <li key={answer}>
                        <h3>{index + 1}</h3>
                        <p className='question'>{questions[index].text}</p>
                        <p className='user-answer'>{answer}</p>
                    </li>
                )
                })}

            </ol>
        </div>
  )
}
