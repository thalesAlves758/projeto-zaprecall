import { useState } from 'react';
import arrow from '../assets/img/setinha.png';
import QuestionIcon from './QuestionIcon';

function QuestionContainer({ question, answer, setAnswered, setUserAnswer, replyQuestion }) {
  const [face, setFace] = useState('question');

  function turnToAnswer() {
    setFace('answer');
  }

  function reply(text) {
    setAnswered(true);
    setUserAnswer(text);
    replyQuestion(text);
  }

  return (
    <div className={`question-container ${face === 'question' ? '' : 'turned'}`}>
      {
        face === 'question' ?
        <div className="question face">
          <h2>{question}</h2>
          <img src={arrow} onClick={turnToAnswer} alt="Setinha" />
        </div> : 
        <div className="answer face">
          <h2>{answer}</h2>
          <div className="buttons">
            <button className="red" onClick={() => reply('didnt-remember')}>Não lembrei</button>
            <button className="yellow" onClick={() => reply('almost')}>Quase não lembrei</button>
            <button className="green" onClick={() => reply('remembered')}>Zap!</button>
          </div>
        </div>
      }
    </div>
  );
}

export default function Flashcard ({ question, answer, flashcardCounter, userAnswers, setUserAnswers }) {
  const [face, setFace] = useState('hidden-question');
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');

  function showQuestion () {
    setFace('showed-question');
  }

  function replyQuestion(text) {
    const newUserAnswers = {...userAnswers};
    newUserAnswers.amountAnswers++;
    newUserAnswers.answers.push(text);
    setUserAnswers(newUserAnswers);
  }

  return (
    <div className={`flashcard ${answered ? userAnswer : ''}`} onClick={!answered ? showQuestion : null}>
      {
        face === 'hidden-question' || answered ?
        <div className="question-title">
          <h2>Pergunta {flashcardCounter}</h2>
          <QuestionIcon userAnswer={userAnswer} />
        </div> :
        <QuestionContainer
          question={question}
          answer={answer}
          setAnswered={setAnswered}
          setUserAnswer={setUserAnswer}
          replyQuestion={replyQuestion}
        />
      }
    </div>
  );
}
