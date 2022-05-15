import InitialDisplay from "./InitialDisplay";
import MainDisplay from './MainDisplay';
import { useState } from 'react';

export default function App () {
  const decks = [
    {
      about: "HTML",
      questions: [
        {
          question: "O que significa HTML?",
          answer: "Hyper Text Markup Language",
        }, {
          question: "Qual é a tag HTML que insere uma quebra de linha?",
          answer: "<br>",
        }, {
          question: "Qual é a tag HTML que define um texto importante?",
          answer: "<strong>",
        }, {
          question: "Qual caracter é usado para indicar o fim de uma tag?",
          answer: "/",
        }, {
          question: "Como se abre um link em uma nova guia do navegador?",
          answer: "<a href=\"url\" target=\"_blank\">",
        }, {
          question: "É verdade que elementos inline normalmente são apresentados sem quebrar numa nova linha?",
          answer: "Sim",
        },
      ],
    }, {
      about: "CSS",
      questions: [
        {
          question: "O que significa CSS?",
          answer: "Cascading Style Sheets",
        }, {
          question: "Em qual tag HTML é o lugar corrento para se referir a um CSS externo?",
          answer: "Na tag <head>",
        }, {
          question: "Qual tag HTML é usada para definir um CSS interno?",
          answer: "A tag <style>",
        }, {
          question: "Qual atributo HTML é usado para definir estilos inline?",
          answer: "O atributo style",
        }, {
          question: "Qual propriedade CSS é usada para mudar a cor de fundo de um elemento?",
          answer: "A propriedade background-color",
        }, {
          question: "Qual propriedade CSS é usada para mudar a cor texto de um elemento?",
          answer: "A propriedade color",
        }, {
          question: "Qual propriedade CSS controla o tamanho de um texto?",
          answer: "A propriedade font-size",
        }, {
          question: "Como fazer cada palavra em um texto começar com a primeira letra maiúscula (capitalizado)?",
          answer: "Com a propriedade text-transform: capitalize",
        }, {
          question: "Qual propriedade é usada para mudar a fonte de um elemento?",
          answer: "A propriedade font-family",
        }, {
          question: "Qual propriedade é usada para mudar a margem esquerda de um elemento?",
          answer: "A propriedade margin-left",
        },
      ],
    }, {
      about: "React",
      questions: [
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
      ],
    },
  ];

  const [display, setDisplay] = useState('initial');
  const [deck, setDeck] = useState(null);
  const [zapTarget, setZapTarget] = useState('');

  return (
    <>
      {
        display === 'initial' ?
        <InitialDisplay setDisplay={setDisplay} decks={decks} setZapTarget={setZapTarget} setDeck={setDeck} /> :
        <MainDisplay deck={deck} zapTarget={zapTarget} />
      }
    </>
  );
}
