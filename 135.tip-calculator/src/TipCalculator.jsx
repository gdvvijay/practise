import React, { useState } from 'react';
import './TipCalculator.css';

function TipCalculator() {
//   const [bill, setBill] = useState(50);
//   const [tipPercent, setTipPercent] = useState(0);
//   const [people, setPeople] = useState('1');
const initialValue={bill:'50',tipPercent:'15',people:'1'}
    const [formData,setFormData]=useState({
        bill:initialValue.bill,
        tipPercent:initialValue.tipPercent,
        people:initialValue.people
    })

  // These should be calculated values, not state
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

    function valueChange(e){
        let name=e.target.name
        let value=e.target.value
        setFormData(prev=>({...prev,[name]:value}))
    }
  
  const calculateResults = (percent) => {
    if (formData['bill'] > 0 && formData['people'] > 0) {
      const tip = formData['bill'] * (percent / 100);
      const totalPerPerson = (Number(formData['bill']) + Number(tip)) / formData['people'];

      setTipAmount(tip / formData['people']);
      setTotal(totalPerPerson);
    }
  };
function handleReset(){
    setFormData(initialValue)
    setTipAmount(0)
    setTotal(0)
}

  return (
    <div className="tip-calculator-container">
      <div className="inputs-section">
        <div className="input-group">
          <label>Bill</label>
          <input type="number" name='bill' value={formData['bill']} onChange={e => valueChange(e)} />
        </div>

        <div className="input-group">
          <label>Select Tip %</label>
          <div className="tip-options">
            {[5, 10, 15, 25, 50].map(percent => (
              <button key={percent} name='tipPercent' onClick={(e)=>{
                setFormData(prev=>({...prev,tipPercent:percent}))
                calculateResults(percent)
              }}>{percent}%</button>
            ))}
            <input type="number" name='tipPercent' min={1} value={formData['tipPercent']} onChange={e => {valueChange(e)
                 calculateResults(e.target.value)
            }} placeholder="Custom" />
          </div>
        </div>

        <div className="input-group">
          <label>Number of People</label>
          <input type="number" name='people' value={formData['people']} onChange={e => valueChange(e)} />
        </div>
      </div>

      <div className="results-section">
        <div className="result-item">
          <div>
            <p>Tip Amount</p>
            <small>/ person</small>
          </div>
          <span className="result-value">${tipAmount.toFixed(2)}</span>
        </div>
        <div className="result-item">
          <div>
            <p>Total</p>
            <small>/ person</small>
          </div>
          <span className="result-value">${total.toFixed(2)}</span>
        </div>
        <button className="reset-btn" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default TipCalculator;