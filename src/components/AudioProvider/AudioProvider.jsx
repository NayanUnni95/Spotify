import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';

function AudioProvider({ url, controls, loopState }) {
  return <AudioPlayer src={url} ref={controls} loop={loopState} />;
}

export default AudioProvider;
