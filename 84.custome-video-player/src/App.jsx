import React from 'react';
import CustomVideoPlayer from './CustomVideoPlayer';
import './App.css';

// You need to get a video file and place it in your /public folder.
// For example: save the video as /public/sample-video.mp4
const videoUrl = 'https://www.w3schools.com/html/mov_bbb.mp4';
/*
  Sample video URL to use (short, royalty-free):
  https://www.w3schools.com/html/mov_bbb.mp4
  Save this file and rename it to `sample-video.mp4`
*/

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Custom Video Player</h1>
        <p>Try using the custom play/pause, scrub, and volume controls.</p>
      </header>
      <main>
        <CustomVideoPlayer src={videoUrl} />
      </main>
    </div>
  );
}

export default App;