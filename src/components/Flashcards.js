import arrow from '../assets/img/setinha.png';
import { useState } from 'react';

const POINT_FIVE = 0.5;
const ONE = 1;

function QuestionContainer({ question, answer, setAnswered, setUserAnswer }) {
  const [face, setFace] = useState('question');

  function turnToAnswer() {
    setFace('answer');
  }

  function reply(text) {
    setAnswered(true);
    setUserAnswer(text);
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

function Flashcard ({ question, answer, flashcardCounter }) {
  const [face, setFace] = useState('hidden-question');
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');

  function showQuestion () {
    setFace('showed-question');
  }

  function getIconName(text) {
    switch(text) {
      case 'didnt-remember':
        return 'close-circle';

      case 'almost':
        return 'help-circle';

      case 'remembered':
        return 'checkmark-circle';

      default:
        return 'play-outline';
    }
  }

  return (
    <div className={`flashcard ${answered ? userAnswer : ''}`} onClick={!answered ? showQuestion : null}>
      {
        face === 'hidden-question' || answered ?
        <div className="question-title">
          <h2>Pergunta {flashcardCounter}</h2>
          <ion-icon name={getIconName(userAnswer)}></ion-icon>
        </div> :
        <QuestionContainer
          question={question}
          answer={answer}
          setAnswered={setAnswered}
          setUserAnswer={setUserAnswer}
        />
      }
    </div>
  );
}

export default function Flashcards ({ deck }) {
  const shuffle = array => [...array].sort(() => Math.random() - POINT_FIVE);

  return (
    <div className="flashcards">
      { shuffle(deck).map((flashcard, index) => (
        <Flashcard
          key={index}
          flashcardCounter={index+ONE}
          question={flashcard.question}
          answer={flashcard.answer}
        />
      )) }
    </div>
  );
}
