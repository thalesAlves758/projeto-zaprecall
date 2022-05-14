import QuestionIcon from "./QuestionIcon";

export default function BottomInfo ({ amountQuestions, userAnswers: {amountAnswers, answers} }) {
  return (
    <div className="completed">
      <h3>{amountAnswers}/{amountQuestions} CONCLUÍDOS</h3>
      <div className="answer-icons">
        { answers.map((answer, index) => <QuestionIcon key={index} userAnswer={answer} />) }
      </div>
    </div>
  );
}
