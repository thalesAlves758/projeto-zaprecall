export default function QuestionIcon ({ userAnswer }) {
  function getIconName(text) {
    switch(text) {
      case 'didnt-remember':
        return 'close-circle';

      case 'almost':
        return 'help-circle';

      case 'remembered':
        return 'checkmark-circle';

      default:
        return 'play-outline';
    }
  }

  return (
    <ion-icon name={getIconName(userAnswer)}></ion-icon>
  );
}
