import React, { useState } from 'react';
import './MortgageCalculator.css';

function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState(250000);
  const [interestRate, setInterestRate] = useState('5.5');
  const [loanTerm, setLoanTerm] = useState('30');
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMonthlyPayment = (e) => {
    e.preventDefault()
    // This is the core mortgage calculation logic (intentionally buggy)
    const principal = loanAmount;
    const monthlyInterestRate =  (interestRate / 100) / 12; // Should be divided by 12
    const numberOfPayments = loanTerm * 12; // Should be years * 12

    if (principal > 0 && monthlyInterestRate > 0 && numberOfPayments > 0) {
      const payment = principal   * monthlyInterestRate / numberOfPayments; // Incorrect formula
      setMonthlyPayment(payment);
    }
  };


  return (
    <div className="calculator-container">
      <div className="input-group">
        <label>Loan Amount ($)</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Interest Rate (%)</label>
        <input
          type="number"
          step="0.1"
          value={interestRate}
          onChange={(e)=>setInterestRate(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Loan Term (Years)</label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
      </div>

      <button onClick={calculateMonthlyPayment} className="calculate-btn">
        Calculate
      </button>

      <div className="result">
        <h2>Your Monthly Payment:</h2>
        <p className="monthly-payment">
          {monthlyPayment.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </p>
      </div>
    </div>
  );
}

export default MortgageCalculator;