import Logo from './shared/Logo';
import Flashcards from './Flashcards';
import BottomInfo from './BottomInfo';
import Footer from './Footer';
import EndMessage from './EndMessage';
import { useState } from 'react';

export default function MainDisplay() {
  const decks = [
    [
      {
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript",
      }, {
        question: "O React é __",
        answer: "uma biblioteca JavaScript para construção de interfaces",
      }, {
        question: "Componentes devem iniciar com __",
        answer: "letra maiúscula",
      }, {
        question: "Podemos colocar __ dentro do JSX",
        answer: "expressões",
      }, {
        question: "O ReactDOM nos ajuda __",
        answer: "interagindo com a DOM para colocar componentes React na mesma",
      }, {
        question: "Usamos o npm para __",
        answer: "gerenciar os pacotes necessários e suas dependências",
      }, {
        question: "Usamos props para __",
        answer: "passar diferentes informações para componentes",
      }, {
        question: "Usamos estado (state) para __",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
      },
    ]
  ];

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
      <Flashcards deck={decks[0]} userAnswers={userAnswers} setUserAnswers={setUserAnswers} />
      <Footer>
        {
          areAllAnswered(userAnswers.amountAnswers, decks[0]) &&
          <EndMessage rememberedAll={rememberedAll(userAnswers.answers)} />
        }
        <BottomInfo amountQuestions={decks[0].length} userAnswers={userAnswers} />
      </Footer>
    </div>
  );
}
