export const  playAudioError = () => {
    const audio = new Audio();
    audio.src = '../../../../assets/sounds/errou.mp3';
    audio.load();
    audio.play();
  };
