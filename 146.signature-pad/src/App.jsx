import React from 'react';
import SignaturePad from './SignaturePad';
import './App.css';
function App() {
return (
<div className="container">
<header>
<h1>Buggy Signature Pad</h1>
<p>Try to sign your name in the box below. The drawing logic is broken.</p>
</header>
<main>
<SignaturePad />
</main>
</div>
);
}
export default App;