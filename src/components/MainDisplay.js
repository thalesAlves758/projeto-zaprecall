import Logo from './shared/Logo';
import Flashcards from './Flashcards';
import Flashcard from './Flashcard';
import BottomInfo from './BottomInfo';
import Footer from './Footer';
import EndMessage from './EndMessage';
import { useState } from 'react';

const POINT_FIVE = 0.5;
const ONE = 1;

const shuffle = array => [...array].sort(() => Math.random() - POINT_FIVE);

export default function MainDisplay({ deck: { questions } }) {
  const initialUserAnswers = {
    amountAnswers: 0,
    answers: [],
  };

  const [userAnswers, setUserAnswers] = useState(initialUserAnswers);

  const areAllAnswered = (amountAnswers, deck) => amountAnswers === deck.length;

  const rememberedAll = answers => !answers.includes('didnt-remember');

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
