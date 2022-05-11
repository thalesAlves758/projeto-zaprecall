export default function Logo ({ big = false }) {
  return (
    <div className="logo">
      <img src={big ? "./assets/img/logo.png" : "./assets/img/logo-pequeno.png"} alt="Logo" />
      <h1>ZapRecall</h1>
    </div>
  );
}
