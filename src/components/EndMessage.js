import party from '../assets/img/party.png';
import sad from '../assets/img/sad.png';

export default function EndMessage ({ rememberedAll }) {
  return (
    <div className="end-message">
      <div className="title">
        <img src={ rememberedAll ? party : sad } alt="Reação" />
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
