import React from 'react'
import logoImgz from '../assets/quiz-logo.png';
export default function Header() {
  return (
    <header>
      <img src={logoImgz} />
      <h1>ReactQuiz</h1>
    </header>
  )
}
