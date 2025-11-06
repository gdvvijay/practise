import React, { useState } from 'react';
import StrengthMeter from './StrengthMeter';
import './PasswordStrengthChecker.css';

const criteria = [
  { id: 'lowercase', text: 'At least one lowercase letter' },
  { id: 'uppercase', text: 'At least one uppercase letter' },
  { id: 'number', text: 'At least one number' },
  { id: 'length', text: 'At least 8 characters long' },
];

function PasswordStrengthChecker() {
  const [password, setPassword] = useState('');
  const [checks, setChecks] = useState({
    lowercase: false,
    uppercase: false,
    number: false,
    length: false,
  });

  const validatePassword = () => {
    const newChecks = {};
    newChecks.lowercase = /[a-z]/.test(password);
    newChecks.uppercase = /[A-Z]/.test(password);
    newChecks.number = /[0-9]/.test(password);
    newChecks.length = password.length >= 8;
    setChecks(newChecks)
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
    validatePassword();
  };

  return (
    <div className="password-checker">
      <input
        type="password"
        className="password-input"
        placeholder="Enter your password"
        value={password}
        onChange={handleChange}
      />
      <StrengthMeter checks={checks}/>

      <ul className="criteria-list">
        {criteria.map(criterion => (
          <li key={criterion.id} className={checks[criterion.id] ? 'met' : 'unmet'}>
            {criterion.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PasswordStrengthChecker;