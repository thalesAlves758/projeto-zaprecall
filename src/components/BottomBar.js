function EndMessage ({ rememberedAll }) {
  return (
    <div className="end-message">
      <div className="title">
        <img src={ rememberedAll ? "assets/img/party.png" : "assets/img/sad.png" } alt="Reação" />
        <h3>{ rememberedAll ? "Parabéns!" : "Putz..." }</h3>
      </div>
      <p>
        {
          rememberedAll ?
          "Você não esqueceu de nenhum flashcard!" : 
          "Ainda faltam alguns... Mas não desanime!"
        }
      </p>
    </div>
  );
}

export default function BottomBar () {
  return (
    <div className="bottom-bar">
      {/* <EndMessage rememberedAll={true} /> */}
      <div className="completed">
        <h3>0/8 CONCLUÍDOS</h3>
        <div className="answer-icons">
          {/* <ion-icon name="close-circle"></ion-icon>
          <ion-icon name="help-circle"></ion-icon>
          <ion-icon name="checkmark-circle"></ion-icon> */}
        </div>
      </div>
    </div>
  );
}
