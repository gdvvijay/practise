import React, { useState, useRef, useEffect } from 'react';
import './CustomVideoPlayer.css';

function CustomVideoPlayer({ src }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  
  // Bug 6 Fix: This ref is now used to control the video element.
  const videoRef = useRef(null);

  // Sync isPlaying state with the video element
  useEffect(() => {
    const video = videoRef.current;
    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }, [isPlaying]);

  // Bug 1 Fix: Correctly toggle the `isPlaying` state.
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = (e) => {
    // Bug 2 Fix: Calculate and update the progress state.
    const newProgress = (e.target.currentTime / e.target.duration) * 100;
    setProgress(newProgress);
  };

  const handleProgressScrub = (e) => {
    // Bug 4 Fix: Calculate new time and set it on the video element.
    const newTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    setProgress(e.target.value); // Also update progress bar visually
  };
  
  const handleVolumeChange = (e) => {
    // Bug 5 Fix: Get the new volume value and set it on the video element.
    const newVolume = e.target.value;
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
  };
  
  // Handler for when video metadata (like duration) is loaded
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  return (
    <div className="video-player-container">
      <video
        ref={videoRef}
        src={src}
        className="video-element"
        onTimeUpdate={handleTimeUpdate}
        // Bug 3 Fix: Add onClick handler to the video itself
        onClick={togglePlay}
        onLoadedMetadata={handleLoadedMetadata} // Set duration when video loads
      />
      <div className="controls">
        <button onClick={togglePlay} className="control-btn">{isPlaying ? '❚❚' : '►'}</button>
        
        <span>{formatTime(videoRef.current ? videoRef.current.currentTime : 0)}</span>

        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={progress}
          className="progress-bar"
          // Add the onChange handler for scrubbing
          onChange={handleProgressScrub}
        />
        
        <span>{formatTime(duration)}</span>

        <div className="volume-control">
          <span>🔊</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume} // Control the slider with state
            className="volume-slider"
            onChange={handleVolumeChange} // Add the onChange handler
          />
        </div>
      </div>
    </div>
  );
}

export default CustomVideoPlayer;