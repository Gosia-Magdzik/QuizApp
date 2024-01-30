import React from 'react';
import quizCompleted from '../assets/quiz-complete.png'

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
                <li>
                    <h3>2</h3>
                    <p className='question'>question text</p>
                    <p className='user-answer'>user's answer</p>
                </li>
            </ol>
        </div>
  )
}
