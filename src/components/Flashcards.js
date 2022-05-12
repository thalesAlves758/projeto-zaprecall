function Flashcard () {
  return (
    <div className="flashcard">
      <div className="question-title">
        <h2>Pergunta 1</h2>
        <ion-icon name="play-outline"></ion-icon>
      </div>
      {/* <div className="question-container">
        <div className="question">
          <h2>O que é JSX?</h2>
          <img src="assets/img/setinha.png" alt="Setinha" />
        </div>
        <div className="answer">
          <h2>JSX é uma sintaxe para escrever HTML dentro do JS</h2>
          <div className="buttons">
            <button className="red">Não lembrei</button>
            <button className="yellow">Quase não lembrei</button>
            <button className="green">Zap!</button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default function Flashcards () {
  return (
    <div className="flashcards">
      { Array(8).fill(<Flashcard />) }
    </div>
  );
}
