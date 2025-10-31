import React, { useState } from 'react';
import './ProfileForm.css';

function ProfileForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev=>({...prev, [name]: value }));

    // Real-time validation check
    if (name === 'email') {
      validateEmail(value);
    }
  };

  const validateEmail = (email) => {
    // Simple check for an '@' symbol
    if (!email || !email.split('').includes('@') ){
      setError('Please enter a valid email address.');
      return false
    } else {
      setError('');
      return true
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) {
        setSuccess('');
        setError('Please fix the errors before submitting.');
        return;
    }

    if (!formData.name) {
        setSuccess('');
        setError('Name is a required field.');
        return;
    }

    setSuccess(`Profile updated for ${formData.name}!`);
    setError('');
  };


  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}

      <button type="submit">Update Profile</button>
    </form>
  );
}

export default ProfileForm;