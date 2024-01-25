import React from 'react';
import logo from '../assets/quiz-logo.png'

export const Header = () => {
  return (
    <header className='header'>
        <img src={logo} alt='logo' />
        <h1>ReactQuiz</h1>
    </header>
  )
}
