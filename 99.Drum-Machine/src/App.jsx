import React from 'react';
import DrumMachine from './DrumMachine';
import './App.css';

// You will need to get these audio files and place them in your /public folder.
// For example: save the audio as /public/sounds/clap.wav, etc.
const drumPads = [
  { key: 'Q', id: 'Clap', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { key: 'W', id: 'HiHat', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { key: 'E', id: 'Kick', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { key: 'A', id: 'OpenHat', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  { key: 'S', id: 'Boom', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { key: 'D', id: 'Ride', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { key: 'Z', id: 'Snare', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
  { key: 'X', id: 'Tom', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { key: 'C', id: 'Tink', src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },
];
/*
  Sample sound URLs to use (from freecodecamp):
  - clap.wav: https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3
  - hihat.wav: 
  - kick.wav: 
  - openhat.wav: 
  - boom.wav: 
  - ride.wav: 
  - snare.wav: 
  - tom.wav: 
  - tink.wav: 
*/

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Drum Machine</h1>
        <p>Click the pads or press the corresponding keys to play sounds.</p>
      </header>
      <main>
        <DrumMachine pads={drumPads} />
      </main>
    </div>
  );
}

export default App;