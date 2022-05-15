import QuestionIcon from "./QuestionIcon";

export default function BottomInfo ({ currentDeck, resetRecall, userAnswers }) {
  return (
    <div className="completed">
      <h3>{userAnswers.length}/{currentDeck.length} CONCLUÍDOS</h3>
      <div className="answer-icons">
        { userAnswers.map((answer, index) => <QuestionIcon key={index} userAnswer={answer} />) }
      </div>
      {userAnswers.length === currentDeck.length && <button onClick={resetRecall}>REINICIAR RECALL</button>}
    </div>
  );
}
