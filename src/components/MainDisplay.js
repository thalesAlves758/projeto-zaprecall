import Logo from './shared/Logo';
import Flashcards from './Flashcards';
import Flashcard from './Flashcard';
import BottomInfo from './BottomInfo';
import Footer from './Footer';
import EndMessage from './EndMessage';
import { useState } from 'react';

const POINT_FIVE = 0.5;
const ONE = 1;
const ZERO = 0;

const shuffle = array => [...array].sort(() => Math.random() - POINT_FIVE);

export default function MainDisplay({ deck: { questions }, zapTarget }) {
  const initialUserAnswers = {
    amountAnswers: 0,
    answers: [],
  };

  const [userAnswers, setUserAnswers] = useState(initialUserAnswers);

  const areAllAnswered = (amountAnswers, deck) => amountAnswers === deck.length;

  const amountZap = answers => answers.reduce((accumulator, current) => {
    if(current === 'remembered') {
      return accumulator+1;
    }
    return accumulator;
  }, ZERO);

  const rememberedAll = answers => !answers.includes('didnt-remember') && amountZap(answers) >= zapTarget;

  return (
    <div className="content">
      <Logo />

      <Flashcards>
        { shuffle(questions).map((flashcard, index) => (
          <Flashcard
            key={index}
            flashcardCounter={index+ONE}
            question={flashcard.question}
            answer={flashcard.answer}
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
          />
        )) }
      </Flashcards>
      
      <Footer>
        {
          areAllAnswered(userAnswers.amountAnswers, questions) &&
          <EndMessage rememberedAll={rememberedAll(userAnswers.answers)} />
        }
        <BottomInfo amountQuestions={questions.length} userAnswers={userAnswers} />
      </Footer>
    </div>
  );
}
