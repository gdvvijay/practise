import React, { useState, useMemo } from 'react';
import './InterestCalculator.css';

function InterestCalculator() {
  const [inputs, setInputs] = useState({
    principal: '1000',
    rate: '5',
    years: '10',
    compoundings: '12',
  });
  const [results, setResults] = useState([]);

  // This should run the calculation whenever inputs change.
  // Using useMemo for this is a good pattern.
  useMemo(() => {
    const { principal, rate, years, compoundings } = inputs;

    const data = [];
    let futureValue = principal;

    for (let i = 1; i <= years; i++) {
      futureValue = futureValue * (1 + (rate / 100) / compoundings); // Incorrect formula
      data.push({ year: i, amount: futureValue });
    }
    setResults(data)
  }, [inputs]);
  
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Overwriting the state here, not preserving other values
    setInputs(prev=>({...prev, [name]: value }));
  };

  if(!results.length > 0) return
  return (
    <div className="calculator-container">
      <div className="input-panel">
        <div className="form-group">
          <label>Initial Principal ($)</label>
          <input type="number" name="principal" value={inputs.principal} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Annual Interest Rate (%)</label>
          <input type="number" name="rate" value={inputs.rate} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Years</label>
          <input type="number" name="years" value={inputs.years} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Compoundings per Year</label>
          <input type="number" name="compoundings" value={inputs.compoundings} onChange={handleInputChange} />
        </div>
      </div>
      <div className="output-panel">
        <h3>Projected Growth</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {results.map(result => (
                <tr key={result.year}>
                  <td>{result.year}</td>
                  <td>${result.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="final-balance">
          Final Balance: ${results.length > 0 ? results[results.length-1].amount.toFixed(2) : '--'}
        </div>
      </div>
    </div>
  );
}

export default InterestCalculator;