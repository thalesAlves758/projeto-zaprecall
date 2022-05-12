import Logo from "./shared/Logo";

export default function InitialDisplay() {
  return (
    <div className="start-container">
      <Logo big={true} />
      <button>Iniciar Recall!</button>
    </div>
  );
}
