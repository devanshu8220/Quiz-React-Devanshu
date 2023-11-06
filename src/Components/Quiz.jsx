import React, { useState,useCallback} from 'react';
import QUESTIONS from "../questions";  
import quizComplete from '../assets/quiz-complete.png';;
import QuestionTimer from './QuestionTimer';

export default function Quiz() {
    
  const [usersAnswers, setUsersAnswers] = useState([]);
 
  const activeQuestionIndex = usersAnswers.length;
  
  const quizIsComplete=activeQuestionIndex===QUESTIONS.length;
  const handleSelectAnswer =useCallback( (answer) => {
    setUsersAnswers((prevState)=>{
        return [...prevState,answer]
  }) 
  },[]);
  const handleSkipAnswer=useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer] )
         if(quizIsComplete){
            return(
                <div id='summary'>
                    <h2>Quiz Completed!</h2>
                    <img src={quizComplete} alt='trophy icon' />
                </div>
            )
         } 
         const shuffleAnswers=[...QUESTIONS[activeQuestionIndex].answers]
  shuffleAnswers.sort(()=>Math.random()-0.5);   
         
  return (
    <div id='quiz'>
    <div id='question'>
    <QuestionTimer timeout={10000} onTimeout={handleSkipAnswer} key={activeQuestionIndex}/>
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id='answers'>
        {shuffleAnswers.map((answer) => (
          <li key={answer} className='answer'>
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
    </div> 
  );
        
}
