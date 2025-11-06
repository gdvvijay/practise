import React from 'react';
import InviteForm from './InviteForm';
import './App.css';
function App() {
return (
<div className="container">
<header>
<h1>Buggy "Invite Your Team" Form</h1>
<p>Try adding, removing, and editing team members to find the bugs.</p>
</header>
<InviteForm />
</div>
);
}

export default InviteForm;