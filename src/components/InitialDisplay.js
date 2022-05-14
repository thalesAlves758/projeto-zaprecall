import { useState } from "react";
import Logo from "./shared/Logo";

export default function InitialDisplay({ setDisplay, decks, setDeck }) {
  const deckDefaultValue = "default";

  const [selected, setSelected] = useState(deckDefaultValue);

  function init() {
    setDeck(decks[selected]);
    setDisplay('main');
  }

  function handleSelectChange(event) {
    setSelected(event.target.value);
  }

  const canInitRecall = () => selected !== deckDefaultValue;

  return (
    <div className="start-container">
      <Logo big={true} />
      <select value={selected} onChange={handleSelectChange}>
        <option disabled value={deckDefaultValue}>Escolha seu deck</option>

        { decks.map((deck, index) => <option key={index} value={index}>{deck.about}</option>) }
      </select>
      <button disabled={!canInitRecall()} onClick={init}>Iniciar Recall!</button>
    </div>
  );
}
