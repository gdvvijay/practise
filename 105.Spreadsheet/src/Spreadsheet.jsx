import React, { useState } from 'react';
import './Spreadsheet.css';

// Function to initialize the grid data
const createInitialGrid = (rows, cols) => {
  const grid = [];
  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      row.push({ value: '' }); // Each cell is an object
    }
    grid.push(row);
  }
  return grid;
};


function Spreadsheet({ rows, cols }) {
  const [gridData, setGridData] = useState(createInitialGrid(rows, cols));
  const [sumOfCell,setSumOfCell]=useState()
  const handleCellChange = (rowIndex, colIndex, value) => {
    // This is a direct state mutation bug
    // gridData[rowIndex][colIndex].value = value;
    setGridData(prev=>prev.map((data,i)=>rowIndex == i ? data.map((innerData,i)=> colIndex == i ? {value:value} : innerData) : data));
  };
  const parseFormula = (value, grid) => {
    // This logic is missing. It should parse and compute formulas.
   if((value.startsWith('=SUM(') || value.startsWith('=MULT(')) && value.endsWith(')')){
     const selectedCell=value.split('(').pop().split(')').shift().split(',')
    const valueArray=selectedCell.map((singleCell,i)=>{
      const character=singleCell[0]
      const cellNumber=singleCell[1]
      const columnIndex=character?.charCodeAt() - 65
      const rowIndex=cellNumber - 1
     if(!isNaN(rowIndex) && !isNaN(columnIndex) ){
       const valueOf=gridData[rowIndex][columnIndex]
       
       if(value.startsWith('=SUM(')){

         return valueOf.value == '' ? {value: '0'} : valueOf
       }
       if(value.startsWith('=MULT(')){
        return valueOf.value == '' ? {value: '1'} : valueOf
       }
     }
    })
    if(value.startsWith('=SUM(')){
      return valueArray.reduce((acc,curr)=>acc + Number(curr?.value),0)
    }
    if(value.startsWith('=MULT(')){
      return valueArray.reduce((acc,curr)=>acc * Number(curr?.value),1)

    }
    
    
   }
    return value;
  };
 
  const getCellValue = (rowIndex, colIndex) => {
    // This should display either the raw value or the computed formula result
    const cell = gridData[rowIndex][colIndex];
    
    if (cell.value.startsWith('=')) {
      return parseFormula(cell.value,gridData);
    }
    return cell.value;
  };

  const headers = Array.from({ length: cols }, (_, i) => String.fromCharCode(65 + i));

  return (
    <div className="spreadsheet-container">
      <table>
        <thead>
          <tr>
            <th></th>
            {headers.map(header => <th key={header}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {gridData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <th>{rowIndex + 1}</th>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={getCellValue(rowIndex, colIndex)}
                    onChange={(e)=>handleCellChange(rowIndex,colIndex,e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Spreadsheet;