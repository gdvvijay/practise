import React, { useState, useEffect } from 'react';
import './DrumMachine.css';

function DrumMachine({ pads }) {
  const [display, setDisplay] = useState('Press a key');
  const [activePad, setActivePad] = useState(null);

  const playSound = (key, id) => {
    // This is the core logic for playing audio
    console.log()
    const audio = document.getElementById(id);
    setActivePad(audio)
    audio.play().then(()=>console.log('playing')
    ).catch((err)=>console.log('something went wrong.',err))
    setDisplay(id);
  };
  useEffect(() => {
    // This effect should handle keyboard presses
    document.addEventListener('keydown', (e) => {
      const key = e.key;
      console.log(key)
      const pad = pads.find(p => p.key === key);
      console.log(pad)
      if (pad) {
        playSound(pad.key,pad.id);
      }
    });
    
    return document.removeEventListener('keydown',(e) => {
      const key = e.key
      const pad = pads.find(p => p.key === key);
      if (pad) {
        playSound(pad.key);
      }
    }); // Incorrect cleanup
  }, []);

  return (
    <div id="drum-machine" className="drum-machine">
      <div id="display" className="display">{display}</div>
      <div className="drum-pads">
        {pads.map(pad => (
          <div
            key={pad.id}
            id={pad.key}
            className="drum-pad"
            onClick={()=>playSound(pad.key,pad.id)}
          >
            {pad.key}
            <audio
              className="clip"
              id={pad.id}
              src={pad.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DrumMachine;