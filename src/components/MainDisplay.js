import { useState } from 'react';
import Logo from './shared/Logo';
import Flashcards from './Flashcards';
import Flashcard from './Flashcard';
import BottomInfo from './BottomInfo';
import Footer from './shared/Footer';
import EndMessage from './EndMessage';

const POINT_FIVE = 0.5;
const ONE = 1;
const ZERO = 0;

const shuffle = array => [...array].sort(() => Math.random() - POINT_FIVE);

export default function MainDisplay({ setInitialDisplay,  deck: { questions }, zapTarget }) {
  const [userAnswers, setUserAnswers] = useState([]);
  const [shuffledDeck, setShuffledDeck] = useState(shuffle(questions));

  const areAllAnswered = (userAnswers, deck) => userAnswers.length === deck.length;

  const amountZap = answers => answers.reduce((accumulator, current) => {
    if(current === 'remembered') {
      return accumulator+1;
    }
    return accumulator;
  }, ZERO);

  const rememberedAll = answers => !answers.includes('didnt-remember') && amountZap(answers) >= zapTarget;

  function resetRecall() {
    setInitialDisplay(true);
  }

  return (
    <div className="content">
      <Logo />

      <Flashcards>
        {
          shuffledDeck.map((flashcard, index) => (
            <Flashcard
              key={index}
              flashcardCounter={index+ONE}
              question={flashcard.question}
              answer={flashcard.answer}
              userAnswers={userAnswers}
              setUserAnswers={setUserAnswers}
            />
          ))
        }
      </Flashcards>
      
      <Footer>
        {
          areAllAnswered(userAnswers, questions) &&
          <EndMessage rememberedAll={rememberedAll(userAnswers)} />
        }
        <BottomInfo currentDeck={questions} resetRecall={resetRecall} userAnswers={userAnswers} />
      </Footer>
    </div>
  );
}
