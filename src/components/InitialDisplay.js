import { useState } from "react";
import Logo from "./shared/Logo";

export default function InitialDisplay({ setInitialDisplay, decks, setZapTarget, setDeck }) {
  const deckDefaultValue = "default";

  const [selected, setSelected] = useState(deckDefaultValue);
  const [inputValue, setInputValue] = useState('');

  function init() {
    setDeck(decks[selected]);
    setZapTarget(inputValue);
    setInitialDisplay(false);
  }

  function handleSelectChange(event) {
    setSelected(event.target.value);
  }

  const isValidValue = value => value === '' || (parseInt(value) >= 1 && parseInt(value) <= decks[selected].questions.length);

  function handleInputChange(event) {
    const { value } = event.target;

    if(isValidValue(value)) {
      setInputValue(value);
    }
  }

  const canInitRecall = () => selected !== deckDefaultValue && inputValue !== '';

  return (
    <div className="start-container">
      <Logo big={true} />

      <div className="user-inputs">
        <select value={selected} onChange={handleSelectChange}>
          <option hidden value={deckDefaultValue}>Escolha seu deck</option>

          { decks.map((deck, index) => <option key={index} value={index}>{deck.about}</option>) }
        </select>

        <div className="zap-target-input">
          <input
            type="text"
            placeholder="Digite sua meta de zaps..."
            value={inputValue}
            onChange={handleInputChange}
            disabled={selected === deckDefaultValue}
          />
          { selected !== deckDefaultValue && <small>Deve ser um número de 1 a {decks[selected].questions.length}</small> }
        </div>

        <button disabled={!canInitRecall()} onClick={init}>Iniciar Recall!</button>
      </div>
    </div>
  );
}
