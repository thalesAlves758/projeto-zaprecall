import Logo from './shared/Logo';
import Flashcards from './Flashcards';
import BottomBar from './BottomBar';

export default function MainContent() {
  return (
    <div className="content">
      <Logo />
      <Flashcards />
      <BottomBar />
    </div>
  );
}
