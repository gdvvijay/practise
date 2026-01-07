import React, { useState, useEffect } from 'react';
import './RegistrationForm.css';

const initialFormState = {
  username: '',
  email: '',
  password: '',
  accountType: 'Personal',
  agreedToTerms: 'no',
};

function RegistrationForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    // This effect is supposed to re-validate the form on every change.
    // validate()
  }, [formData]);

  const validate = () => {
    const tempErrors = {};
    if (formData.username.length < 3) {
      tempErrors.username = 'Username must be at least 3 characters long.';
      
    }
    if (!formData.email) {
      tempErrors.email = 'Email is required.';
    }
    if (formData.password.length < 8) {
      tempErrors.password = 'Password must be at least 8 characters long.';
    }
    setErrors(tempErrors);
    return tempErrors
  };
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // The state update is completely missing here.
    // console.log({ name, value, type, checked })
    
    setFormData(prev=>({...prev,[name]:name == 'agreedToTerms' ? checked : value}))
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(formData);
   const errorsobj= validate()
    if(errorsobj.password || errorsobj.email || errorsobj.username) return
    alert(`Submitting form...${JSON.stringify(formData)}`);
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Username</label>
        <input type="text" name="username" onChange={handleChange} />
        {errors.username && <p className="error-text">{errors.username}</p>}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} />
        {errors.password && <p className="error-text">{errors.password}</p>}
      </div>
      
      <div className="form-group">
        <label>Account Type</label>
        <select name="accountType" onChange={handleChange}>
          <option value="" hidden>select-one</option>
          <option value="Personal">Personal</option>
          <option value="Business">Business</option>
        </select>
      </div>

      <div className="form-group-inline">
        <input type="checkbox" name="agreedToTerms" onChange={handleChange} id="terms"/>
        <label htmlFor="terms">I agree to the Terms and Conditions</label>
        {errors.agreedToTerms && <p className="error-text">{errors.agreedToTerms}</p>}
      </div>

      <button type="submit" className="submit-btn">Register</button>
    </form>
  );
}

export default RegistrationForm;