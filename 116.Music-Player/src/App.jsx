import React from 'react';
import MusicPlayer from './MusicPlayer';
import './App.css';

// You will need to get these files and place them in your /public folder.
// For example: /public/song.mp3, /public/album-art.jpg
const track = {
  title: 'Sample Song',
  artist: 'Creative Commons Artist',
  audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  albumArt: 'https://i.imgur.com/gqyT2zn.jpeg',
};
/*
  Sample file URLs to use:
  - song.mp3: https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3
  - album-art.jpg: https://i.imgur.com/gqyT2zn.jpeg
*/

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Music Player</h1>
      </header>
      <main>
        <MusicPlayer track={track} />
      </main>
    </div>
  );
}

export default App;