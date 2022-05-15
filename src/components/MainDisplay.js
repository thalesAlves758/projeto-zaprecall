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
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentDeck, setCurrentDeck] = useState(questions);
  const [shuffledDeck, setShuffledDeck] = useState(shuffle(currentDeck));
  const [timesPlayed, setTimesPlayed] = useState(1);

  const areAllAnswered = (userAnswers, deck) => userAnswers.length === deck.length;

  const amountZap = answers => answers.reduce((accumulator, current) => {
    if(current === 'remembered') {
      return accumulator+1;
    }
    return accumulator;
  }, ZERO);

  const rememberedAll = answers => !answers.includes('didnt-remember') && amountZap(answers) >= zapTarget;

  function resetRecall() {
    setUserAnswers([]);
    setCurrentDeck([...questions]);
    setShuffledDeck(shuffle(currentDeck));
    setTimesPlayed(timesPlayed+1);
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
              timesPlayed={timesPlayed}
            />
          ))
        }
      </Flashcards>
      
      <Footer>
        {
          areAllAnswered(userAnswers, currentDeck) &&
          <EndMessage rememberedAll={rememberedAll(userAnswers)} />
        }
        <BottomInfo currentDeck={currentDeck} resetRecall={resetRecall} userAnswers={userAnswers} />
      </Footer>
    </div>
  );
}
