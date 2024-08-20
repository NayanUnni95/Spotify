import React, { useState, createContext } from 'react';
import AudioPlayer from 'react-player';

export const AudioContext = createContext();

function AudioProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [mute, setMute] = useState(false);
  const [progress, setProgress] = useState({});
  const [duration, setDuration] = useState(0);

  const playPause = () => setIsPlaying(!isPlaying);
  const muteAudio = () => setMute(!mute);
  const toggleRepeat = () => setRepeat(!repeat);
  const toggleShuffle = () => setShuffle(!shuffle);

  // Reference data
  const TrackData = {
    name: 'malabari banger',
    artists: ['dabzee', 'mhr', 'joker', 'sa'],
    playlist: 'trending now malayalam',
    images: [
      {
        url: 'https://i.scdn.co/image/ab67616d0000b2730a5fda5bb1a466fc1ee47d56',
        height: 640,
        width: 640,
      },
      {
        url: 'https://i.scdn.co/image/ab67616d00001e020a5fda5bb1a466fc1ee47d56',
        height: 300,
        width: 300,
      },
      {
        url: 'https://i.scdn.co/image/ab67616d000048510a5fda5bb1a466fc1ee47d56',
        height: 64,
        width: 64,
      },
    ],
    downloadUrl: [
      {
        quality: '12kbps',
        url: 'https://aac.saavncdn.com/504/05b2fb10b4d21f8422e78412ea344ac5_12.mp4',
      },
      {
        quality: '48kbps',
        url: 'https://aac.saavncdn.com/504/05b2fb10b4d21f8422e78412ea344ac5_48.mp4',
      },
      {
        quality: '96kbps',
        url: 'https://aac.saavncdn.com/504/05b2fb10b4d21f8422e78412ea344ac5_96.mp4',
      },
      {
        quality: '160kbps',
        url: 'https://aac.saavncdn.com/504/05b2fb10b4d21f8422e78412ea344ac5_160.mp4',
      },
      {
        quality: '320kbps',
        url: 'https://aac.saavncdn.com/504/05b2fb10b4d21f8422e78412ea344ac5_320.mp4',
      },
    ],
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        repeat,
        shuffle,
        mute,
        muteAudio,
        playPause,
        toggleRepeat,
        toggleShuffle,
        TrackData,
        progress,
        duration,
      }}
    >
      <AudioPlayer
        url={TrackData.downloadUrl[2].url}
        playing={isPlaying}
        muted={mute}
        loop={repeat}
        onProgress={setProgress}
        onDuration={setDuration}
        style={{ display: 'none' }}
      />
      {children}
    </AudioContext.Provider>
  );
}

export default AudioProvider;