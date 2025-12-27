import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

function MusicPlayer({ track }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  
  const audioRef = useRef(null);
  const progressBarRef = useRef(null); // Ref for the progress bar input
  const animationRef = useRef(null); // Ref for the animation frame

  // Set up the audio element's properties and listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Get the total duration once the audio metadata is loaded
      const setAudioData = () => {
        setDuration(audio.duration);
        if(progressBarRef.current) {
          progressBarRef.current.max = audio.duration;
        }
      }

      // Add event listeners
      audio.addEventListener('loadedmetadata', setAudioData);
      audio.addEventListener('ended', () => setIsPlaying(false)); // Song finished
      
      // Cleanup listeners on unmount
      return () => {
        audio.removeEventListener('loadedmetadata', setAudioData);
        audio.removeEventListener('ended', () => setIsPlaying(false));
      };
    }
  }, []);

  // Bug 1 Fix: Correctly toggle the audio playback using the ref.
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!isPlaying) {
      audio.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audio.pause();
      cancelAnimationFrame(animationRef.current);
    }
    // Bug 5 is implicitly fixed by not resetting the audio state, just toggling.
    setIsPlaying(!isPlaying);
  };
  
  // Bug 2 Fix: Update progress state in a loop while playing.
  const whilePlaying = () => {
    if(progressBarRef.current) {
      progressBarRef.current.value = audioRef.current.currentTime;
      setCurrentTime(progressBarRef.current.value);
    }
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const handleProgressScrub = () => {
    // Bug 4 Fix: Seek to the new position in the audio.
    audioRef.current.currentTime = progressBarRef.current.value;
    setCurrentTime(progressBarRef.current.value); // Sync display
  };
  
  // Bug 3 Fix: Implement correct time formatting.
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const floorSeconds = Math.floor(seconds);
    const minutes = Math.floor(floorSeconds / 60);
    const remainingSeconds = floorSeconds % 60;
    return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className="music-player-container">
      <img src={track.albumArt} alt="Album Art" className="album-art" />
      <h2 className="track-title">{track.title}</h2>
      <h3 className="track-artist">{track.artist}</h3>
      
      {/* We don't use the audio element's native controls, but it must be in the DOM */}
      <audio
        ref={audioRef}
        src={track.audioSrc}
        preload="metadata" // Important for getting duration early
      />
      
      <div className="progress-bar-container">
        {/* Display current time */}
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          ref={progressBarRef}
          className="progress-bar"
          defaultValue="0" // Use defaultValue and control manually
          onChange={handleProgressScrub}
        />
        {/* Display total duration */}
        <span>{formatTime(duration)}</span>
      </div>

      <div className="controls">
        <button className="control-btn">⏮</button>
        <button className="control-btn play-btn" onClick={togglePlayPause}>
          {isPlaying ? '❚❚' : '▶'}
        </button>
        <button className="control-btn">⏭</button>
      </div>
    </div>
  );
}

export default MusicPlayer;