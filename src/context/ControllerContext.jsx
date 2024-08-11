import React from 'react';

function ControllerContext() {
  const playAudio = (playerRef) => {
    playerRef.current.audio.current.play();
  };
  const pauseAudio = (playerRef) => {
    playerRef.current.audio.current.pause();
  };
  const muteAudio = (playerRef) => {
    playerRef.current.audio.current.muted =
      !playerRef.current.audio.current.muted;
  };

  return { playAudio, pauseAudio, muteAudio };
}

export default ControllerContext;
