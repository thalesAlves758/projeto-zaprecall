import Logo from "./shared/Logo";

export default function StartDisplay() {
  return (
    <div className="start-container">
      <Logo big={true} />
      <button>Iniciar Recall!</button>
    </div>
  );
}
