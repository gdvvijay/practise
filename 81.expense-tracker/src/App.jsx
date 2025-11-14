import React from 'react';
import ExpenseTracker from './ExpenseTracker';
import './App.css';
function App() {
return (
<div className="container">
<header>
<h1>Buggy Expense Tracker</h1>
</header>
<main>
<ExpenseTracker />
</main>
</div>
);
}
export default App;