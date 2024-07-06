import { subscribe } from "../../js/data/state-manager.js";
import { EVENTS } from "../../js/data/constants.js";

export function AudioComponent() {
  const audioElements = {
    [EVENTS.GOOGLE_RUN_AWAY]: new Audio("../../../assets/sounds/miss.mp3"),
    [EVENTS.GOOGLE_CAUGHT]: new Audio("../../../assets/sounds/catch.wav"),
  };

  const playAudio = (type) => {
    const audio = audioElements[type];

    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  subscribe(({ type }) => {
    if (type in audioElements) {
      playAudio(type);
    }
  });
}