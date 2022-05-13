import logo from '../../assets/img/logo.png';
import smallLogo from '../../assets/img/logo-pequeno.png';

export default function Logo ({ big = false }) {
  return (
    <div className="logo">
      <img src={big ? logo : smallLogo} alt="Logo" />
      <h1>ZapRecall</h1>
    </div>
  );
}
