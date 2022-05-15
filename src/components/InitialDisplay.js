import { useState } from "react";
import Logo from "./shared/Logo";

export default function InitialDisplay({ setDisplay, decks, setZapTarget, setDeck }) {
  const deckDefaultValue = "default";

  const [selected, setSelected] = useState(deckDefaultValue);
  const [inputValue, setInputValue] = useState('');

  function init() {
    setDeck(decks[selected]);
    setZapTarget(inputValue);
    setDisplay('main');
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

      <select value={selected} onChange={handleSelectChange}>
        <option disabled value={deckDefaultValue}>Escolha seu deck</option>

        { decks.map((deck, index) => <option key={index} value={index}>{deck.about}</option>) }
      </select>

      <input
        type="text"
        placeholder="Digite sua meta de zaps..."
        value={inputValue}
        onChange={handleInputChange}
        disabled={selected === deckDefaultValue}
      />

      <button disabled={!canInitRecall()} onClick={init}>Iniciar Recall!</button>
    </div>
  );
}
