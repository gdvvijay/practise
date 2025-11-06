import React from 'react';
import DataTable from './DataTable';
import './App.css';
function App() {
return (
<div className="app-container">
<header className="app-header">
<h1>Buggy Product Data Table</h1>
</header>
<main>
<DataTable />
</main>
</div>
);
}
export default App;