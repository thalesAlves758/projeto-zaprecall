import Logo from "./shared/Logo";

export default function InitialDisplay({ setDisplay }) {
  function init() {
    setDisplay('main');
  }

  return (
    <div className="start-container">
      <Logo big={true} />
      <button onClick={init}>Iniciar Recall!</button>
    </div>
  );
}
