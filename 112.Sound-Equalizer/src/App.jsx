import React from 'react';
import Equalizer from './Equalizer';
import './App.css';

// The frequencies for the equalizer bands
const frequencies = ['60Hz', '310Hz', '1kHz', '6kHz', '16kHz'];

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Sound Equalizer</h1>
        <p>Drag the sliders to adjust the frequency bands. The controls are broken!</p>
      </header>
      <main>
        <Equalizer bands={frequencies} />
      </main>
    </div>
  );
}

export default App;