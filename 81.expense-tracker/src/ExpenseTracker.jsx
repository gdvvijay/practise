import React, {useState} from 'react';
import './ExpenseTracker.css';

let nextId = 3;

function ExpenseTracker() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: 'Salary', amount: 5000 },
    { id: 2, text: 'Groceries', amount: -150 },
  ]);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const handleAddTransaction = (e) => {
     if (text.trim() === '' || amount === '') return;
    e.preventDefault();
    const newTransaction = {
      id: nextId++,
      text: text,
      amount: +amount
    };
    setTransactions(prev=>[...prev,newTransaction]);
        setText('');
    setAmount('');
  };
  
  const handleDeleteTransaction = (id) => {
    setTransactions(prev=>prev.filter(item=>item.id !== id));
  };
  
  // Calculate totals
  const amounts = transactions.map(t => t.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0);
  const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1;

  return (
    <div className="tracker-container">
      <div className="balance">
        <h4>Your Balance</h4>
        <h1 id="balance">${total.toFixed(2)}</h1>
      </div>

      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${Math.abs(income).toFixed(2)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${Math.abs(expense).toFixed(2)}</p>
        </div>
      </div>
      
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.text} <span>${transaction.amount.toFixed(2)}</span>
            <button className="delete-btn" onClick={()=>handleDeleteTransaction(transaction.id)}>x</button>
          </li>
        ))}
      </ul>
      
      <h3>Add new transaction</h3>
      <form onSubmit={handleAddTransaction}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter description..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default ExpenseTracker;