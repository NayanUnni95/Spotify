import React, { useState, useRef, useEffect } from 'react';
import styles from './CustomProgressbar.module.css';
import AudioPlayer from 'react-player';

function ProgressBar() {
  const progressBar = useRef();
  const [valueP, setValueP] = useState(10);
  const [color, setColor] = useState('');
  const [playedPercentage, setPlayedPercentage] = useState(0);
  const [loadedPercentage, setLoadedPercentage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [seekSec, setSeekSec] = useState('');
  const [durationSec, setDurationSec] = useState('');

  const preview = () => {
    console.clear();
    console.log(`Played   : ${playedPercentage}`);
    console.log(`Loaded   : ${loadedPercentage}`);
    console.log(`progress : ${progress}`);
  };
  const change = () => {
    progressBar.current.value = progress;
    // updateSeekBar();
  };
  const handleSeek = (value) => {
    setProgress(value);
  };

  const updateSeekBar = () => {
    setValueP((progressBar.current.value / progressBar.current.max) * 100);

    handleSeek(valueP);
    // console.log(valueP);
  };
  const handleProgress = (state) => {
    setSeekSec(
      new Date(state.playedSeconds * 1000).toISOString().substring(14, 19)
    );
    setDurationSec(
      new Date(state.loadedSeconds * 1000).toISOString().substring(14, 19)
    );
    setValueP((state.played / progressBar.current.max) * 100);
    setPlayedPercentage(state.played * 100);
    setLoadedPercentage(state.loaded * 100);
    handleSeek(playedPercentage);
    // preview();
  };

  useEffect(() => {
    setColor(
      `linear-gradient(to right, #3264fe ${valueP}%, #d5d5d5 ${valueP}%)`
    );
    setValueP((progressBar.current.value / progressBar.current.max) * 100);
    preview();
  }, [valueP, seekSec]);
  return (
    <div className={styles.progressContainer}>
      <span>{seekSec}</span>
      <div className={styles.innerContainer}>
        <AudioPlayer
          url={
            'https://aac.saavncdn.com/140/62d1f2d4c8031e930c2fdc44b5705920_320.mp4'
          }
          controls
          onProgress={handleProgress}
          progressInterval={1000}
          onDuration={(event) => setDuration(event)}
          onSeek={(event) => setSec(event)}
        />
        <input
          type="range"
          className={styles.loadedProgressBar}
          min={0}
          value={loadedPercentage}
          max={100}
          style={{
            background: `linear-gradient(to right, #939393 ${loadedPercentage}%, #d5d5d5 ${loadedPercentage}%)`,
          }}
          disabled
        />
        <input
          type="range"
          min={0}
          // value={playedPercentage}
          value={progress}
          max={100}
          className={styles.bar}
          ref={progressBar}
          onChange={change}
          onClick={() => {
            console.log('clicked');
          }}
          // onChange={updateSeekBar}
          // onChange={(e) => {
          //   console.log(e.target);
          // }}
          style={{
            background: `linear-gradient(to right, #000000 ${playedPercentage}%, #ffffff00 ${playedPercentage}%`,
          }}
        />
      </div>
      <span>{durationSec}</span>
    </div>
  );
}

export default ProgressBar;
