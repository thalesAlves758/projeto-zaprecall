import Logo from './shared/Logo';
import Flashcards from './Flashcards';
import BottomInfo from './BottomInfo';
import Footer from './Footer';
import EndMessage from './EndMessage';

export default function MainDisplay() {
  return (
    <div className="content">
      <Logo />
      <Flashcards />
      <Footer>
        {/* <EndMessage rememberedAll={true} /> */}
        <BottomInfo />
      </Footer>
    </div>
  );
}
