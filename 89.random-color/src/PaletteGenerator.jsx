import React, { useState, useEffect } from 'react';
import ColorColumn from './ColorColumn';
import './PaletteGenerator.css';

const PALETTE_SIZE = 5;

// Helper to generate a random hex color
const generateRandomHex = () => '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');

function PaletteGenerator() {
  const [colors, setColors] = useState([]);

  const generatePalette = () => {
    function isLockedColor(){
      const isFounded=colors.find((item)=>item.isLocked == true) 
      if(isFounded){
        return isFounded.hex
      }else{
        return generateRandomHex()
      }
    }
    setColors(prev=>[...prev,{id:crypto.randomUUID(),isLocked:false,hex:isLockedColor()}])

  };
  
  const toggleColorLock = (id) => {
    setColors(prev=>prev.map((item)=>item.id == id ? ({...item,isLocked:!item.isLocked}) : item))
  };

  useEffect(() => {

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        generatePalette();
      }
    });
    return document.removeEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        generatePalette();
      }
    })
  }, []);

  function onCopy(hexCode){
    navigator.clipboard.writeText(hexCode).then(()=>{
      console.log('copied')
    }).catch((err)=>{
      console.log('Failed to copy: ',err)
    })

  }
  return (
    <div className="palette-generator">
      <div className="palette-display">
        {colors.map((color) => (
          <ColorColumn key={color.id}
            hex={color.hex}
            isLocked={color.isLocked}
            id={color.id}
            onCopy={onCopy}
            onLock={toggleColorLock}
          />
        ))}
      </div>
      <div className="controls">
        <button onClick={generatePalette}>Generate Palette</button>
      </div>
    </div>
  );
}

export default PaletteGenerator;
